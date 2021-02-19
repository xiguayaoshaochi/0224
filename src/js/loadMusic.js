let musicArr = [
  "bgm",
  "choose",
  "ding"
];
let musicNum = 0;
musicArr.forEach((item) => {
  import( /* webpackMode: "eager" */ "../mp3/use/" + item + '.mp3').then(module => {
    musicNum++;
    var itemName = item.match(/\w+/)[0];
    var bool = false;
    // itemName.indexOf("bgm")>-1 ? bool = true : bool = false;
    // itemName.indexOf("huashui") > -1 ? bool = true : bool = false;
    if (itemName.indexOf("bgm") > -1 || itemName.indexOf("huashui") > -1) {
      bool = true
    }

    window[itemName + "_src"] = module.default;
    window[itemName] = new loadMusic(window[itemName + "_src"], bool);
    // console.log(itemName)
    if (musicNum == musicArr.length) {
      // console.log("mus");
    }

  }).catch(err => {
    console.log(err.message);
  });
})

window.audioCtx = new(window.AudioContext || window.webkitAudioContext)();
window.gainNode = audioCtx.createGain();

function loadMusic(msrc, loop) {
  var _this = this;
  _this.b = null;
  _this.startTime = 0;
  _this.startOffset = 0;
  gainNode = audioCtx.createGain();
  _this.source = audioCtx.createBufferSource();
  _this.req = new XMLHttpRequest();
  _this.req.open('GET', msrc, true);
  _this.req.responseType = 'arraybuffer';
  _this.req.onload = function () {
    var audioData = _this.req.response;
    audioCtx.decodeAudioData(audioData, function (buffer) {
      _this.b = buffer;
      _this.source.buffer = _this.b;
      _this.source.connect(gainNode)
      gainNode.connect(audioCtx.destination);
    })
  };
  _this.req.send();
  _this.set = function () {
      _this.source = null;
      _this.startTime = audioCtx.currentTime;
      _this.source = audioCtx.createBufferSource();
      _this.source.loop = loop;
      _this.source.buffer = _this.b;
      _this.source.connect(gainNode);
      gainNode.connect(audioCtx.destination);
    },
    _this.ready = function () {
      _this.set();
      _this.source.start(0);
      _this.source.stop(0);
    }
  _this.pause = function () {
    _this.source.stop();
    _this.startOffset += audioCtx.currentTime - _this.startTime;
  }
  _this.play = function (start) {
    _this.set();
    if (start) {
      _this.source.start(0, _this.startOffset % _this.b.duration);
    } else {
      _this.source.start(0);
    }

  }
}


window.bgm_state = false;
window.bgm_play = function () {
  //开始播放背景音乐，并预播放其它音效
  window.bgm_state = true;
  for (const item of musicArr) {
    item.indexOf("bgm") > -1 ? window[item].play(0) : window[item].ready();
  }
  musicState = "play";
}

// module.exports = loadMusic
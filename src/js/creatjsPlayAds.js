var $ = require('jquery');
window.first=()=>{
  window.dx1 = wb.yingzi.x - wsp.mine_all_ani.x;
  window.dy1 = wb.yingzi.y - wsp.mine_all_ani.y;
  window.dx2 = wb.yingzi2.x - wsp.mine_all_ani2.x;
  window.dy2 = wb.yingzi2.y - wsp.mine_all_ani2.y;
}



window.endShow3 = () => {
  
}



window.endShow1 = ()=> {
  wsp.mine_all_ani.gotoAndPlay("walk_br");
  mapMove(wsp.mine_all_ani, 1260.5, 692.3, 1, false, endShow2, "suibian");
}

window.endShow2 = () => {
  wsp.mine_all_ani.gotoAndPlay("walk_bz");
  mapMove(wsp.mine_all_ani, 1316.2, 644.4, 1, false, endShow3, "suibian");
}

var endLock=0;
window.endShow = function (choose) {

  if (endLock!=0) {
    return false
  }
  endLock=1;
  
  // wsp.heli_ani.gotoAndPlay("stop");
  // setTimeouc(function(){
  //   wsp.mine_all_ani.gotoAndPlay("huimao");
  // },500)
  // createjs.Tween.get(wsp.mine_all_ani).to({alpha:0},300);
  // createjs.Tween.removeTweens(wb.hand2);
  // wb.hand2.alpha = 0;
  var chooseTime = 500;
  var powImg = wb.pow_img;
  var playBtn = wb.play_btn;
  var logo = wb.logo;
  console.log(choose, powImg, playBtn)
  if (choose != "wrong") {
    chooseTime = 1000;
    powImg = wb.pow_img;
    playBtn = wb.play_btn;
    wsp.yanhua3_all.scaleX = wsp.yanhua3_all.scaleY = 2; wsp.yanhua1_all.scaleX = wsp.yanhua1_all.scaleY = 2;
    wsp.yanhua3_all.alpha = 0; wsp.yanhua1_all.alpha = 0;

    wsp.yanhua33_all.scaleX = wsp.yanhua33_all.scaleY = 2; wsp.yanhua11_all.scaleX = wsp.yanhua11_all.scaleY = 2;
    wsp.yanhua33_all.alpha = 0; wsp.yanhua11_all.alpha = 0;

    wsp.yanhua333_all.scaleX = wsp.yanhua333_all.scaleY = 2; wsp.yanhua111_all.scaleX = wsp.yanhua111_all.scaleY = 2;
    wsp.yanhua333_all.alpha = 0; wsp.yanhua111_all.alpha = 0;

    wsp.yanhua2_all.scaleX = wsp.yanhua2_all.scaleY = 2; wsp.yanhua22_all.scaleX = wsp.yanhua22_all.scaleY = 2;
    wsp.yanhua2_all.alpha = 0; wsp.yanhua22_all.alpha = 0;

    yanhuaChange();
    setTimeouc(function () {
      yanhuaChange1();
    }, 100);
    setTimeouc(function () {
      yanhuaChange3();
    }, 50);

    yanhuaChange11();
    setTimeouc(function () {
      yanhuaChange33();
    }, 50);

    yanhuaChange2();
    setTimeouc(function () {
      yanhuaChange22();
    }, 50);

    setTimeouc(function () {
      yanhuaChange4();
    }, 100);
  } else {

  }


  setTimeouc(function () {
    yanhua_lock = false;
    containerAll3.removeChild(wb.bag, wb.sma_kuang);
    addShape('bg_shape1', -(containerAll.x - containerAll3.x), -1000, 2600, 2500, 0.6, 'rect');
    containerAll2.addChild(powImg, playBtn, logo);
    containerAll2.scaleX = containerAll2.scaleY = 0;
    var W = window.innerWidth;
    var H = window.innerHeight;
    var sca = 1;
    if (W >= H && typeof powImg != "undefined") {
      powImg.x = Heng_pow_img_x;
      powImg.y = Heng_pow_img_y;
      playBtn.x = Heng_play_btn_x;
      playBtn.y = Heng_play_btn_y;
      logo.x = Heng_logo_x;
      logo.y = Heng_logo_y;
      sca = 1;
    } else {
      powImg.x = Shu_pow_img_x;
      powImg.y = Shu_pow_img_y;
      playBtn.x = Shu_play_btn_x;
      playBtn.y = Shu_play_btn_y;
      logo.x = Shu_logo_x;
      logo.y = Shu_logo_y;
    }

    setTimeouc(function () {
      var start_pox = 46;
      var start_poy = 460;
      var x1 = powImg.x - start_pox + 50;
      var y1 = powImg.y - start_poy + 500;
      containerAll2.regX = x1;
      containerAll2.regY = y1;
      containerAll2.x = containerAll2.x + x1;
      containerAll2.y = containerAll2.y + y1;


      // var drawcontent_box = containerAll2.getBounds();
      // var shape_rec = new createjs.Shape();
      // shape_rec.alpha=0.5;
      // shape_rec.graphics.setStrokeStyle(1).beginStroke("#AAA").beginFill('#FCFCFC');
      // shape_rec.graphics.moveTo(0,0).drawRect(drawcontent_box.x, drawcontent_box.y, drawcontent_box.width, drawcontent_box.height);
      // shape_rec.graphics.endFill().endStroke();
      // stage.addChild(shape_rec);

      // var shape_rec1 = new createjs.Shape();
      // shape_rec1.alpha=1;
      // shape_rec1.graphics.setStrokeStyle(1).beginStroke("#ccc").beginFill('#ff0012');
      // shape_rec1.graphics.moveTo(0,0).drawRect(containerAll2.regX, containerAll2.regY, 10, 10);
      // shape_rec1.graphics.endFill().endStroke();
      // stage.addChild(shape_rec1);
      containerAll2.alpha = 1;
      success.play(0);
      // removeStop(wsp.sheep_all_ani,wsp.deer_all_ani)
      createjs.Tween.get(containerAll2).to({ scaleX: sca, scaleY: sca }, 800, createjs.Ease.backOut).call(function () {
        var btn = new scale_animate(playBtn, 1, 1.1, 1000);
      });

    }, 50)

  }, chooseTime)
}

window.chooseChange = (objl1, objr1, objl2, objr2)=>{
  clearAllChoose();
  var scaleNuml = objl2.scaleX;
  var scaleNumr = objr2.scaleX;

  objl2.scaleX = objl2.scaleY = 0; objr2.scaleX = objr2.scaleY = 0;
  createjs.Tween.get(objl1).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 50, createjs.Ease.quadOut);
  createjs.Tween.get(objr1).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 50, createjs.Ease.quadOut);
  createjs.Tween.get(objl2).to({ alpha: 1, scaleX: scaleNuml, scaleY: scaleNuml }, 600, createjs.Ease.backOut);
  createjs.Tween.get(objr2).to({ alpha: 1, scaleX: scaleNumr, scaleY: scaleNumr }, 600, createjs.Ease.backOut);
}

function clearAllChoose() {
  wb.cha.scaleX = 0; wb.cha.scaleX = 0; wb.gou.scaleX = 0; wb.gou.scaleY = 0;
  wb.cha2.scaleX = 0; wb.cha2.scaleY = 0; wb.gou2.scaleX = 0; wb.gou2.scaleY = 0;
  // wb.yellow1.alpha=0.02;wb.yellow2.alpha=0.02;
  createjs.Tween.get(wb.yellow1).to({ alpha: 0.02 }, 100);
  createjs.Tween.get(wb.yellow2).to({ alpha: 0.02 }, 100);
}



window.removeStop=function(obj){
  var e = arguments.length;
  if (e > 1) {
    console.log(arguments);
    for (var i = 0; i < e; i++) {
      // console.log(arguments[i]);
      if (arguments[i]!=null) {
        console.log(arguments[i])
        createjs.Tween.removeTweens(arguments[i]);
        arguments[i].parent.removeChild(arguments[i]);
      }

      
    }
  } else {
    if (obj.name ="hand2") {
      obj.alpha=0;
    }
    createjs.Tween.removeTweens(obj);
    // obj.parent.removeChild(obj);
    obj.alpha=0;
  }
}

window.handAni = function(obj, arr) {
  var _this = this;
  _this.index_ = 0;
  _this.arr = arr;
  _this.obj = obj;
  _this.pauseState = "open";
  _this.obj.scaleX = _this.obj.scaleY = 1; _this.obj.alpha = 0;
  _this.obj.x = _this.arr[_this.index_].x - 120; _this.obj.y = _this.arr[_this.index_].y - 150;
  createjs.Tween.get(_this.obj).to({ scaleX: 0.8, scaleY: 0.8, alpha: 1, x: _this.obj.x + 60, y: _this.obj.y + 80 }, 700, createjs.Ease.circOut).call(function(){
    _this.start();
  });

  _this.start = function () {
    // console.log("start")
    _this.index_++;
    _this.obj.x = arr[_this.index_ % _this.arr.length].x - 120; _this.obj.y = arr[_this.index_ % _this.arr.length].y - 150; _this.obj.scaleX = _this.obj.scaleY = 1.2;
    createjs.Tween.get(_this.obj).to({ scaleX: 0.8, scaleY: 0.8, x: _this.obj.x + 60, y: _this.obj.y + 80 }, 700, createjs.Ease.circOut).wait(200).call(function () {
      if (_this.pauseState == "open") {
        return _this.start();
      }
    });
  }
  _this.clear = function () {
    _this.pauseState = "lock";
    // clearInterval(_this.ani);
    _this.obj.alpha = 0;
    createjs.Tween.removeTweens(_this.obj);
  }
  _this.restart = function () {
    _this.pauseState = "open";
    _this.index_ = 0;
    _this.obj.alpha = 1;
    _this.obj.scaleX = _this.obj.scaleY = 1;
    _this.obj.x = _this.arr[_this.index_].x - 120; _this.obj.y = _this.arr[_this.index_].y - 150;
    createjs.Tween.get(_this.obj).to({ scaleX: 0.8, scaleY: 0.8, alpha: 1, x: _this.obj.x + 60, y: _this.obj.y + 80 }, 700, createjs.Ease.circOut).call(function () {
      _this.start();
    });
  }

}


window.waitFun = (call, timer) => {
  var _this = this;
  _this.timer = timer;
  _this.start = setTimeouc(function () {
    call();
  }, _this.timer)
  _this.stop = function () {
    createjs.clearTimeout(_this.start);
  }
  _this.pause = function () {
    createjs.clearTimeout(_this.start);
    _this.start = setTimeouc(function () {
      call();
    }, _this.timer)
  }
}


window.eatLoop = function(obj, later, timer) {
  var _this = this;
  _this.lock = true;
  _this.mlock = true;
  
  setTimeouc(function () {
    obj.gotoAndPlay("jiao");
    // console.log(obj.name)
    _this.c = setInterval(function () {
      if (_this.lock == true) {
        obj.gotoAndPlay("jiao");
        // console.log(obj.name,"dierge")
        if (_this.mlock == true) {
          // wolf.play(0);
        }
      }
    }, timer)
  }, later)
}

window.rotateLoop = function(obj) {
  var _this = this;
  _this.obj = obj;
  _this.rn = 360;
  createjs.Tween.get(_this.obj).to({ rotation: _this.rn }, 2000);
  _this.c = setInterval(function () {
    _this.obj.rotation = 0;
    createjs.Tween.get(_this.obj).to({ rotation: _this.rn }, 2000);
  }, 2000)
  _this.stop = function () {
    clearInterval(_this.c);
  }
}

window.shuWobble = (obj) => {
  var _this = this;
  _this.obj = obj;
  _this.num = 0;
  _this.r = null;
  _this.lock = true;
  createjs.Tween.get(_this.obj).to({ rotation: -3 }, 500, createjs.Ease.cubicOut).call(function () { _this.start() });
  _this.start = function () {
    (_this.num % 2 == 0) ?
      (_this.r = 3,
        _this.func = createjs.Ease.cubicIn)
      :
      (_this.r = -3,
        _this.func = createjs.Ease.cubicOut);
    _this.num++;
    createjs.Tween.get(_this.obj).to({ rotation: _this.r }, 1000, createjs.Ease.cubicInOut).call(function () {
      if (_this.lock == true) {
        if (_this.num % 3 == 0) {
          createjs.setTimeout(function () {
            _this.start();
          }, 2000)
        } else {
          _this.start();
        }
      }

    });
  }
  _this.clear = function () {
    _this.lock = false;
    _this.obj.rotation = 0;
    createjs.Tween.removeTweens(obj);
  }
}

window.shuWobble1 = function(obj, moveX)  {
  var _this = this;
  _this.obj = obj;
  _this.num = 0;
  _this.r = null;
  var timi = random1(1, 10) * 100;
  
  setTimeout(() => {
    createjs.Tween.get(_this.obj).to({ rotation: -moveX }, 1000, createjs.Ease.cubicOut).call(function () { _this.start() });
  }, timi);

  _this.start = function () {
    (_this.num % 2 == 0) ?
      (_this.r = moveX,
        _this.func = createjs.Ease.cubicIn)
      :
      (_this.r = -moveX,
        _this.func = createjs.Ease.cubicOut);
    _this.num++;
    createjs.Tween.get(_this.obj).to({ rotation: _this.r }, 2000, createjs.Ease.cubicInOut).call(function () {
      _this.start();
    });
  }
  _this.clear = function () {

  }
}

//按钮亮度闪烁动画
window.blink_animate =(obj, ops, opd, duration)=> {
  var _this = this;
  _this.obj = obj;
  _this.duration = duration;
  _this.num = 0;
  createjs.Tween.get(_this.obj).to({ alpha: opd }, duration, createjs.Ease.quadOut);
  _this.ani = setInterval(function () {
    (_this.num % 2 == 1) ? _this.dx = ops : _this.dx = opd;
    createjs.Tween.get(_this.obj).to({ alpha: _this.dx }, duration, createjs.Ease.quadOut);
    _this.num++;
  }, _this.duration);
  _this.clear = function () {
    clearInterval(_this.ani);
  }
}


window.recoveryChoose = () => {
  wb.cha.scaleX = wb.cha.scaleY = 0; wb.cha2.scaleX = wb.cha2.scaleY = 0;
  wb.gou.scaleX = wb.gou.scaleY = 0; wb.gou2.scaleX = wb.gou2.scaleY = 0;
  // createjs.Tween.get(wb.yellow1).to({alpha:0.02},100);
  // createjs.Tween.get(wb.yellow2).to({alpha:0.02},100);
  wb.yellow1.alpha = wb.yellow2.alpha = 0.02;
}

window.mineChangeSite = (x, y, alpha)=> {
  var alp = alpha;
  wsp.mine_all_ani.x = x;
  wsp.mine_all_ani.y = y;
  wb.yingzi.x = wsp.mine_all_ani.x + dx1;
  wb.yingzi.y = wsp.mine_all_ani.y + dy1;
  if(!alpha){
    alp = 1;
  }
  wsp.mine_all_ani.alpha = alp;
  wb.yingzi.alpha = alp;
}

window.mineChangeSite2 = (x, y, alpha)=>{
  wsp.mine_all_ani2.x = x;
  wsp.mine_all_ani2.y = y;
  wsp.mine_all_ani2.alpha = alpha;
  wb.yingzi2.x = wsp.mine_all_ani2.x + dx2;
  wb.yingzi2.y = wsp.mine_all_ani2.y + dy2;
  wb.yingzi2.alpha = alpha;
}

window.mineChangeSite3 = (x, y, alpha) => {
  wsp.heli_ani.x = x;
  wsp.heli_ani.y = y;
  wsp.heli_ani.alpha = alpha;
  wb.yingzi3.x = wsp.heli_ani.x + dx2;
  wb.yingzi3.y = wsp.heli_ani.y + dy2;
  wb.yingzi3.alpha = alpha;
}

window.jtPause = () => {
  wb.jt.alpha = 0;
  jt1.clear();
}

window.jtPause2 = () => {
  wb.jt2.alpha = 0;
  jt2.clear();
}


window.jtStart = (x, y, scaleNum) => {
  if (scaleNum) {
    wb.jt.scaleX = wb.jt.scaleY = scaleNum;
  }
  wb.jt.x = x + 0.5 * 75;
  wb.jt.y = y + 0.95 * 110;
  wb.jt.alpha = 1;
  window.jt1 = new jtAanimate(wb.jt, 10, 250);
  person.addChild(wb.jt);
}

window.jtStart2 = (obj,x, y, scaleNum) => {
  if (scaleNum) {
    obj.scaleX = obj.scaleY = scaleNum;
  }
  obj.x = x + 0.5 * 75;
  obj.y = y + 0.95 * 110;
  obj.alpha = 1;
  window.jt2 = new jtAanimate(obj, 10, 250);
  person.addChild(obj);
}

var jg_num = 70;
var st_num = 490;

function yanhuaChange() {
  wsp.yanhua1_all.alpha = 1;
  if (yanhua_lock == true) {
    yanhua.play(0);
  }



  wsp.yanhua1_all.x = st_num + (jg_num * 0) + getNum([-20, -10], [10, 20]);
  wsp.yanhua1_all.y = 700 + getNum([-40, -10], [10, 40]);
  window.c1 = setInterval(function () {
    if (wsp.yanhua1_all.currentAnimation == "stop") {
      wsp.yanhua1_all.gotoAndPlay("start");

      yanhuaChange();
    }
  }, 50)
}



function yanhuaChange1() {
  wsp.yanhua3_all.alpha = 1;
  wsp.yanhua3_all.x = st_num + (jg_num * 1) + getNum([-20, -10], [10, 20]);
  wsp.yanhua3_all.y = 830 + getNum([-40, -10], [10, 40]);
  window.c2 = setInterval(function () {
    if (wsp.yanhua3_all.currentAnimation == "stop") {
      wsp.yanhua3_all.gotoAndPlay("start");
      yanhuaChange1();

    }
  }, 50)
}



function yanhuaChange2() {
  wsp.yanhua2_all.alpha = 1;
  wsp.yanhua2_all.x = st_num + (jg_num * 2) + getNum([-20, -10], [10, 20]);
  wsp.yanhua2_all.y = 880 + getNum([-40, -10], [10, 40]);
  window.c3 = setInterval(function () {
    if (wsp.yanhua2_all.currentAnimation == "stop") {
      wsp.yanhua2_all.gotoAndPlay("start");
      yanhuaChange2();
    }
  }, 50)
}


function yanhuaChange3() {
  wsp.yanhua11_all.alpha = 1;
  wsp.yanhua11_all.x = st_num + (jg_num * 3) + getNum([-20, -10], [10, 20]);
  wsp.yanhua11_all.y = 920 + getNum([-40, -10], [10, 40]);
  window.c3 = setInterval(function () {
    if (wsp.yanhua11_all.currentAnimation == "stop") {
      wsp.yanhua11_all.gotoAndPlay("start");
      yanhuaChange3();
    }
  }, 50)
}

function yanhuaChange33() {
  wsp.yanhua111_all.alpha = 1;
  wsp.yanhua111_all.x = st_num + (jg_num * 4) + getNum([-20, -10], [10, 20]);
  wsp.yanhua111_all.y = 750 + getNum([-40, -10], [10, 40]);
  window.c33 = setInterval(function () {
    if (wsp.yanhua111_all.currentAnimation == "stop") {
      wsp.yanhua111_all.gotoAndPlay("start");
      yanhuaChange33();
    }
  }, 50)
}


function yanhuaChange11() {
  wsp.yanhua333_all.alpha = 1;
  wsp.yanhua333_all.x = st_num + (jg_num * 5) + getNum([-20, -10], [10, 20]);
  wsp.yanhua333_all.y = 780 + getNum([-40, -10], [10, 40]);
  window.c22 = setInterval(function () {
    if (wsp.yanhua333_all.currentAnimation == "stop") {
      wsp.yanhua333_all.gotoAndPlay("start");
      yanhuaChange11();

    }
  }, 50)
}



function yanhuaChange22() {
  wsp.yanhua22_all.alpha = 1;
  wsp.yanhua22_all.x = st_num + (jg_num * 6) + getNum([-20, -10], [10, 20]);
  wsp.yanhua22_all.y = 880 + getNum([-40, -10], [10, 40]);
  window.c33 = setInterval(function () {
    if (wsp.yanhua22_all.currentAnimation == "stop") {
      wsp.yanhua22_all.gotoAndPlay("start");
      yanhuaChange22();
    }
  }, 50)
}



function yanhuaChange4() {
  wsp.yanhua33_all.alpha = 1;
  wsp.yanhua33_all.x = st_num + (jg_num * 7) + getNum([-20, -10], [10, 20]);
  wsp.yanhua33_all.y = 830 + getNum([-40, -10], [10, 40]);
  window.c4 = setInterval(function () {
    if (wsp.yanhua33_all.currentAnimation == "stop") {
      wsp.yanhua33_all.gotoAndPlay("start");
      yanhuaChange4();
    }
  }, 50)
}





window.one = function(fn, timer)  {
  var flag = true;
  var time = null;
  if (typeof timer != "undefined") {
    time = timer;
  } else {
    time = 2000;
  }
  window.ss1 = createjs.setTimeout(function () {
    if (flag) {
      flag = false;
      fn.apply(this, arguments)
    }
  }, time);
  return function () {
    if (flag) {
      flag = false;
      fn.apply(this, arguments)
    }
  }
}



window.crossMerge = function (fn,objarr) {
  var _this = this;
  var flag = true;
  _this.result=[];
  objarr.forEach((item,index) => {
    _this[item.name] = 0;
  });
  console.log(_this.result)
  stage.addEventListener("stagemousedown", function(){
    _this.move();
    stage.addEventListener('stagemouseup', function (e) {
      if (!_this.check()) {
        _this.result=[];
        objarr.forEach((item, index) => {
          _this[item.name] = 0;
        });
      }
    });
  });
  _this.move = function(){
    stage.addEventListener("stagemousemove", function () {
      objarr.forEach((item, index) => {
        if (_this[item.name]==false) {
          var position = item.globalToLocal(stage.mouseX, stage.mouseY);
          _this[item.name] = item.hitTest(position.x, position.y);
          if (_this[item.name]) {
            _this.result.push(_this[item.name]);
            console.log(_this[item.name], _this.result.length)
          }
          _this.check();
        }
      });
    })
  }
  _this.check=function(){
    // if (_this.result.length >= objarr.length-1) {
    if (_this.result.length >=1) {
      console.log("gaoding");
      if (flag) {
        flag = false;
        fn.apply(this, arguments);
      }
      
      return true;
    }else{
      return false;
    }
  }
}



//元素摇晃动画
window.Shake = function(obj, delay, moveX){
  var _this = this;
  _this.lock = true;
  _this.timer = 80;
  _this.moveNum = 8;
  if (typeof moveX != "undefined") {
    _this.moveNum = moveX;
  }
  _this.delay = 1500;
  if (typeof delay != "undefined") {
    _this.delay = delay;
  }
  _this.loopAni = function () {
    if (_this.lock == false) {
      return false;
    }
    createjs.Tween.get(obj).to({ x: obj.x + _this.moveNum }, _this.timer / 2, createjs.Ease.quartInOut).call(function () {
      createjs.Tween.get(obj).to({ x: obj.x - _this.moveNum * 2 }, _this.timer, createjs.Ease.quartInOut).call(function () {
        createjs.Tween.get(obj).to({ x: obj.x + _this.moveNum * 2 }, _this.timer, createjs.Ease.quartInOut).call(function () {
          createjs.Tween.get(obj).to({ x: obj.x - _this.moveNum * 2 }, _this.timer, createjs.Ease.quartInOut).call(function () {
            // createjs.Tween.get(obj).to({x:obj.x+_this.moveNum},_this.timer/2,createjs.Ease.quartInOut).call(function(){
            createjs.Tween.get(obj).to({ x: obj.x + _this.moveNum * 2 }, _this.timer, createjs.Ease.quartInOut).call(function () {
              createjs.Tween.get(obj).to({ x: obj.x - _this.moveNum * 2 }, _this.timer, createjs.Ease.quartInOut).call(function () {
                createjs.Tween.get(obj).to({ x: obj.x + _this.moveNum }, _this.timer / 2, createjs.Ease.quartInOut).call(function () {

                  setTimeouc(function () {
                    if (_this.lock == true) {
                      _this.loopAni();
                    } else {
                      _this.stop();
                    }
                  }, _this.delay)
                });
              });
            });
            // setTimeouc(function(){
            //   if (_this.lock==true) {
            //     _this.loopAni();
            //   }else{
            //     _this.stop();
            //   }
            // },_this.delay)
            // });
          });
        });
      });
    });
  }
  _this.loopAni();
  _this.stop = function () {
    _this.lock = false;
    createjs.Tween.removeTweens(obj);
  }
}


// moveX 为正往右移动 为负往左移动
// moveY 为正往下移动 为负往上移动
window.wolf_lock = 1;
window.mapMove = function (obj, moveX, moveY, speed, boolean, callback,other) {
  // if (moveY-obj.y<0) {
  //   console.log("walk_zr")
  //   obj.gotoAndPlay("walk_zr");
  // }else{
  //   console.log("walk_bz")
  //   obj.gotoAndPlay("walk_bz");
  // }
  
  var timeimg = Math.abs(3000 / 400 * (moveX - obj.x)) > Math.abs(3000 / 400 * (moveY - obj.y)) ? Math.abs(3000 / 400 * (moveX - obj.x)) : Math.abs(3000 / 400 * (moveY - obj.y));
  timeimg = timeimg / speed;
  if (!obj._animation.speed) {
    obj._animation.speed = 0.2 * speed;
  }
  

  if (boolean == true) {
    if (other == "other") {
      createjs.Tween.get(containerAll).to({ x: -641.5, y: -314.2 }, timeimg * 1.1, createjs.Ease.quadInOut);
    } else if (other == "other1") {
      createjs.Tween.get(containerAll).to({ x: -108.2, y: -562.9 }, timeimg * 1.1, createjs.Ease.quadInOut);
    } else if (other == "other2") {
      createjs.Tween.get(containerAll).to({ x: -272, y: -459 }, timeimg * 0.7, createjs.Ease.quadInOut);
    } else {
      createjs.Tween.get(containerAll).to({ x: containerAll.x - (moveX - obj.x), y: containerAll.y - (moveY - obj.y) }, timeimg * 1.1, createjs.Ease.quadInOut);
    }
  }

  if (obj.name == "mine_all_ani") {
    if(wolf_lock){
      createjs.Tween.get(wsp.wolf_ani1).to({ x: wsp.wolf_ani1.x + moveX - obj.x, y: wsp.wolf_ani1.y + moveY - obj.y }, timeimg , createjs.Ease.linear);
      createjs.Tween.get(wsp.wolf_ani2).to({ x: wsp.wolf_ani2.x + moveX - obj.x, y: wsp.wolf_ani2.y + moveY - obj.y }, timeimg , createjs.Ease.linear);
      createjs.Tween.get(wsp.wolf_ani3).to({ x: wsp.wolf_ani3.x + moveX - obj.x, y: wsp.wolf_ani3.y + moveY - obj.y }, timeimg , createjs.Ease.linear);
      createjs.Tween.get(wsp.wolf_ani4).to({ x: wsp.wolf_ani4.x + moveX - obj.x, y: wsp.wolf_ani4.y + moveY - obj.y }, timeimg , createjs.Ease.linear);
    }
    
    createjs.Tween.get(wsp.mine_all_ani2).to({ x: wsp.mine_all_ani2.x + moveX - obj.x, y: wsp.mine_all_ani2.y + moveY - obj.y }, timeimg, createjs.Ease.linear);
    // createjs.Tween.get(wb.yingzi).to({ x: wb.yingzi.x + moveX - obj.x, y: wb.yingzi.y + moveY - obj.y }, timeimg, createjs.Ease.linear);
    // createjs.Tween.get(wb.yingzi2).to({ x: wb.yingzi2.x + moveX - obj.x, y: wb.yingzi2.y + moveY - obj.y }, timeimg, createjs.Ease.linear);
    // createjs.Tween.get(wb.yingzi3).to({ x: wb.yingzi2.x + moveX - obj.x, y: wb.yingzi2.y + moveY - obj.y }, timeimg, createjs.Ease.linear);
    createjs.Tween.get(obj).to({ x: moveX, y: moveY }, timeimg, createjs.Ease.linear).call(function () {
      if (callback) {
        setTimeouc(function () {
          // obj.gotoAndPlay("stop");
          callback();
        }, 20)
      }
    });
  }
  console.log(timeimg, moveX - obj.x, moveY - obj.y)
}


window.mapMovecs = function (obj, moveX, moveY, speed, boolean, callback, other,arr) {
  // if (moveY-obj.y<0) {
  //   console.log("walk_zr")
  //   obj.gotoAndPlay("walk_zr");
  // }else{
  //   console.log("walk_bz")
  //   obj.gotoAndPlay("walk_bz");
  // }
  var timeimg = Math.abs(3000 / 400 * (moveX - obj.x)) > Math.abs(3000 / 400 * (moveY - obj.y)) ? Math.abs(3000 / 400 * (moveX - obj.x)) : Math.abs(3000 / 400 * (moveY - obj.y));
  timeimg = timeimg / speed;
  if (obj.name != null) {
    obj._animation.speed = 0.2 * speed;
  }

  if (boolean == true) {
    if (other == "other") {
      createjs.Tween.get(containerAll).to({ x: -1453.0, y: 73.6 }, timeimg * 1.1, createjs.Ease.quadInOut);
    } else {
      createjs.Tween.get(containerAll).to({ x: containerAll.x - (moveX - obj.x), y: containerAll.y - (moveY - obj.y) }, timeimg * 1, createjs.Ease.quadInOut);
    }
  }


  createjs.Tween.get(obj).to({ x: moveX, y: moveY }, timeimg, createjs.Ease.linear).call(function () {
    if (callback) {
      setTimeouc(function () {
        if (obj.name != null) {
          obj.gotoAndPlay("stop");
        }
        callback();
      }, 20)
    }
  });
  console.log(timeimg, moveX - obj.x, moveY - obj.y);
  if (arr) {
    for (const item of arr) {
      createjs.Tween.get(item).to({ x: item.x + moveX - obj.x, y: item.y + moveY - obj.y }, timeimg, createjs.Ease.linear);
    }
  }
  
}


window.mapDrawLine = () => {
  var shapeLine = new createjs.Shape();
  var shapeG = shapeLine.graphics;
  shapeG.setStrokeStyle(1);
  shapeG.beginStroke("red");
  shapeG.drawRect(0, 0, 3000, 2500);
  person.addChild(shapeLine);
}


window.addShape = (shapeName, x, y, w, h, alh, type, container_) => {
  window[shapeName] = new createjs.Shape();
  if (type == "circle") {
    window[shapeName].graphics.beginFill("#000").drawCircle(x, y, w);
  } else {
    window[shapeName].graphics.beginFill("#000").drawRect(x, y, w, h);
  }
  window[shapeName].alpha = alh;
  person.addChild(window[shapeName]);
  if (container_){
    container_.addChild(window[shapeName]);
  }
  
}

window.loopArr = (arr, x, y) => {
  var arr1 = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i]["Number"]; j++) {
      arr1.push(arr[i]);
    }
  }

  arr1.sort(randomsort);
  // console.log(arr1);
  var j = 0;
  var c = setInterval(function () {
    if (j < arr1.length) {
      var testAni = new boomSomethings(x, y, arr1, j);
      testAni.boomAdd().boomAni();
      // console.log(j)
      j++;
    } else {
      clearInterval(c);
    }
  }, 100)
}

//挖掘物品爆出
function boomSomethings(x, y, boomarr, thisIndex) {
  var _this = this;
  _this.arrIndex = thisIndex;
  var boomName;
  var boomSrc;
  var container_num;
  var container_a = null;
  var textNum = null;
  _this.boomAdd = function () {
    boomName = boomarr[_this.arrIndex].thingsName + Math.floor(Math.random() * 90000);
    boomSrc = window[boomarr[_this.arrIndex].thingsName];
    // console.log(boomName,boomSrc)
    addRectBitmap_simple(boomName, boomarr[_this.arrIndex].thingsName, sprite_, json_sprite, 0.5, 0.5, x, y, true);
    container_num = 'container_a' + Math.floor(Math.random() * 90000);
    window[container_num] = new createjs.Container();
    container_a = window[container_num];

    container_a.addChild(wb[boomName], textNum);
    // window.person.addChild(wb[boomName]);
    containerAll3.addChild(container_a);
    wb[boomName].alpha = 1;
    return _this;
  };
  _this.boomAni = function () {
    setTimeout(function () {
      reg_set(wb[boomName], 0.5, 0.5);
      wb[boomName].scaleX = wb[boomName].scaleY = 0;
      wb[boomName].alpha = 0;
    }, 50)
    var moveX = getNum([-70, -10], [10, 70]);
    var moveY = Math.floor(Math.random() * (50 - 25) + 50);
    createjs.Tween.get(wb[boomName]).to({ alpha: 1, scaleX: 1.2, scaleY: 1.2 }, 200, createjs.Ease.linear);
    createjs.Tween.get(container_a).to({ x: container_a.x + moveX }, 200, createjs.Ease.linear).call(function () {
      if (moveX > 0) {
        return _this.repeatAnix("right", 80, 2);
      } else {
        return _this.repeatAnix("left", 80, 2);
      }
    });
    createjs.Tween.get(container_a).to({ y: container_a.y - moveY }, 200, createjs.Ease.quadOut).call(function () {
      return _this.repeatAniy(80, 1);
    });
    _this.repeatAniy = function (timer, cishu) {
      var s_num = 0;
      var y_num;
      var c = setInterval(function () {
        if (s_num > cishu) {
          clearInterval(c);
        }
        (s_num % 2 == 0) ? y_num = 7 : y_num = -7;
        createjs.Tween.get(container_a).to({ y: container_a.y + y_num }, timer, createjs.Ease.linear);
        s_num++;
      }, timer)
    };
    _this.repeatAnix = function (dir, timer, cishu) {
      var s_num = 0;
      var x_num;
      var c = setInterval(function () {
        if (s_num > cishu) {
          clearInterval(c);
          if (steps == "last") {
            createjs.Tween.get(container_a).to({ alpha: 0 }, 300).call(function () {
              containerAll3.removeChild(container_a);
            });
          }
          else if (wb[boomName].name.indexOf("dadada") > -1) {
            return _this.backBag1();
          }
          else {
            return _this.backBag();
          }
        }
        (dir == "left") ? x_num = -7 : x_num = 7;
        createjs.Tween.get(container_a).to({ x: container_a.x + x_num }, timer, createjs.Ease.linear);
        s_num++;
      }, timer)
    };

    _this.backBag = function () {
      var timer = null;
      var target = null;
      var tx = null;
      var scaleNum = 1.5;
      var pname = "power_icon" + random1(1, 1000);

      timer = 500;
      createjs.Tween.get(container_a).wait(200).to({ x: wb.bag.x - wb[boomName].x + 80 - 95 }, timer, createjs.Ease.CUBICIN).call(function () {
        _this.bagAni();
      });

      createjs.Tween.get(container_a).wait(200).to({ y: wb.bag.y - wb[boomName].y - 35 }, timer, createjs.Ease.circIn);

      createjs.Tween.get(wb[boomName]).wait(200).to({ scaleX: scaleNum, scaleY: scaleNum }, timer, createjs.Ease.CUBICIN).call(function () {
        if (scaleNum == 0.5) {
          wb[boomName].alpha = 0;
          containerAll3.removeChild(container_a);
        }
      });

    };
    _this.backBag1 = function () {
      var timer = null;
      timer = 800;
      createjs.Tween.get(container_a).wait(200).to({ x: 700 }, timer, createjs.Ease.CUBICIN).call(function () {
        return _this.bagAni();
      });

      createjs.Tween.get(container_a).wait(200).to({ y: 1270 }, timer, createjs.Ease.circIn);

      createjs.Tween.get(wb[boomName]).wait(200).to({ scaleX: 1.5, scaleY: 1.5 }, timer, createjs.Ease.CUBICIN);

    };
    _this.addText = function (tx) {
      if (tx != null) {
        tx.text++;
        containerAll3.removeChild(container_a);
      }
    };
    _this.bagAni = function () {
      container_a.alpha = 0;
      containerAll3.removeChild(container_a);
      gold.play(0);
      createjs.Tween.get(wb.bag).to({ scaleX: 1.2, scaleY: 1.2 }, 80).call(function () {
        createjs.Tween.get(wb.bag).to({ scaleX: 1.1, scaleY: 1.1 }, 80);
      })
    };
    _this.powerUp = function (pname, textUp) {
      containerAll3.addChild(wb[pname]);
      containerAll3.addChild(textUp);
      createjs.Tween.get(wb[pname]).to({ y: wb[pname].y - 20, alpha: 0 }, 400);
      createjs.Tween.get(textUp).to({ y: textUp.y - 20, alpha: 0 }, 400);
    }
  }
  // _this.boomAdd().boomAni();
}


//箭头上下引导动画
window.jtAanimate = function(obj, displacement, duration) {
  var _this = this;
  _this.obj = obj;
  _this.obj.y = _this.obj.y - 10;
  _this.duration = duration;
  _this.obj.alpha = 1;
  _this.num = 0;
  _this.sx = _this.obj.scaleX;
  _this.sy = _this.obj.scaleY;
  _this.func = null;
  _this.jtAniStart = setInterval(function () {
    (_this.num % 2 == 0) ?
      (_this.displacement = displacement,
        _this.func = createjs.Ease.circIn)
      :
      (_this.displacement = -displacement,
        _this.func = createjs.Ease.circOut);
    _this.num++;
    createjs.Tween.get(_this.obj).to({ y: _this.obj.y + _this.displacement }, _this.duration, _this.func).call(function () {
      if (_this.displacement > 0) {
        _this.scaleObj()
      }
    });
  }, _this.duration + 200);
  _this.scaleObj = function () {
    createjs.Tween.get(_this.obj).to({ scaleY: 0.7 * _this.sy }, 100).to({ scaleY: 1 * _this.sy }, 100);
  }
  _this.clear = function () {
    clearInterval(_this.jtAniStart);
  }
}


function jtAanimates(obj, duration) {
  var _this = this;
  _this.obj = obj;

  _this.duration = duration;
  _this.start = function () {
    _this.siteY = _this.obj.y;
    createjs.Tween.get(_this.obj, { loop: true })
      .to({ y: _this.siteY + 8, alpha: 0 }, 1)
      .to({ y: _this.siteY + 8, alpha: 0 }, _this.duration * 0.3, createjs.Ease.quadInOut)
      .to({ y: _this.siteY, alpha: 1 }, _this.duration * 0.3, createjs.Ease.quadInOut)
      .to({ y: _this.siteY - 10, alpha: 0 }, _this.duration * 0.4, createjs.Ease.quadInOut);
  }
  _this.start();
  _this.stop = function () {
    _this.obj.alpha = 0;
    createjs.Tween.removeTweens(_this.obj);
  }
}

//按钮放大缩小动画
window.scale_animate = function (obj, displacement_q, displacement_h, duration) {
  var _this = this;
  _this.obj = obj;
  _this.duration = duration;
  _this.num = 0;
  createjs.Tween.get(_this.obj).to({ scaleX: displacement_q, scaleY: displacement_q }, duration);
  _this.ani = setInterval(function () {
    (_this.num % 2 == 1) ? _this.dx = displacement_q : _this.dx = displacement_h;
    createjs.Tween.get(_this.obj).to({ scaleX: _this.dx, scaleY: _this.dx }, duration);
    _this.num++;
  }, _this.duration);
  _this.clear = function () {
    clearInterval(_this.ani);
    createjs.Tween.removeTweens(_this.obj);
  }
}


window.scale_alp_animate = function (obj, displacement_q, displacement_h, duration) {
  var _this = this;
  _this.obj = obj;
  _this.duration = duration;
  _this.num = 0;
  createjs.Tween.get(_this.obj).to({ scaleX: displacement_q, scaleY: displacement_q, alpha: 0.7 }, duration);
  _this.ani = setInterval(function () {
    (_this.num % 2 == 1) ? (_this.dx = displacement_q, _this.alp = 0.6) : (_this.dx = displacement_h, _this.alp = 1);
    createjs.Tween.get(_this.obj).to({ scaleX: _this.dx, scaleY: _this.dx, alpha: _this.alp }, duration);
    _this.num++;
  }, _this.duration);
  _this.clear = function () {
    clearInterval(_this.ani);
  }
}

//手势动画
window.GestureAnimation = (dragObj, tips_name, target, duration, handX, handY, callback) => {
  var _this = this;
  _this.c = null;
  _this.lock = true;
  _this.showState = null;
  var target_mid_x, target_mid_y;
  _this.setAni = function () {
    _this.showState = true;
    if (typeof _this.moveObj != "undefined") {
      _this.moveObj.alpha = _this.moveHand.alpha = 0;
      containerAll3.removeChild(_this.moveObj);
      containerAll3.removeChild(_this.moveHand);
    }
    addRectBitmap_simple(tips_name + 'test', tips_name, sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArr4_2", true);
    addRectBitmap_simple(tips_name + 'hand', 'hand1', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArr1", true);
    _this.moveObj = wb[tips_name + 'test']; _this.moveObj.scaleX = _this.moveObj.scaleY = dragObj.scaleX;
    _this.moveHand = wb[tips_name + 'hand'];
    target_mid_x = target.x - target.getBounds().width / 2;
    target_mid_y = target.y - target.getBounds().width / 2;
    if (target.regX != 0) {
      target_mid_x = target.x;
      target_mid_y = target.y;
    }
    containerAll3.addChild(_this.moveObj);
    containerAll3.addChild(_this.moveHand);
    _this.HX = _this.HY = 0;
    if (pageState == "heng") {
      _this.moveHand.scaleX = _this.moveHand.scaleY = 0.8;
      // _this.moveObj.scaleX=_this.moveObj.scaleY=1;
      _this.cy = 0;
      _this.HX = 15;
    } else {
      _this.moveHand.scaleX = _this.moveHand.scaleY = 0.8;
      // _this.moveObj.scaleX=_this.moveObj.scaleY=1;
      _this.cy = _this.moveObj.getBounds().height;
      _this.HX = 15;
      _this.HY = 5;
    }
    var start_x = dragObj.x; var start_y = dragObj.y;
    // console.log(start_x,start_y);
    _this.moveObj.alpha = 0;
    _this.moveObj.x = start_x + containerAll2_cs.x;
    _this.moveObj.y = start_y + _this.cy;
    _this.moveObj.alpha = 1;

    _this.moveHand.alpha = 0;
    _this.moveHand.x = start_x + handX - _this.HX + containerAll2_cs.x;
    _this.moveHand.y = start_y + handY - _this.HY + _this.cy;
    _this.moveHand.alpha = 1;


    createjs.Tween.get(_this.moveHand).to({ x: target_mid_x + (containerAll.x - containerAll3.x) + handX - _this.HX }, duration, createjs.Ease.linear);
    createjs.Tween.get(_this.moveHand).to({ y: target_mid_y + (containerAll.y - containerAll3.y) + handY - _this.HY }, duration, createjs.Ease.quadOut);

    createjs.Tween.get(_this.moveObj).to({ x: target_mid_x + (containerAll.x - containerAll3.x) }, duration, createjs.Ease.linear);
    createjs.Tween.get(_this.moveObj).to({ y: target_mid_y + (containerAll.y - containerAll3.y) }, duration, createjs.Ease.quadOut);
    createjs.Tween.get(_this.moveObj).wait(duration * (1 - 0.4)).to({ alpha: 0 }, duration * 0.4);

    createjs.Tween.get(_this.moveHand).wait(duration * (1 - 0.4)).to({ alpha: 0 }, duration * 0.4).call(function () {
      if (callback) {
        callback()
      } else {
        _this.c = setTimeout(function () {
          if (_this.lock == true) {
            _this.setAni();
          }
        }, 1000)
      }
    });
  };
  _this.stop = function () {
    _this.showState = false;
    _this.lock = false;
    _this.moveObj.alpha = _this.moveHand.alpha = 0;
    containerAll3.removeChild(_this.moveObj);
    containerAll3.removeChild(_this.moveHand);
  }
  setTimeout(function () {
    _this.setAni();
  }, 150)

}


//对象拖拽碰撞
//dragObj 拖拽对象
//dragObj 是否需要插入shape替代
//width_add dragObj是否左右两边需要增加
//height_add dragObj是否上下两边需要增加
//target 碰撞的对象
//Correction为修正值 触碰范围为圆形 为正增加触碰范围  为负减少触碰范围
window.dragCollide = (dragObj1, boolean, width_add, height_add, target, Correction, callback) => {
  console.log(dragObj1.name)
  var _this = this;
  var triggerObj; var dragObj;
  _this.te = target[0];
  _this.shape = null; _this.shape1 = null;
  _this.moveObj = null; _this.ady = null; _this.targetadx = null;
  var x1;
  var x2;
  var y1;
  var y2;
  _this.start = function () {
    addRectBitmap_simple(dragObj1.name + 'move', dragObj1.name, sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArr4_2", true);
    _this.moveObj = wb[dragObj1.name + 'move'];
    _this.moveObj.x = dragObj1.x; _this.moveObj.y = dragObj1.y;
    _this.moveObj.scaleX = _this.moveObj.scaleY = dragObj1.scaleX;
    dragObj1.parent.addChild(_this.moveObj);
    dragObj = _this.moveObj;
    if (pageState == "shu") {
      _this.ady = dragObj.getBounds().height * (3 / 2);
      if (dragObj1.name == "cs1_1" || dragObj1.name == "cs1_2") {
        _this.ady = dragObj.getBounds().height * (2 / 2);
      } else if (dragObj1.name == "cs2_1" || dragObj1.name == "cs2_2") {
        _this.ady = dragObj.getBounds().height * (2 / 2) + 10;
      } else if (dragObj1.name == "cs3_1" || dragObj1.name == "cs3_2") {
        _this.ady = dragObj.getBounds().height * (2 / 2) + 10;
      }
      _this.targetadx = 0;
    } else {
      _this.ady = 0;
      _this.targetadx = 0;
      if (dragObj1.name == "cs1_1" || dragObj1.name == "cs1_2") {
        _this.ady = 25;
      } else if (dragObj1.name == "cs2_1" || dragObj1.name == "cs2_2") {
        _this.ady = 25;
      } else if (dragObj1.name == "cs3_1" || dragObj1.name == "cs3_2") {
        _this.ady = 20;
      }
    }
    if (boolean == true) {
      _this.shape = new createjs.Shape();
      _this.shape.name = dragObj.name;
      _this.shape.graphics.beginFill("#333").drawRect(dragObj.x - width_add / 2 - dragObj.getBounds().width / 2 + containerAll2_cs.x, dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady, dragObj.getBounds().width + width_add, dragObj.getBounds().height + height_add);
      _this.shape.alpha = 0.01;
      // _this.shape=window.ccc;
      containerAll3.addChild(_this.shape);
      triggerObj = _this.shape;

      console.log(dragObj, _this.te);
      _this.shape1 = new createjs.Shape();
      _this.shape1.graphics.beginFill("#333").drawRect(_this.te.x - _this.te.getBounds().width / 2 + (containerAll.x - containerAll3.x) + _this.targetadx, _this.te.y - _this.te.getBounds().height / 2 + (containerAll.y - containerAll3.y), _this.te.getBounds().width, _this.te.getBounds().height);
      _this.shape1.alpha = 0.01;
      containerAll3.addChild(_this.shape1);

    } else {
      triggerObj = dragObj;
    }

    _this.lock = true;
    triggerObj.addEventListener("mousedown", function (e) {
      if (bgm_state == false) {
        bgm_state = true;
        bgm_play();
      }
      if (typeof h1 != "undefined" && h1 != null) {
        h1.clear();
      }

      x1 = stage.mouseX;
      y1 = stage.mouseY;
      x2 = dragObj.x;
      y2 = dragObj.y;
      _this.callF = function () {
        if (callback && _this.lock == true) {
          _this.lock = false;
          containerAll3.removeChild(_this.shape);
          stage.removeAllEventListeners();
          e.target.removeAllEventListeners();
          triggerObj.removeAllEventListeners();
          callback(dragObj1.name);
        }
      };
      stage.addEventListener('stagemousemove', function (e) {
        if (typeof tip_a1 != "undefined" && tip_a1 != null) {
          tip_a1.stop();
          tip_a1 = null;
          // jtPause();
        }
        if (typeof tip_a2 != "undefined" && tip_a2 != null) {
          tip_a2.stop();
          tip_a2 = null;
          // jtPause();
        }
        if (typeof tip_a3 != "undefined" && tip_a3 != null) {
          tip_a3.stop();
          tip_a3 = null;
        }
        if (typeof tip_a4 != "undefined" && tip_a4 != null) {
          tip_a4.stop();
          tip_a4 = null;
        }

        if (dragObj1.name == "cs2_1" || dragObj1.name == "cs1_1") {
          wb.yellow1.alpha = 1;
        } else if (dragObj1.name == "cs2_2" || dragObj1.name == "cs1_2") {
          wb.yellow2.alpha = 1;
        }
        var dragObj_mid_x, dragObj_mid_y, abs_value;
        dragObj.x = stage.mouseX - (x1 - x2);
        dragObj.y = stage.mouseY - (y1 - y2);
        dragObj_mid_x = dragObj.x + dragObj.getBounds().width / 2 - dragObj.getBounds().width / 2;
        dragObj_mid_y = dragObj.y + dragObj.getBounds().height / 2 - dragObj.getBounds().height / 2
        if (boolean == true) {
          _this.shape.graphics._instructions[1].x = dragObj.x - width_add / 2 - dragObj.getBounds().width / 2 + containerAll2_cs.x;
          _this.shape.graphics._instructions[1].y = dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady
          dragObj_mid_x = _this.shape.graphics._instructions[1].x;
          dragObj_mid_y = _this.shape.graphics._instructions[1].y;
        }

        for (var i = 0; i < target.length; i++) {
          var target_x = target[i].x, target_y = target[i].y;
          var target_mid_x = target[i].x + (containerAll.x - containerAll3.x) + containerAll2_cs.x + _this.targetadx, target_mid_y = target[i].y + (containerAll.y - containerAll3.y);
          var dragObj_radius = (dragObj.getBounds().width <= dragObj.getBounds().height ? dragObj.getBounds().width : dragObj.getBounds().height) / 2;
          console.log(dragObj_radius)
          dragObj_radius = 100 / 2;
          var target_radius = (target[i].getBounds().width <= target[i].getBounds().height ? target[i].getBounds().width : target[i].getBounds().height) / 2;
          abs_value = Math.abs(Math.sqrt(Math.pow(dragObj_mid_x - target_mid_x, 2) + Math.pow(dragObj_mid_y - target_mid_y, 2)));
          console.log(dragObj_radius, target_radius, abs_value)
          if (abs_value <= dragObj_radius + target_radius + Correction) {
            console.log(dragObj.name);
            if (dragObj1.name == "cs2_1" || dragObj1.name == "cs1_1") {
              setTimeouc(function () { createjs.Tween.get(wb.yellow1).to({ alpha: 0 }, 100); }, 1000)
            } else if (dragObj1.name == "cs2_2" || dragObj1.name == "cs1_2") {
              setTimeouc(function () { createjs.Tween.get(wb.yellow2).to({ alpha: 0 }, 100); }, 1000)
            }
            _this.callF();
          }
        }

      });
      stage.addEventListener('stagemouseup', function (e) {
        if (_this.lock == true) {
          dragObj.x = x2;
          dragObj.y = y2;
        } else if (_this.lock == false) {
          triggerObj.removeAllEventListeners();
        }

        if (boolean == true) {
          _this.shape.graphics._instructions[1].x = dragObj.x - width_add / 2 - dragObj.getBounds().width / 2 + containerAll2_cs.x;
          _this.shape.graphics._instructions[1].y = dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady
        }

        if (dragObj1.name == "cs2_1" || dragObj1.name == "cs1_1") {
          createjs.Tween.get(wb.yellow1).to({ alpha: 0 }, 100)
        } else if (dragObj1.name == "cs2_2" || dragObj1.name == "cs1_2") {
          createjs.Tween.get(wb.yellow2).to({ alpha: 0 }, 100)
        }

        e.target.removeAllEventListeners();
      });
    });
  };
  _this.back = function () {
    dragObj.x = x2;
    dragObj.y = y2;
    if (boolean == true) {
      _this.shape.graphics._instructions[1].x = dragObj.x - width_add / 2 - dragObj.getBounds().width / 2 + containerAll2_cs.x;
      _this.shape.graphics._instructions[1].y = dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady
    }
    stage.removeAllEventListeners();
    dragObj.removeAllEventListeners();
  };
  _this.rebind = function () {
    console.log(_this.shape, _this.shape.name)
    containerAll3.removeChild(_this.shape);
    // containerAll3.removeChild(containerAll3.children[containerAll3.children.length-1]);
    _this.moveObj.parent.removeChild(_this.moveObj);
    containerAll3.removeChild(_this.shape1);
    _this.shape.removeAllEventListeners();
    stage.removeAllEventListeners();
    dragObj.removeAllEventListeners();
    _this.shape = null;
    _this.moveObj = null;
    _this.start();
  };
  _this.start();
  _this.stop = function () {
    _this.lock = false;
    containerAll3.removeChild(_this.shape);
    stage.removeAllEventListeners();
    triggerObj.removeAllEventListeners();
  }
}

window.dtime = 200;
window.shuidi1_lock = false;
window.shuidi2_lock = false;
window.shuidi3_lock = false;
window.shuidi4_lock = false;
function dragCollide1(dragObj1, boolean, width_add, height_add, target, Correction, callback) {
  var _this = this;
  var triggerObj; var dragObj;
  _this.shape = null;
  _this.moveObj = null; _this.ady = null;
  var x1;
  var x2;
  var y1;
  var y2;
  _this.start = function () {
    addRectBitmap_simple(dragObj1.name + 'move', dragObj1.name, sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArr4_2", true);
    _this.moveObj = wb[dragObj1.name + 'move'];
    _this.moveObj.x = dragObj1.x; _this.moveObj.y = dragObj1.y;
    _this.moveObj.scaleX = _this.moveObj.scaleY = dragObj1.scaleX;
    dragObj1.parent.addChild(_this.moveObj);
    dragObj = _this.moveObj;
    if (pageState == "shu") {
      // _this.ady=dragObj.getBounds().height;
      _this.ady = 0;
    } else {
      _this.ady = 0;
    }
    if (boolean == true) {
      _this.shape = new createjs.Shape();
      _this.shape.graphics.beginFill("#333").drawRect(dragObj.x - width_add / 2 - dragObj.getBounds().width / 2, dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady, dragObj.getBounds().width + width_add, dragObj.getBounds().height + height_add);
      _this.shape.alpha = 0.01;
      containerAll3.addChild(_this.shape);
      triggerObj = _this.shape;
    } else {
      triggerObj = dragObj;
    }

    _this.lock = true;
    triggerObj.addEventListener("mousedown", function (e) {
      x1 = stage.mouseX;
      y1 = stage.mouseY;
      x2 = dragObj.x;
      y2 = dragObj.y;
      _this.callF = function () {
        if (callback && _this.lock == true) {
          _this.lock = false;
          containerAll3.removeChild(_this.shape);
          stage.removeAllEventListeners();
          e.target.removeAllEventListeners();
          triggerObj.removeAllEventListeners();
          callback(dragObj1.name);
        }
      };
      stage.addEventListener('stagemousemove', function (e) {
        if (typeof tip_a1 != "undefined" && tip_a1 != null) {
          tip_a1.stop();
          tip_a1 = null;
          // jtPause();
        }
        if (typeof tip_a2 != "undefined" && tip_a2 != null) {
          tip_a2.stop();
          tip_a2 = null;
          // jtPause();
        }
        if (typeof tip_a3 != "undefined" && tip_a3 != null) {
          tip_a3.stop();
          tip_a3 = null;
        }
        if (typeof tip_a4 != "undefined" && tip_a4 != null) {
          tip_a4.stop();
          tip_a4 = null;
        }
        var dragObj_mid_x, dragObj_mid_y, abs_value;
        dragObj.x = stage.mouseX - (x1 - x2);
        dragObj.y = stage.mouseY - (y1 - y2);
        dragObj_mid_x = dragObj.x + dragObj.getBounds().width / 2 - dragObj.getBounds().width / 2;
        dragObj_mid_y = dragObj.y + dragObj.getBounds().height / 2 - dragObj.getBounds().height / 2
        if (boolean == true) {
          _this.shape.graphics._instructions[1].x = dragObj.x - width_add / 2 - dragObj.getBounds().width / 2;
          _this.shape.graphics._instructions[1].y = dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady
          dragObj_mid_x = _this.shape.graphics._instructions[1].x;
          dragObj_mid_y = _this.shape.graphics._instructions[1].y;
        }


        for (var i = 0; i < target.length; i++) {
          console.log(target[i])
          var target_x = target[i].x, target_y = target[i].y;
          var target_mid_x = target[i].x + (containerAll.x - containerAll3.x), target_mid_y = target[i].y + (containerAll.y - containerAll3.y);
          var dragObj_radius = (dragObj.getBounds().width <= dragObj.getBounds().height ? dragObj.getBounds().width : dragObj.getBounds().height) / 2;
          var target_radius = (target[i].getBounds().width <= target[i].getBounds().height ? target[i].getBounds().width : target[i].getBounds().height) / 2;
          abs_value = Math.abs(Math.sqrt(Math.pow(dragObj_mid_x - target_mid_x, 2) + Math.pow(dragObj_mid_y - target_mid_y, 2)));
          if (abs_value <= dragObj_radius + target_radius + Correction) {
            if (target[i].name.indexOf("gongju1") > -1 && shuidi1_lock == false) {
              shuidi1_lock = true;
              setTimeouc(function () {
                createjs.Tween.get(wb.fpao1).to({ alpha: 0 }, 100);
                var boomarr1 = [{ "thingsName": "flower", "Number": 1 }];
                loopArr(boomarr1, wb.gongju1.x + (containerAll.x - containerAll3.x) - 0, wb.gongju1.y + (containerAll.y - containerAll3.y) - 0);
                choose.play(0);
                _this.check();
              }, dtime)

            } else if (target[i].name.indexOf("gongju2") > -1 && shuidi2_lock == false) {
              shuidi2_lock = true;
              setTimeouc(function () {

                createjs.Tween.get(wb.fpao2).to({ alpha: 0 }, 100);
                var boomarr1 = [{ "thingsName": "flower", "Number": 1 }];
                loopArr(boomarr1, wb.gongju2.x + (containerAll.x - containerAll3.x) - 0, wb.gongju2.y + (containerAll.y - containerAll3.y) - 0);
                choose.play(0);
                _this.check();
              }, dtime)

            } else if (target[i].name.indexOf("gongju3") > -1 && shuidi3_lock == false) {
              shuidi3_lock = true;
              setTimeouc(function () {

                createjs.Tween.get(wb.fpao3).to({ alpha: 0 }, 100);
                var boomarr1 = [{ "thingsName": "flower", "Number": 1 }];
                loopArr(boomarr1, wb.gongju3.x + (containerAll.x - containerAll3.x) - 0, wb.gongju3.y + (containerAll.y - containerAll3.y) - 0);
                choose.play(0);
                _this.check();
              }, dtime)

            } else if (target[i].name.indexOf("gongju4") > -1 && shuidi4_lock == false) {
              shuidi4_lock = true;
              setTimeouc(function () {

                createjs.Tween.get(wb.fpao4).to({ alpha: 0 }, 100);
                var boomarr1 = [{ "thingsName": "flower", "Number": 1 }];
                loopArr(boomarr1, wb.gongju4.x + (containerAll.x - containerAll3.x) - 0, wb.gongju4.y + (containerAll.y - containerAll3.y) - 0);
                choose.play(0);
                _this.check();
              }, dtime)

            } else {

            }

          } else {
            // _this.back();
          }
        }


      });
      stage.addEventListener('stagemouseup', function (e) {
        if (_this.lock == true) {
          dragObj.x = x2;
          dragObj.y = y2;
        } else if (_this.lock == false) {
          triggerObj.removeAllEventListeners();
        }

        if (boolean == true) {
          _this.shape.graphics._instructions[1].x = dragObj.x - width_add / 2 - dragObj.getBounds().width / 2;
          _this.shape.graphics._instructions[1].y = dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady
        }

        e.target.removeAllEventListeners();
      });
    });
  };
  _this.check = function () {
    if (shuidi1_lock == true && shuidi2_lock == true && shuidi3_lock == true && shuidi4_lock == true) {
      _this.callF();
    }
  }
  _this.back = function () {
    dragObj.x = x2;
    dragObj.y = y2;
    if (boolean == true) {
      _this.shape.graphics._instructions[1].x = dragObj.x - width_add / 2 - dragObj.getBounds().width / 2;
      _this.shape.graphics._instructions[1].y = dragObj.y - height_add / 2 - dragObj.getBounds().height / 2 + _this.ady
    }
    stage.removeAllEventListeners();
    dragObj.removeAllEventListeners();
  };
  _this.rebind = function () {
    containerAll3.removeChild(_this.shape, _this.moveObj);
    _this.shape.removeAllEventListeners();
    stage.removeAllEventListeners();
    dragObj.removeAllEventListeners();
    _this.shape = null;
    _this.moveObj = null;
    _this.start();
  };
  _this.start();
  _this.stop = function () {
    _this.lock = false;
    containerAll3.removeChild(_this.shape);
    stage.removeAllEventListeners();
    triggerObj.removeAllEventListeners();
  }
}




// 位图加载完(base64不需要加载)初始化为全局对象
window.addBitmap = (img_name, img_, x_, y_, addArr) => {
  wb[img_name] = new createjs.Bitmap(img_);
  wb[img_name].name=null;
  if (typeof x_ != "undefined" && typeof y_ != "undefined") {
    wb[img_name].x = x_;
    wb[img_name].y = y_;
  }
  //  reg_set(wb[img_name], 0.5, 0.5);
  return wb[img_name];
}

// 序列帧加载完(base64不需要加载)初始化为全局对象
window.addSpriteSheet = (img_name, img_, start_ani, x_, y_, scale_num, regx, regy, call) => {
  window.sprite[img_name] = new createjs.Sprite(img_, start_ani);
  // window.sprite[img_name].sourceRect = new createjs.Rectangle(x_, y_, 0, 0);
  window.sprite[img_name].name = img_name;
  setTimeout(function () {
    // createjs.Tween.get(window.sprite[img_name]).to({alpha:1},200);
    reg_set(window.sprite[img_name], regx, regy);
    if (typeof x_ != "undefined" && typeof y_ != "undefined") {
      window.sprite[img_name].x = x_;
      window.sprite[img_name].y = y_;
    }
    if (scale_num) {
      window.sprite[img_name].scaleX = window.sprite[img_name].scaleY = scale_num;
    }
  }, 50)
}

window.sTime1 = function (point, frameNum) {
  return (1000 / 60) * (1 / point) * frameNum;
}

window.sTime = function(obj,ani){
  let point = obj.spriteSheet._data[ani].speed;
  let frameNum = obj.spriteSheet._data[ani].frames.length;
  console.log(point,frameNum);
  return (1000 / 60) * (1 / point) * frameNum;
}

window.drawR=function(x,y,w,h,color,con){
  var r = new createjs.Shape();
  r.graphics.beginFill(color).drawRect(x, y, w, h);
  if (con) {
    con.addChild(r);
  }
  
  return r;
}

window.transObj = {
  o: null,
  start: function (obj) {
    var _this = this;
    _this.destory();
    _this.o = obj;
    _this.o.alpha = 1;
    // _this.o.scaleY=_this.o.scaleX=1;
    // console.log(transObj.o);
    // $("#change_left").bind("click", _this.transLeft);
    // $("#change_right").bind("click", _this.transRight);
    // $("#change_up").bind("click", _this.transUp);
    // $("#change_down").bind("click", _this.transDown);
    // console.log($(document));
    $(document).on('keydown',function (event) {
      var keyNum = event.which;  //获取键值
      switch (keyNum) { //判断按键
        case 37: _this.transLeft(); break;//左
        case 38: _this.transDown(); break;//上
        case 39: _this.transRight(); break;//右
        case 40: _this.transUp(); break;//下
        case 100: _this.transSmall(); break;//小键盘4
        case 102: _this.transBig(); break;//小键盘6
        default:
          break;
      }
    });
    _this.move();
    _this.output();
  },
  transLeft: function () {
    transObj.o.x--;
    transObj.output();
  },
  transRight: function () {
    transObj.o.x++;
    transObj.output();
  },
  transUp: function () {
    transObj.o.y++;
    transObj.output();
  },
  transDown: function () {
    transObj.o.y--;
    transObj.output();
  },
  transSmall: function(){
    transObj.o.scaleX = transObj.o.scaleY -= 0.1; 
    transObj.output();
  },
  transBig: function(){
    transObj.o.scaleX = transObj.o.scaleY += 0.1;
    transObj.output();
  },
  move: function () {
    var _this = this;
    var dragObj = transObj.o;
    dragObj.addEventListener("mousedown", function (e) {
      var x1 = stage.mouseX;
      var y1 = stage.mouseY;
      var x2 = dragObj.x;
      var y2 = dragObj.y;
      stage.addEventListener('stagemousemove', function (e) {
        dragObj.x = stage.mouseX - (x1 - x2);
        dragObj.y = stage.mouseY - (y1 - y2);

        if (dragObj.getBounds() == null && dragObj.graphics.command.radius) {
          dragObj_mid_x = dragObj.x + dragObj.graphics.command.radius / 2;
          dragObj_mid_y = dragObj.y + dragObj.graphics.command.radius / 2;
          return false;
        }
        // dragObj_mid_x = dragObj.x+dragObj.getBounds().width/2;
        // dragObj_mid_y = dragObj.y+dragObj.getBounds().height/2;
      });
      stage.addEventListener('stagemouseup', function (e) {
        // dragObj.x = x2;
        // dragObj.y = y2;
        _this.output();
        e.target.removeAllEventListeners();
      });
    });
  },
  output: function () {
    // console.log(transObj.o)
    var transObjox = transObj.o.x.toFixed(1);
    var transObjoy = transObj.o.y.toFixed(1);
    if (transObj.o.sourceRect == undefined && transObj.o.spriteSheet == undefined) {
      console.log(outName,
        "x:" + (transObjox - transObj.o.getBounds().width / (1 / (transObj.o.regX / transObj.o.getBounds().width))).toFixed(1),
        ",y:" + (transObjoy - transObj.o.getBounds().height / (1 / (transObj.o.regY / transObj.o.getBounds().height))).toFixed(1),
        (transObjox - transObj.o.getBounds().width / (1 / (transObj.o.regX / transObj.o.getBounds().width))).toFixed(1)
        + "," + (transObjoy - transObj.o.getBounds().height / (1 / (transObj.o.regY / transObj.o.getBounds().height))).toFixed(1)
        , "xx:" + transObjox, ",yy:" + transObjoy, "scale" + transObj.o.scaleX
      );
      return false;
    }
    var outName = transObj.o.name;
    if (transObj.o.regX == 0 && transObj.o.regY == 0) {
      console.log(outName, "x:" + transObjox, ",y:" + transObjoy, transObjox + "," + transObjoy);
    } else if (transObj.o.spriteSheet != undefined) {
      console.log(outName, "x:" + transObjox, ",y:" + transObjoy, transObjox + "," + transObjoy, "scale" + transObj.o.scaleX);
    } else {
      console.log(outName,
        "x:" + (transObjox - transObj.o.getBounds().width / (1 / (transObj.o.regX / transObj.o.getBounds().width))).toFixed(1),
        ",y:" + (transObjoy - transObj.o.getBounds().height / (1 / (transObj.o.regY / transObj.o.getBounds().height))).toFixed(1),
        (transObjox - transObj.o.getBounds().width / (1 / (transObj.o.regX / transObj.o.getBounds().width))).toFixed(1)
        + "," + (transObjoy - transObj.o.getBounds().height / (1 / (transObj.o.regY / transObj.o.getBounds().height))).toFixed(1)
        , "xx:" + transObjox, ",yy:" + transObjoy, "scale" + transObj.o.scaleX
      );
    }

  },
  destory: function () {
    // $("#change_left").unbind();
    // $("#change_right").unbind();
    // $("#change_up").unbind();
    // $("#change_down").unbind();
  }
}

window.concs2 = {
  showCon:function(){
    createjs.Tween.get(containerAll2_cs).to({ y: containerAll2_cs.y - 100, alpha: 1 }, 500, createjs.Ease.backOut).call(function(){
      h1.restart();
    });
  },
  hideCon: function () {
    createjs.Tween.get(containerAll2_cs).to({ y: containerAll2_cs.y + 100, alpha: 0 }, 500, createjs.Ease.backOut);
  }
}


window.getQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
window.chooseType = getQueryString("chooseType");

window.addRectBitmap_simple = (img_name, find_name, img_, img_json, regx, regy, x_, y_, addArr, boolean) => {
  wb[img_name] = new createjs.Bitmap(img_);
  wb[img_name].name = img_name;
  if (typeof x_ != "undefined" && typeof y_ != "undefined") {
    wb[img_name].x = x_;
    wb[img_name].y = y_;
  }
  var xx_ = img_json["frames"][img_json["animations"][find_name][0]][0];
  var yy_ = img_json["frames"][img_json["animations"][find_name][0]][1];
  var w_ = img_json["frames"][img_json["animations"][find_name][0]][2];
  var h_ = img_json["frames"][img_json["animations"][find_name][0]][3];
  wb[img_name].sourceRect = new createjs.Rectangle(xx_, yy_, w_, h_);
  wb[img_name].name = img_name;
  if (boolean == true) {
    wb[img_name].regX = w_ * regx;
    wb[img_name].x = wb[img_name].x + w_ * regx;
    wb[img_name].regY = h_ * regy;
    wb[img_name].y = wb[img_name].y + h_ * regy;
  }

  if (isNumber(addArr)) {
    wb[img_name].scaleX = wb[img_name].scaleY = addArr;
  }
  return wb[img_name];
}

function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj)
}


//对象(可为数组)重置origin点为图片中心
// origin_x,origin_y取值范围为 (0-1)
function reg_set(obj, origin_x, origin_y, index_) {
  if (Array.isArray(obj)) {
    for (var i = index_; i < obj.length; i++) {
      obj[i].regX = obj[i].getBounds().width * origin_x;
      obj[i].x = obj[i].x + obj[i].getBounds().width * origin_x;
      obj[i].regY = obj[i].getBounds().height * origin_y;
      obj[i].y = obj[i].y + obj[i].getBounds().height * origin_y;
      // obj[i].alpha=0;
      // obj[i].scaleX=obj[i].scaleY=0.1;
    }
  } else {
    obj.regX = obj.getBounds().width * origin_x;
    obj.x = obj.x + obj.getBounds().width * origin_x;
    obj.regY = obj.getBounds().height * origin_y;
    obj.y = obj.y + obj.getBounds().height * origin_y;
    // obj.scaleX=obj.scaleY=0.1;
  }
}


window.stageBreakHandler = (event)=> {
  if (event.paused != true) {
    window.stage.update();  //刷新舞台
  }
}

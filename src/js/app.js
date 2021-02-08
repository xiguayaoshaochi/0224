var txtArr = [
  "反面教師", 
  "天変地異", 
  "一石二鳥",
  "多種多様",
  "迷惑千万",
  "生年月日",
  "専業主婦",
  "絶体絶命",
  "体力測定",
  "相思相愛",
  "天下一品",
  "合格発表",
  "一問一答",
  "危機一髪",
  "言語道断",
  "悪戦苦闘",
  "反射神経",
  "満場一致",
  "愛妻弁当",
  "日本一周",
  "筆記試験"
]

// var di_ = require("../images/sma_img/ss_bg.png");

var btn1 = document.createElement('div');
btn1.id='btn1';
document.getElementById("canvas_box").append(btn1);
btn1.classList.add('scale_dia');
if (language == 'Japan'){
  btn1.classList.add("ri");
}

btn1.addEventListener('mousedown', function () {
  mraid.open();
})

var text2 = document.createElement('div');
text2.id = 'text2';
document.getElementById("canvas_box").append(text2);
text2.innerText = advword;

var cjs = createjs;
var textf = '1,';
if (language=='Japan') {
  textf='1'
}
var btn = new scale_animate(wb.end_btn1, 0.8, 0.7, 1000);
wb.end_btn1.addEventListener('mousedown', function () {
  mraid.open();
})
var waitTime = 800000;
window.tt = 439;
window.ac1 = new scoreAdd();


//界面背景颜色设置
window.content = new cjs.Container();
// person.addChild(content);


var desk =  addRectBitmap_simple('desk', 'desk', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
person.addChild(desk);
desk.x = screenMiddle;
desk.y = screenBottom - 260;



function addTopCon() {
  var bigCon = new cjs.Container();
  function addUnit() {
    for (let index = 0; index < 4; index++) {
      var newCon = new cjs.Container();
      var diname = 'di' + random1(1, 9999);
      var di = addRectBitmap_simple(diname, 'ss_bg', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
      newCon.addChild(di);
      di.x = index*0;
      di.y=0;
    }
    
  }
  
}

























function scoreAdd() {
  var _this = this;
  _this.tt = 439;
  _this.textf = '1,';
  _this.c2 = null;
  if (language == 'Japan') {
    _this.textf = '1'
  }
  _this.start = function (num, last) {
    clearInterval(_this.c2);
    _this.c2 = setInterval(() => {
      if (last) {
        _this.tt += 13;
      } else {
        _this.tt += 2;
      }

      if (_this.tt >= 1000) {
        if (language == 'Japan') {
          return text.text = '2000';
        } else {
          return text.text = '2,000';
        }

      }
      text.text = _this.textf + _this.tt;
    }, 1000 / num);
    setTimeouc(() => {
      clearInterval(_this.c2);
    }, 1000);
  }
}

window.checkIntersection = function (rect1, rect2) {
  if (s.x >= rect2.x + rect2.getBounds().width || s.x + rect1.getBounds().width <= rect2.x || rect1.y >= rect2.y + rect2.getBounds().height || rect1.y + rect1.getBounds().height <= rect2.y) {
    return false;
  }
  return true;
}

window.checkIntersectionBitmap = function (rect1, rect2) {
  // 括号外面是要转换的container,括号里面是要转换的坐标座位，第三个参数是目标container
  var s = rect1.parent.localToLocal(rect1.x, rect1.y, rect2.parent);
  // console.log(s, rect2.x, rect2.y, 56, 56)

  if (s.x >= rect2.x + 56 || s.x + 56 <= rect2.x || s.y >= rect2.y + 56 || s.y + 56 <= rect2.y) {
    return false;
  }
  return true;
}
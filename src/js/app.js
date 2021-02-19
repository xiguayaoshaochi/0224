var txtArr = [
  "反面教師",//1
  "天変地異",//2
  "一石二鳥",//3
  "多種多様",//4
  "迷惑千万",//5
  "生年月日",//6
  "専業主婦",//7
  "絶体絶命",//8
  "体力測定",//9
  "相思相愛",//10
  "天下一品",//11
  "合格発表",//12
  "一問一答",//13
  "危機一髪",//14
  "言語道断",//15
  "悪戦苦闘",//16
  "反射神経",//17
  "満場一致",//18
  "愛妻弁当",//19
  "日本一周",//20
  "筆記試験"//21
]


var small_bg_ = require("../images/sma_img/small_bg.png");
var focus_bg_ = require("../images/sma_img/focus_bg.png");
var ss_bg_ = require("../images/sma_img/ss_bg.png");
var ss_c_ = require("../images/sma_img/ss_c.png");

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
desk.y = screenMiddle+350;


//顶部8个词坑
function addTopCon() {
  var bigCon = new cjs.Container();
  function addUnit(x,y) {
    var newCon = new cjs.Container();
    for (let index = 0; index < 4; index++) {
      var diname = 'di' + random1(1, 9999);
      var di = addRectBitmap_simple(diname, 'ss_bg', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
      newCon.addChild(di);
      di.x = index*36;
      di.y=0;
      newCon.x = x;
      newCon.y = y;
    }
    bigCon.addChild(newCon);
  }
  bigCon.x = screenLeft+30;
  bigCon.y = screenTop+185+40;

  for (let index = 0; index < 8; index++) {
    const ii = index%4;
    const oo = Math.floor(index /4) ;
    addUnit(ii * (12 + 36*4), oo * (12 + 36))
  }
  person.addChild(bigCon);
}

addTopCon();


//中间主要内容文字
var textArr = ["悪戦苦反筆闘", "射合満場一記致", "神試格", "絶経験愛発", "体妻表", "弁絶", "当日本一周命"];
function addTextBox() {
  var textCon = new cjs.Container();
  textCon.x=screenLeft+65;
  textCon.y= screenMiddle-160;
  textArr.forEach((el,index)=>{
    var elArr = el.split('');
    var elarrL = elArr.length;
    elArr.forEach((eel, indexx) => {
      var STCon = new cjs.Container();
      var smname = 'sm' + random1(1, 9999);
      var smb = addBitmap(smname, small_bg_, 0, 0);
      var text = new cjs.Text(eel,"41px score", "#fff");
      var smname1 = 'sm' + random1(1, 9999);
      var smb1 = addBitmap(smname1, focus_bg_, 0, 0);
      var text = new cjs.Text(eel, "41px score", "#fff");
      text.x = (73-text.getBounds().width)/2;
      text.y = (73 - text.getBounds().height) / 2+5;
      STCon.addChild(smb);
      STCon.addChild(smb1);
      STCon.addChild(text);
      STCon.x = 73 * index;
      STCon.y = 73 * (indexx + (7 - elarrL));
      smb.x = 0;
      smb.y = 0;
      smb1.x = 0;
      smb1.y = 0;
      smb1.alpha=0;
      textCon.addChild(STCon);
    })
  })
  person.addChild(textCon);
  return textCon;
}

var textCon = addTextBox();
//  stage.enableMouseOver(10);
stage.addEventListener("mousedown", function (e) {
  textCon.children.forEach((el) => {
    console.log(el)
    el.addEventListener("stagemousemove", (e) => {
      console.log(e)
      el.alpha = 0;
    })
  })
})























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
var fangkuai_ = require('../images/sma_img/fangkuai.png');
var blue_ = require('../images/sma_img/blue.png');
var green_ = require('../images/sma_img/green.png');
var pink_ = require('../images/sma_img/pink.png');
var red_ = require('../images/sma_img/red.png');
var yellow_ = require('../images/sma_img/yellow.png');
var quan_ = require('../images/sma_img/quan.png');
var ssg_ = require('../images/sma_img/ssg.png');

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

window.ss = addsquare();
var perbounds = ss.getBounds();
var w = perbounds.width;
var h = perbounds.height;
var x = perbounds.x;
var y = perbounds.y;
var ss1 = ss.clone();


window.bg_shape = new cjs.Shape();
bg_shape.graphics.setStrokeStyle(5).beginStroke("#fff").drawRoundRect(0 - 3, 0 - 3, w + 6, h + 6,5);
bg_shape.shadow = new createjs.Shadow("#333", 0, 0, 10);
ss1.addChild(bg_shape);
person.addChild(ss1);
person.setChildIndex(ss1, 0);

function addsquare() {
  var Consquare = new cjs.Container();
  var numx = 10;
  var numy = 10;
  function smallsquare(x,y,color) {
    var sma = new cjs.Container();
    var sp = new cjs.Shape();
    
    sp.graphics.setStrokeStyle(1).beginStroke('#96a4c0').beginFill(color).drawRect(0, 0, 56, 56);
        // var simg = addRectBitmap_simple(simgname, 'fangkuai', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
    var simgname = "simg"+random1(1,9999);
    var simg = addBitmap(simgname, fangkuai_, 0, 0, "addArr6");
    simg.regX = 56*0.5;
    simg.regY = 56 * 0.5;
    simg.x = simg.x + 56 * 0.5;
    simg.y = simg.y + 56 * 0.5;

    var simgname1 = "simg1" + random1(1, 9999);
    var simg1 = addBitmap(simgname1, ssg_, 0, 0, "addArr6");
    simg1.regX = 56 * 0.5;
    simg1.regY = 56 * 0.5;
    simg1.x = simg1.x + 56 * 0.5;
    simg1.y = simg1.y + 56 * 0.5;

    sma.addChild(sp);
    
    sma.addChild(simg);
    sma.addChild(simg1);
    simg1.alpha=0;
    simg.alpha=0;
    simg.id = (x / 56) + (y / 56) * 10;
    var st = new cjs.Text(simg.id, "16px score", "#000");
    var boundsw = st.getBounds().width;
    var boundsh = st.getBounds().height;
    st.x = (56 - boundsw)/2 ;
    st.y = (56 - boundsh)/2;
    // sma.addChild(st);
    sma.x = x;
    sma.y = y;
    // 6c747a
    // b0b4b8
    // console.log(x,y);
    // sma.alpha=0;
    return sma;
  }
  for (let a = 0; a < numx; a++) {
    for (let b = 0; b < numy; b++) {
      var color_;
      if ((!(a == 3 || a == 4 || a == 5 || a == 6) && !(b == 3 || b == 4 || b == 5 || b == 6)) || ((a == 3 || a == 4 || a == 5 || a == 6) && (b == 3 || b == 4 || b == 5 || b == 6))) {
        color_ = "#6fb9b3";
      }else{
        color_ = "#a1b9b7";
      }
      Consquare.addChild(smallsquare(b * 56, a * 56,color_));
    }
  }
  person.addChild(Consquare);
  Consquare.x=screenMiddle-280;
  Consquare.y = screenMiddle-(canvas.height-100-200-150)/2;
  return Consquare;
}
ss.alpha=1;

var sb1 = wb.small_bg.clone();
sb1.x = 90;
sb1.y = 600 +  (canvas.height - 185 - 50 - 560 - 200) / 2;

var sb2 = wb.small_bg.clone();
sb2.x = 285;
sb2.y = 600 + (canvas.height - 185 - 50 - 560 - 200) / 2;

var sb3 = wb.small_bg.clone();
sb3.x = 475;
sb3.y = 600 + (canvas.height - 185 - 50 - 560 - 200) / 2;

ss.addChild(sb1);
ss.addChild(sb2);
ss.addChild(sb3);

window.t1 = new addEl('111100',1,[53,54,55,63,null,null],blue_);
window.t2 = new addEl('100100100', 2, [48, null, null, 58, null, null, 68, null, null], red_);
window.t4 = new addEl('110011', 4, [16, 17, null, null, 27, 28],green_);
window.t3 = new addEl('110110', 3, [35, 36, null, 45, 46, null],yellow_);

window.t5 = new addEl('110100', 5, [35, 36, null, 45, 46, null], green_);

window.t6 = new addEl('111001', 1, [53, 54, 55, 63, null, null], pink_);
window.t7 = new addEl('111010', 7, [35, 36, null, 45, 46, null], yellow_);

t3.scaleX = t3.scaleY = 0.2;
t3.alpha=0;

t4.scaleX = t4.scaleY = 0.2;
t4.alpha = 0;

t6.scaleX = t6.scaleY = 0.2;
t6.alpha = 0;

t7.scaleX = t7.scaleY = 0.2;
t7.alpha = 0;

window.c1 = t1.clone([recursive = true]);
window.c2 = t2.clone([recursive = true]);
window.c3 = t3.clone([recursive = true]);
window.c4 = t4.clone([recursive = true]);
ss.addChild(c1);
ss.addChild(c2);
ss.addChild(c3);
ss.addChild(c4);
// t1 48 631.5
// t2 244 631.5
// t3 460 631.5
var xx=56*0.5;
var yy = 56 * 0.5 + 56 * 2;
c1.x = 252.4;
c1.y = 337.3;
c1.alpha=0;
c1.scaleX = c1.scaleY =1;

c2.x = 475.6;
c2.y = 308.4;
c2.alpha = 0;
c2.scaleX = c2.scaleY = 1;

c3.x = 336.3;
c3.y = 223.6;
c3.alpha = 0;
c3.scaleX = c3.scaleY = 1;

c4.x = 420.4;
c4.y = 112.2;
c4.alpha = 0;
c4.scaleX = c4.scaleY = 1;

function addEl(type,site,arr,color) {
  var _this = this;
  _this.arr = type.split('');
  _this.con = new cjs.Container();
  _this.arr.forEach((el,index) => {
    if (el!=0) {
      var arrname = "arrimg" + random1(1, 9999);
      // var arrimg = addRectBitmap_simple(arrname, 'fangkuai', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
      var arrimg = addBitmap(arrname, color, 0, 0, "addArr6");
      arrimg.regX = 56 * 0.5;
      arrimg.regY = 56 * 0.5;
      arrimg.x = (index % 3) * 56 + 56 * 0.5;
      arrimg.y = Math.floor(index / 3) * 56 + 56 * 0.5;
      arrimg.id = arr[index];
      arrimg.color = color;
      _this.con.addChild(arrimg);
    }
  });
  var xx = 56*0.5;
  var yy = 56*0.5;
  if (site && site==1) {
    _this.con.x = 56 / 2 + 10 - xx;
    _this.con.y = 570 + (canvas.height - 185 - 50 - 560 - 200) / 2 - 22;
  } else if (site && site == 2) {
    _this.con.x = (56 / 2) * 2 + 56 * 3 + 45 - xx+15;
    _this.con.y = 550 + (canvas.height - 185 - 50 - 560 - 200) / 2 - yy;
  } else if (site && site == 3) {
    _this.con.x = 55 - xx+10;
    _this.con.y = 570 + (canvas.height - 185 - 50 - 560 - 200) / 2 - 25;
  } else if (site && site == 4) {
    _this.con.x = 234 - xx-3;
    _this.con.y = 570 + (canvas.height - 185 - 50 - 560 - 200) / 2 - yy;
  } else if (site && site == 5) {
    _this.con.x = 443 - xx+5;
    _this.con.y = 570 + (canvas.height - 185 - 50 - 560 - 200) / 2 - yy+5;
  } else if (site && site == 7) {
    _this.con.x = 234 - xx-3;
    _this.con.y = 570 + (canvas.height - 185 - 50 - 560 - 200) / 2 - yy+10;
  }

  
  var perbounds = _this.con.getBounds();
  var w = perbounds.width;
  var h = perbounds.height;
  var x = perbounds.x;
  var y = perbounds.y;
  _this.con.regX = w * 0.5;
  _this.con.regY = h * 0.5;

  _this.con.x = _this.con.x + _this.con.regX;
  _this.con.y = _this.con.y + _this.con.regY;

  ss.addChild(_this.con);
  _this.con.scaleX = _this.con.scaleY = 0.6;
  // ss.addChild(sb);
  return _this.con;
}







setTimeouc(() => {
  window.great = addRectBitmap_simple('great', 'great', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
  great.x = c3.x+100;
  great.y = c3.y;
  great.alpha=0;
  // ss.addChild(great);
  cjs.Tween.get(wb.guang, {
    loop: true
  }).to({
    rotation: 360
  }, 3000);
 window.tip1 = new handAnimation(t1, c1, 150, 90);
 var m1 = new movefun(t1,c1,step1);

 function step1() {
   cjs.Tween.get(t3).to({
     alpha: 1
   }, 100);
   cjs.Tween.get(t3).to({
     scaleX: 0.6, scaleY: 0.6,
   }, 350, cjs.Ease.backOut).wait(350).call(() => {
     window.tip1 = new handAnimation(t3, c3, 110, 110, 2300);
     var m2 = new movefun(t3, c3, step2);
   });
   setTimeout(() => {
     ac1.start(70);
     clearImg(60, 69)
   }, 150);
 }

 function step2() {
   cjs.Tween.get(t6).to({
     alpha: 1
   }, 100);
   cjs.Tween.get(t6).to({
     scaleX: 0.6,
     scaleY: 0.6,
   }, 350, cjs.Ease.backOut)
   setTimeout(() => {
     ac1.start(70);
     clearImg(40, 49)
   }, 150);
   cjs.Tween.get(t2).to({
     alpha: 1
   }, 350).wait(500).call(() => {
     window.tip1 = new handAnimation(t2, c2, 80, 160, 1800);
     var m2 = new movefun(t2, c2, step3);
   })
  // window.tip1 = new handAnimation(t4, c4, 120, 60);
  // var m2 = new movefun(t4, c4, step2);
 }


  function step3() {
    cjs.Tween.get(t4).to({
      alpha: 1
    }, 100);
    cjs.Tween.get(t4).to({
      scaleX: 0.6,
      scaleY: 0.6,
    }, 350, cjs.Ease.backOut).wait(350).call(() => {
      window.tip1 = new handAnimation(t4, c4, 150, 140, 2300);
      var m2 = new movefun(t4, c4, step4);
    });
    setTimeout(() => {
      ac1.start(70);
      clearImg(8, 98, "shu");
    }, 150);
  }

  function step4() {
    cjs.Tween.get(t7).to({
      alpha: 1
    }, 100);
    cjs.Tween.get(t7).to({
      scaleX: 0.6,
      scaleY: 0.6,
    }, 350, cjs.Ease.backOut)
    cjs.Tween.get(great).to({alpha:1},20).to({
      y: great.y - 100
    }, 1000, cjs.Ease.quadOut)
    cjs.Tween.get(great).wait(830).to({
      alpha: 0
    }, 200)
    setTimeout(() => {
      ac1.start(200);
      clearImg(20, 29);
      // cjs.Tween.get(ss.children[27].children[3]).to({
      //   alpha: 0.1
      // }, 150).to({
      //   alpha: 1
      // }, 150).to({
      //   alpha: 0.1
      // }, 150).to({
      //   alpha: 1
      // }, 150).to({
      //   alpha: 0
      // }, 150)
      // cjs.Tween.get(ss.children[28].children[3]).to({
      //   alpha: 0.1
      // }, 150).to({
      //   alpha: 1
      // }, 150).to({
      //   alpha: 0.1
      // }, 150).to({
      //   alpha: 1
      // }, 150).to({
      //   alpha: 0
      // }, 150)
      setTimeouc(() => {
        person.addChild(end_pop);
        wb.card.alpha = wb.txt1.alpha = wb.end_btn.alpha = 0;
        cjs.Tween.get(wb.end_btn1).to({
          alpha: 0
        }, 350)
        cjs.Tween.get(end_pop).to({
          alpha: 1
        }, 350)
        wb.card.alpha = 1;
        cjs.Tween.get(wb.card).to({
          scaleY: 1,
          scaleX: 1
        }, 500, cjs.Ease.backOut);
        cjs.Tween.get(wb.guang).to({
          scaleY: 1,
          scaleX: 1
        }, 500, cjs.Ease.backOut);
        cjs.Tween.get(wb.you_win).wait(10).to({
          alpha: 1
        }, 10).to({
          y: wb.you_win.y + 300
        }, 500, cjs.Ease.backOut);
        cjs.Tween.get(wb.end_btn).wait(10).to({
          alpha: 1
        }, 10).to({
          scaleY: 1,
          scaleX: 1
        }, 500, cjs.Ease.backOut).call(() => {
          var btn = new scale_animate(wb.end_btn, 1, 1.1, 1000);
          wb.end_btn.addEventListener('mousedown', function () {
            mraid.open();
          })
        });
        cjs.Tween.get(wb.txt1).wait(350).to({
          alpha: 1
        }, 10).to({
          scaleY: 1,
          scaleX: 1
        }, 500, cjs.Ease.backOut);
      }, 350);
    }, 150);
  }
}, 350);



function handTips(obj) {
  var _this = this;
  _this.obj = obj;
  _this.lock =true;
  var objpar = _this.obj.parent;
  var gname = "g"+random1(1,9999);
  var gname2 = "g" + random1(1, 9999)
  
  _this.ready=function(){
    
    _this.obj.alpha = 0;
    _this.obj.x = _this.obj.x - 20;
    _this.obj.y = _this.obj.y + 20;
    _this.obj.scaleX = _this.obj.scaleY = 1.1;
    
  },
  _this.start=function(){
    _this.ready();
    cjs.Tween.get(_this.obj).to({
      alpha: 1
    }, 200).call(() => {
      cjs.Tween.get(_this.obj,{loop:true}).to({
          x: _this.obj.x + 20,
          y: _this.obj.y - 20,
          scaleX: 1,
          scaleY: 1
        }, 300).call(() => {
            addRectBitmap_simple(gname, 'g1', sprite_, json_sprite, 0.5, 0.5, 15, 40, "addArrAll", true);
            addRectBitmap_simple(gname2, 'g1', sprite_, json_sprite, 0.5, 0.5, 15, 40, "addArrAll", true);
            objpar.addChild(wb[gname], wb[gname2], _this.obj);
            wb[gname].x = _this.obj.x + 0;
            wb[gname].y = _this.obj.y - 10 - 0;
            wb[gname].alpha = 0;
            wb[gname].scaleX = wb[gname].scaleY = 0.5;
            wb[gname2].x = _this.obj.x + 0;
            wb[gname2].y = _this.obj.y - 10 - 0;
            wb[gname2].alpha = 0;
            wb[gname2].scaleX = wb[gname2].scaleY = 0.5;
            cjs.Tween.get(wb[gname]).to({
              alpha: 1,
              scaleX: 0.8,
              scaleY: 0.8
            }, 600).to({
              alpha: 0,
              scaleX: 1,
              scaleY: 1
            }, 600)
            cjs.Tween.get(wb[gname2]).wait(400).to({
              alpha: 1,
              scaleX: 0.8,
              scaleY: 0.8
            }, 600).to({
              alpha: 0,
              scaleX: 1,
              scaleY: 1
            }, 600).call(() => {
              // cjs.Tween.get(_this.obj).to({
              //   alpha: 0
              // }, 200).wait(1500).call(()=>{
              //   // if (_this.lock) {
              //   //    _this.start();
              //   // }
              // })
            })
          }).wait(200).to({
            x: _this.obj.x ,
            y: _this.obj.y ,
            scaleX: 1.1,
            scaleY: 1.1
          }, 300)
      
    });
  }
  
  _this.start();
  _this.stop=function(){
    _this.lock=false;
    createjs.Tween.removeTweens(_this.obj);
    if (wb[gname]) {
      createjs.Tween.removeTweens(wb[gname]);
      createjs.Tween.removeTweens(wb[gname2]);
      wb[gname].alpha = wb[gname2].alpha = 0
    }
    
    _this.ready();
  }
}


var empty = function(){

}


var numarr = [
  yellow_, yellow_, yellow_, blue_, blue_, '', '', blue_, red_, '',
  yellow_, green_, pink_, blue_, '', green_, '', '', red_, green_,
  green_, green_, green_, green_, green_, green_, green_, '', red_, green_,
  blue_, pink_, pink_, blue_, blue_, '', '', red_, red_, green_,
  yellow_, yellow_, yellow_, yellow_, yellow_, '', '', yellow_, yellow_, yellow_,
  pink_, pink_, pink_, '', '', '', green_, '', '', green_,
  blue_, blue_, blue_, '', blue_, blue_, blue_, blue_, blue_, blue_,
  blue_, pink_, pink_, blue_, blue_, '', '', '', red_, red_,
  green_, red_, red_, red_, red_, blue_, '', blue_, red_, yellow_,
  green_, pink_, pink_, red_, red_, '', '', '', red_, yellow_,
]

function fillsquare(arr) {
  arr.forEach((el,index) => {
    if (el!='') {
      ss.children[index].children[1].alpha = 1;
      ss.children[index].children[1].image.src = el;
    }
  });
}

fillsquare(numarr);

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


window.movefun = function (obj,target,callback) {
  var _this = this;
  _this.obj = obj;
  _this.target = target;
  _this.move = function() {
    _this.shape = new createjs.Shape();
    _this.shape.graphics.beginFill("#333").drawRect(_this.obj.x  - _this.obj.getBounds().width / 2 , _this.obj.y  - _this.obj.getBounds().height / 2 , _this.obj.getBounds().width , _this.obj.getBounds().height);
    _this.shape.alpha = 0.01;
    _this.obj.parent.addChild(_this.shape)
    _this.shape.addEventListener("mousedown", function (e) {
      if (tip1.lock) {
        tip1.stop();
      }
      var x1 = stage.mouseX;
      var y1 = stage.mouseY;
      var x2 = _this.obj.x;
      var y2 = _this.obj.y;
      var xx = _this.shape.x-x2;
      var yy = _this.shape.y - y2;
      createjs.Tween.removeTweens(_this.obj);
      cjs.Tween.get(_this.obj).to({
        scaleX: 1,
        scaleY: 1
      },150)
      stage.addEventListener('stagemousemove', function (e) {
        _this.obj.x = stage.mouseX - (x1 - x2);
        _this.obj.y = stage.mouseY - (y1 - y2);
        _this.shape.x = _this.obj.x+xx;
        _this.shape.y = _this.obj.y + yy;
        if (_this.obj.children.every(_this.check)) {
          _this.obj.children.forEach((el) => {
            ss.children[el.id].children[2].alpha = 1;
          })
        } else {
          _this.obj.children.forEach((el) => {
            ss.children[el.id].children[2].alpha = 0;
          })
        }
      });
      
      stage.addEventListener('stagemouseup', function (e) {
        if (_this.checkAll()) {
          callback();
        }else{
          _this.obj.x = x2;
          _this.obj.y = y2;
          _this.obj.scaleX = _this.obj.scaleY =0.6;
          _this.shape.x = _this.obj.x + xx;
          _this.shape.y = _this.obj.y + yy;
        }
        
        
        e.target.removeAllEventListeners();
      });
    });
  }
  _this.move();
  _this.checkAll = function () {
    if (obj.children.every(_this.check)) {
      console.log("重合")
      // var nicetext = new cjs.Text(obj.children.length, "35px score", "#ff9c00");
      var nicetext = addRectBitmap_simple('great', 'great', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
      nicetext.x = obj.x;
      nicetext.y = obj.y;
      ss.addChild(nicetext);
      cjs.Tween.get(nicetext).to({
        y: nicetext.y-100
      },1000,cjs.Ease.quadOut)
      cjs.Tween.get(nicetext).wait(800).to({
        alpha:0
      },200)

      _this.obj.children.forEach((el)=>{
        // ss.children[el.id].removeChild(ss.children[el.id].children[1]);
        ss.children[el.id].children[1].alpha = 1;
        ss.children[el.id].children[1].image.src = el.color;
        var simgname = "simg" + random1(1, 9999);
        var simg = addBitmap(simgname, quan_, 0, 0, "addArr6");
        simg.regX = 62 * 0.5;
        simg.regY = 62 * 0.5;
        simg.x = simg.x + 62 * 0.5-3;
        simg.y = simg.y + 62 * 0.5-3;
        ss.children[el.id].addChild(simg, ss.children[el.id].children[1]);
        // ss.children[el.id].setChildIndex(simg,0);
        cjs.Tween.get(simg).to({
          alpha: 0
        }, 150)
      })
      _this.obj.alpha=0;
      return true
    }
  }
  _this.check = function (el, index, array) {
    // console.log(el, _this.target.children[index])
    if (checkIntersectionBitmap(el, _this.target.children[index])) {
      return true
    }else{
      return false
    }
    
  }
}


window.handAnimation = function(obj,target,handx,handy,timer){
  var _this = this;
  _this.sh=null;
  _this.timer=1500;
  if (timer) {
    _this.timer=timer
  }
  _this.c=null;
  _this.lock = true;
  _this.target = target;
  _this.obj = obj;
  _this.start = function(){
    var s1 = _this.obj.clone([recursive = true]);
    // console.log(s1.scaleX)
    _this.obj.parent.addChild(s1);
    var handname = 'hand'+random1(1,9999);
    var hand = addRectBitmap_simple(handname, 'hand', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArr1", true);
    // hand.x = s1.x + handx;
    // hand.y = s1.y + handy;
    hand.x =  handx;
    hand.y =  handy;
    hand.skewY=180;
    s1.addChild(hand);
    return [s1,hand];
  }
  _this.move = function(){
    _this.sh = _this.start();
    var gp={x:0,y:0};
    gp.x = _this.sh[0].x+(_this.target.x  - _this.sh[0].x)*0.2;
    gp.y = _this.sh[0].y+(_this.target.y  - _this.sh[0].y)*0.9;
    cjs.Tween.get(_this.sh[0]).to({
      guide: {
        path: [ _this.sh[0].x, _this.sh[0].y, gp.x, gp.y,_this.target.x, _this.target.y]
      },scaleX:1,scaleY:1
    }, _this.timer, cjs.Ease.quadOut).to({alpha:0},150).call(()=>{
      if (_this.sh[0]) {
        removeStop(_this.sh[0])
      }
    })
    gp.x = _this.sh[1].x + (_this.target.x + handx - _this.sh[1].x) * 0.2;
    gp.y = _this.sh[1].y + (_this.target.y + handy - _this.sh[1].y) * 0.9;
    cjs.Tween.get(_this.sh[1]).to({
      // guide: {
      //   path: [_this.sh[1].x, _this.sh[1].y, gp.x, gp.y, _this.target.x + handx, _this.target.y + handy]
      // }
    }, _this.timer, cjs.Ease.quadOut).to({
      alpha: 0
    }, 150).call(() => {
      if (_this.sh[1]) {
        removeStop(_this.sh[1])
      }
      
    })
  }
  _this.c= setInterval(() => {
    if (_this.lock) {
      // _this.sh=null;
      _this.move();
    }
  }, _this.timer+500);
  _this.stop=function(){
    clearInterval(_this.c);
    if (_this.sh && _this.sh!=null) {
      console.log(_this.sh)
      _this.lock=false;
      removeStop(_this.sh[0], _this.sh[1])
    }
    
  }
  _this.move();
}



window.clearImg = function(num1,num2,dir){
  if (dir) {
    for (let index = 0; index <= 9; index++) {
      // console.log(index)
      cjs.Tween.get(ss.children[index *10+ num1].children[1]).to({
        alpha: 0.1
      }, 150).to({
        alpha: 1
      }, 150).to({
        alpha: 0.1
      }, 150).to({
        alpha: 1
      }, 150).to({
        alpha: 0
      }, 150)
    }
  }else{
    for (let index = 0; index <= num2 - num1; index++) {
      cjs.Tween.get(ss.children[num1 + index].children[1]).to({
        alpha: 0.1
      }, 150).to({
        alpha: 1
      }, 150).to({
        alpha: 0.1
      }, 150).to({
        alpha: 1
      }, 150).to({
        alpha: 0
      }, 150)
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
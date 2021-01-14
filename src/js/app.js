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
var btn = new scale_animate(wb.end_btn1, 0.9, 1, 1000);
wb.end_btn1.addEventListener('mousedown', function () {
  mraid.open();
})
var waitTime = 800000;
window.tt = 439;

//界面背景颜色设置
window.content = new cjs.Container();
person.addChild(content);
var perbounds = person.getBounds();
var w = perbounds.width;
var h = perbounds.height;
var x = perbounds.x;
var y = perbounds.y;

window.bg_shape = new cjs.Shape();
bg_shape.graphics.beginFill("#fff").drawRect(x,y,w,h);
person.addChild(bg_shape);
person.setChildIndex(bg_shape,0);
window.ss = addsquare();

function addsquare() {
  var Consquare = new cjs.Container();
  var numx = 10;
  var numy = 10;
  function smallsquare(x,y) {
    var sma = new cjs.Container();
    var sp = new cjs.Shape();
    
    sp.graphics.setStrokeStyle(1).beginStroke('#96a4c0').beginFill("#f0f7ff").drawRect(0, 0, 56,56);
    var simgname = "simg"+random1(1,9999);
    var simg = addRectBitmap_simple(simgname, 'fangkuai', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
    sma.addChild(sp);
    sma.addChild(simg);
    simg.alpha=0;
    simg.id = (x / 56) + (y / 56) * 10;
    var st = new cjs.Text(simg.id, "16px score", "#000");
    var boundsw = st.getBounds().width;
    var boundsh = st.getBounds().height;
    st.x = (56 - boundsw)/2 ;
    st.y = (56 - boundsh)/2;
    sma.addChild(st);
    sma.x = x;
    sma.y = y;
    // console.log(x,y);
    // sma.alpha=0;
    return sma;
  }
  for (let a = 0; a < numx; a++) {
    for (let b = 0; b < numy; b++) {
      Consquare.addChild(smallsquare(b * 56, a * 56));
    }
  }
  person.addChild(Consquare);
  Consquare.x=screenMiddle-280;
  Consquare.y = screenMiddle-(canvas.height-100-200-150)/2;
  return Consquare;
}



window.t1 = new addEl('111100',1);
window.t2 = new addEl('111010', 2);
window.t3 = new addEl('110110', 3);

window.c1 = t1.clone([recursive = true]);
window.c2 = t2.clone([recursive = true]);
window.c3 = t3.clone([recursive = true]);
ss.addChild(c1);
ss.addChild(c2);
ss.addChild(c3);

// t1 48 631.5
// t2 244 631.5
// t3 460 631.5
c1.x=196.1;
c1.y=419.9;
c1.alpha=0.3;

c2.x = 309.2;
c2.y = 308.6;
c2.alpha = 0.3;

c3.x = 83.2;
c3.y = 252.1;
c3.alpha = 0.3;


function addEl(type,site) {
  var _this = this;
  _this.arr = type.split('');
  _this.con = new cjs.Container();
  _this.arr.forEach((el,index) => {
    if (el!=0) {
      var arrname = "arrimg" + random1(1, 9999);
      var arrimg = addRectBitmap_simple(arrname, 'fangkuai', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
      arrimg.x = (index % 3) * 56;
      arrimg.y = Math.floor(index / 3) * 56;
      _this.con.addChild(arrimg);
    }
  });

  if (site && site==1) {
    _this.con.x=  56/2+20;
    _this.con.y = 560 + (canvas.height-185-50-560-200)/2;
  } else if (site && site == 2) {
    _this.con.x = (56 / 2)*2 + 56*3+20;
    _this.con.y = 560 + (canvas.height-185-50-560-200)/2;
  } else if (site && site == 3) {
    _this.con.x = (56 / 2) * 3 + 56 * 6 + 20 * 2;
    _this.con.y = 560 + (canvas.height-185-50-560-200)/2;
  }

  ss.addChild(_this.con);
  return _this.con;
}






setTimeouc(() => {
 
  
}, 350);



function handTips(obj) {
  var _this = this;
  _this.obj = obj;
  console.log(obj.name)
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
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '0', '', '0', '0', '', '', '', '', '', '0',
  '0', '', '', '0', '0', '0', '0', '0', '0', '0',
  '0', '', '', '0', '0', '', '', '', '0', '0',
  '0', '0', '0', '0', '0', '0', '', '0', '0', '0',
  '0', '0', '0', '', '', '', '0', '', '', '0',
  '0', '0', '0', '', '0', '0', '0', '0', '0', '0',
  '0', '0', '0', '0', '0', '0', '0', '', '', '',
]

function fillsquare(arr) {
  arr.forEach((el,index) => {
    if (el!='') {
      ss.children[index].children[1].alpha=1;
    }
  });
}

fillsquare(numarr);

window.checkIntersection = function (rect1, rect2) {
  if (rect1.x >= rect2.x + rect2.getBounds().width || rect1.x + rect1.getBounds().width <= rect2.x || rect1.y >= rect2.y + rect2.getBounds().height || rect1.y + rect1.getBounds().height <= rect2.y) {
    return false;
  }
  return true;
}

window.checkIntersectionBitmap = function (rect1, rect2) {
  if (rect1.x >= rect2.x + rect2.width || rect1.x + rect1.width <= rect2.x || rect1.y >= rect2.y + rect2.height || rect1.y + rect1.height <= rect2.y) {
    return false;
  }
  return true;
}
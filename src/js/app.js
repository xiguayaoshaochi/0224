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

var tiparr = ["日本一周", "愛妻弁当", "筆記試験", "満場一致", "反射神経", "悪戦苦闘", "合格発表", "絶体絶命"];


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

cjs.Tween.get(wb.guang, {
  loop: true
}).to({
  rotation: 360
}, 3000);

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
    newCon.state="empty";
  }
  bigCon.x = screenLeft+30;
  bigCon.y = screenTop+185+40;

  for (let index = 0; index < 8; index++) {
    const ii = index%4;
    const oo = Math.floor(index /4) ;
    addUnit(ii * (12 + 36*4), oo * (12 + 36))
  }
  person.addChild(bigCon);
  return bigCon;
}

function addTextTop(con,textarr){
  var bf = con;
  
  for (let index = 0; index < 4; index++) {
    var newCon = new cjs.Container();
    var diname = 'ss_c' + random1(1, 9999);
    var di = addRectBitmap_simple(diname, 'ss_c', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
    newCon.addChild(di);
    var text = new cjs.Text(textarr[index], "19px score", "#fff");
    text.x = -(36 - text.getBounds().width) / 2;
    text.y = -(36 - text.getBounds().height) / 2-2;
    newCon.addChild(text);
    di.x = 0;
    di.y = 0;
    // text.x = 0;
    // text.y = 0;
    newCon.x = index * 36;
    newCon.y = 0;
    // newCon.regX = 36 * 0.5;
    // newCon.regY = 36 * 0.5;
    // newCon.x = newCon.regX+newCon.x;
    // newCon.y = newCon.regY + newCon.y;
    newCon.scaleX = newCon.scaleY=0.7;
    newCon.alpha=0;
    bf.addChild(newCon);
  }
}

function handTip() {
  var _this = this;
  _this.start = function (text) {
    _this.arr=[];
    _this.textsp=text.split('');
    for (let index = 0; index < textCon.children.length; index++) {
      const element = textCon.children[index];
      // console.log(element)
      if (typeof element.children !="undefined"&&( element.children[2].text == _this.textsp[0] || element.children[2].text == _this.textsp[1]
        || element.children[2].text == _this.textsp[2] || element.children[2].text == _this.textsp[3])) {
        _this.arr.push(element);
      }
    }
    
    if (_this.arr.length>4) {
      _this.arr.splice(0,1);
    }
    console.log(_this.arr);

    var handname = 'hand' + random1(1, 9999);
    _this.hand = addRectBitmap_simple(handname, 'hand', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArr1", true);
    _this.hand.x = _this.arr[0].x+36*3;
    _this.hand.y = _this.arr[0].y+36*3;
    _this.hand.skewY = 180;
    _this.hand.alpha=0;
    _this.arr[0].parent.addChild(_this.hand);
    if (_this.arr[0].x == _this.arr[1].x) {
      cjs.Tween.get(_this.hand,{loop:true}).to({
        alpha: 1
      }, 100).to({
        y: _this.arr[3].y +36* 3
      }, 1000,cjs.Ease.quadOut).to({
        alpha: 0
      }, 100)
    }else{
      cjs.Tween.get(_this.hand, {
        loop: true
      }).to({
        alpha: 1
      }, 100).to({
        x: _this.arr[3].x + 36 *2
      }, 750, cjs.Ease.quadOut).to({
        alpha: 0
      }, 100)
    }
  },
  _this.stop=function(){
    createjs.Tween.removeTweens(_this.hand);
    _this.arr[0].parent.removeChild(_this.hand);
  },
  _this.delete=function(text){
    var de = tiparr.indexOf(text[0]);
    tiparr.splice(de,1);
  }
}

var h1 = new handTip();




window.bigCon = addTopCon();


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
      STCon.state='free';
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

window.textCon = addTextBox();
//  stage.enableMouseOver(10);
window.dt = [];
var gameMain = function () {
  var _this = this;
  _this.start=function(){
    // console.log("start")
    console.log(tiparr[0])
    h1.start(tiparr[0]);
    _this.lock=true;
    stage.addEventListener("mousedown", function (e) {
      if (bgm_state==false) {
        bgm_play();
      }
      h1.stop();
      var saveArr = [];
      stage.addEventListener("stagemousemove", function (e) {
        var x1 = stage.mouseX;
        var y1 = stage.mouseY;
        textCon.children.forEach((el) => {
          var p = el.globalToLocal(x1, y1);
          if (el.hitTest(p.x, p.y) && el.state == "free" && saveArr.length < 4) {
            
            el.state = "active";
            // el.alpha=0;
            // console.log(el)
            saveArr.push(el.children[2].text);
            if (saveArr.length >= 4) {
              
              stage.removeAllEventListeners();
            }
            cjs.Tween.get(el.children[1]).to({
              alpha: 1
            }, 200, cjs.Ease.quadOut).call(() => {

            });

            if (saveArr.length >= 4) {
              setTimeout(() => {
                if (_this.lock == true) {
                  // console.log(_this.lock)
                  // console.log("check")
                  _this.check(saveArr);
                  _this.lock = false;
                }
              }, 200);
            }

            
          }
        })
      })
      stage.addEventListener("stagemouseup", function (e) {
        if (saveArr.length < 4) {
          var disarr = textCon.children.filter((el) => {
            return el.state == "active"
          })
          _this.clear();
          _this.start();
          disarr.forEach((el) => {
            cjs.Tween.get(el.children[1]).wait(50).to({
              alpha: 0
            }, 350, cjs.Ease.quadOut).call(() => {
              
            })
          })
        }
      })
    })
  },
  _this.check=function(arr){
    // console.log("zhixingjici")
    var result = txtArr.filter((el)=>{
      var relarr = el.split('').sort(function (a, b) {
        return a.localeCompare(b)
      });

      var arrs = arr.sort(function (a, b) {
        return a.localeCompare(b)
      });
      // console.log(relarr,arrs)
      return JSON.stringify(relarr) == JSON.stringify(arrs);
    })
    if (result.length>0) {
      // console.log("result")
      console.log(result)
      dt=[];
      dt.push(result[0]);
      h1.delete(dt);
      var disarr = textCon.children.filter((el)=>{
        return el.state=="active"
      })

      var bf = bigCon.children.find((el) => {
        return el.state == "empty"
      })
      bf.state = "full";
      var textarr = [];

      // console.log(textarr,bf)
      
      var indexbb = bigCon.children.indexOf(bf);
      
      var indexb = bigCon.children.indexOf(bf)%4;

      // console.log(indexbb, indexb)
      var bf = bigCon.children[0];
      var sitebf = bigCon.children[indexbb];
      disarr.forEach((el,index)=>{
        textarr.push(el.children[2].text);
        cjs.Tween.get(el.children[0]).wait(350).to({
          alpha: 0
        }, 350, cjs.Ease.quadOut)
        // console.log(bf.x, bf.y)
        var p = bf.localToLocal(bf.x, bf.y, disarr[1]);
        // console.log(p.x+indexb*36*4, p.y)
        cjs.Tween.get(el.children[2]).wait(350).to({
          x: p.x + indexb *(36*4+12) , y: p.y
        }, 1000, cjs.Ease.quadOut)

        cjs.Tween.get(el.children[2]).wait(350+350).to({
          alpha:0
        }, 500, cjs.Ease.quadOut)
        cjs.Tween.get(el.children[1]).wait(350).to({
          alpha: 0
        }, 350, cjs.Ease.quadOut).call(()=>{
        //  textCon.removeChild(el);
        })
      })

      addTextTop(sitebf, textarr);

      if (disarr[0].x == disarr[1].x) {
        var sfani = wsp.sfani.clone();
        sfani.x = disarr[0].x + 36;
        sfani.y = disarr[0].y + 36 * 4;
        sfani.gotoAndPlay("start");
        ding.play();
        disarr[0].parent.addChild(sfani);
        setTimeouc(() => {
          sfani.parent.removeChild(sfani);
        }, sTime(sfani,"start"));
      }else{
        var sfani = wsp.sfani.clone();
        sfani.x = disarr[0].x + 36*4;
        sfani.y = disarr[0].y + 36 * 1;
        sfani.gotoAndPlay("start");
        ding.play();
        sfani.rotation=-90;
        disarr[0].parent.addChild(sfani);
        setTimeouc(() => {
          sfani.parent.removeChild(sfani);
        }, sTime(sfani, "start"));
      }

      

      for (let index = 0; index < 4; index++) {
        // console.log(bigCon.children[indexbb].children[index + 4])
        cjs.Tween.get(bigCon.children[indexbb].children[index + 4]).wait(350 + 350).to({
          alpha: 1
        }, 350, cjs.Ease.quadOut)

        cjs.Tween.get(bigCon.children[indexbb].children[index + 4]).wait(350 + 350).to({
          scaleX: 1,
          scaleY: 1
        }, 500, cjs.Ease.backOut).call(()=>{
          // setTimeouc(() => {
          if (bigCon.children.find((el) => {return el.state == "empty"}) == undefined) {
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
          // }, 1300);
          }
        })
      }
      
      setTimeout(() => {
        _this.changeSite(disarr);
        _this.clear();
        _this.start();
      }, 350+350+10);

      
    }else{
      var disarr = textCon.children.filter((el) => {
        return el.state == "active"
      })

      disarr.forEach((el) => {
        cjs.Tween.get(el.children[1]).wait(350).to({
          alpha: 0
        }, 350, cjs.Ease.quadOut).call(() => {

        })
      })

      setTimeout(() => {
        _this.clear();
        _this.start();
      }, 350 + 350 + 10);
    }
  },
  _this.changeSite=function(arr){
    // console.log("changeSite")
    var chanarr0 = textCon.children.filter((el) => {
      return (el.x == arr[0].x && el.y < arr[0].y)
    })
    var chanarr1 = textCon.children.filter((el) => {
      return (el.x == arr[1].x && el.y < arr[1].y)
    })
    var chanarr2 = textCon.children.filter((el) => {
      return (el.x == arr[2].x && el.y < arr[2].y)
    })
    var chanarr3 = textCon.children.filter((el) => {
      return (el.x == arr[3].x && el.y < arr[3].y)
    })
    // console.log(chanarr0, chanarr1, chanarr2, chanarr3)

    if (chanarr0[0] == chanarr1[0] && chanarr0[0] != undefined) {
      chanarr0.forEach((el)=>{
        cjs.Tween.get(el).to({
          y: el.y + 73 * 4
        }, (73 / 50) * 4 * 73, cjs.Ease.quadOut)
      })
    }else{
      chanarr2.forEach((el) => {
        cjs.Tween.get(el).to({
          y: el.y + 73 * 1
        }, (73 / 50) * 1 * 73, cjs.Ease.quadOut)
      })

      chanarr3.forEach((el) => {
        cjs.Tween.get(el).to({
          y: el.y + 73 * 1
        }, (73 / 50) * 1 * 73, cjs.Ease.quadOut)
      })

      chanarr0.forEach((el) => {
        cjs.Tween.get(el).to({
          y: el.y + 73 * 1
        }, (73 / 50) * 1 * 73, cjs.Ease.quadOut)
      })

      chanarr1.forEach((el) => {
        cjs.Tween.get(el).to({
          y: el.y + 73 * 1
        }, (73 / 50) * 1*73, cjs.Ease.quadOut)
      })

      
    }
    
  },
  _this.clear=function(){
    stage.removeAllEventListeners();
    textCon.children.forEach((el) => {
      el.state="free";
      el.removeAllEventListeners();
    })
    
  }
}

var game = new gameMain();
game.start();























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
  var ballArr = [
    [
      '',
      'green',
      'green',
      'green',
    ],
    [
      '',
      'blue',
      'cheng',
      'cheng',
    ],
    [
      'red',
      'cheng',
      'green',
      'cheng',
    ],
    [
      '',
      '',
      'red',
      'red',
    ],
    [
      '',
      '',
      '',
      'red',
    ],
    [
      '',
      'blue',
      'blue',
      'blue',
    ]
  ]

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

//每个容器小球最底部的位置y
var bsitey = 325 - 91 * 0.5 * 0.8 - 10;

//添加容器和小球
var mainCon = function () {
  var bigCon = new cjs.Container();
  function unitCon(x, y,index) {
    var singleCon = new cjs.Container();
    var name = 'con' + random1(1, 9999);
    
    for (let a = 0; a < ballArr[index].length; a++) {
      const element = ballArr[index][a];
      if (element != "") {
        var name = 'element' + random1(1, 9999);
        var ball = addRectBitmap_simple(name, element + 'ball', sprite_, json_sprite, 0.5, 0.5, 0, 0, "addArrAll", true);
        ball.x = 55;
        ball.color = element;
        // ball.y = (a-ballArr[index].length) * 90;
        ball.y = bsitey - ((ballArr[index].length-1-a)  * 85 * 0.8);
        ball.scaleX = ball.scaleY = 0.8;
        singleCon.addChild(ball);
      }
    }
    var conImg = addRectBitmap_simple(name, 'container', sprite_, json_sprite, 0, 0, 0, 0, "addArrAll", true);
    singleCon.addChild(conImg);
    conImg.x = conImg.y = 0;
    singleCon.state = "ready";
    bigCon.addChild(singleCon);
    singleCon.x = x;
    singleCon.y = y;
  }
  bigCon.x = screenLeft + 79;
  bigCon.y = screenMiddle-730/2+30;
  for (let index = 0; index < 6; index++) {
    const ii = index % 3;
    const oo = Math.floor(index / 3);
    unitCon(ii * (79 + 107), oo * (325 + 80),index)
  }
  person.addChild(bigCon);
  return bigCon;
}

window.bigCon = mainCon();



bigCon.children.forEach((el,index) => {
  if (!(index==1)) {
    el.state='lock';
  }
});

bigCon.addEventListener("mousedown", clickCon);

var hand1 =  wb.hand.clone();
bigCon.children[1].addChild(hand1);

hand1.x = 55;
hand1.y = 120;
window.h1 = new handTips(hand1);


var topy = -91 * 0.5 * 0.8;
function clickCon(e){
  if (bgm_state==false){
    bgm_play();
  }
  choose.play();
  var con = e.target.parent;
  var bf = bigCon.children.find(el=>{
    return el.state == "up"
  })

  var ac = bigCon.children.find(el => {
    return el.state == "active"
  })
  
  if (ac != undefined || con.state == 'lock') {
    return false;
  }
  if (bf != undefined) {
    console.log(bf != undefined , (bf.id != con.id ) , con.children.length != 5)
  }
  if (typeof con != undefined) {
    console.log(con.id)
  }

  if ( bf != undefined && (bf.id != con.id || h1 != null) && con.children.length != 5) {
    if (bigCon.getChildIndex(con) == 5 && h2==null) {
      return false;
    }
    if (h2 != null) {
      h2.stop();
      h2=null;
      con.children.splice(4, con.children.length - 4);
      bigCon.children.forEach((el, index) => {
        if (!(index == 5)) {
          el.state = 'ready';
        }
      });
    }
    var bit = bf.children.find(el => {
      return el.y == topy
    })
    bf.state = 'active';
    con.state = 'active';
    bf.removeChild(bit);
    con.addChild(bit);
    con.setChildIndex(bit, 0);
    var p = bf.localToLocal(bit.x, bit.y, con);
    bit.x = p.x;
    bit.y = p.y;
    cjs.Tween.get(bit).to({
      x: 55,
      y: topy
    }, 350, cjs.Ease.quadOut).to({
      y: bsitey - ((con.children.length - 2) * 85 * 0.8)
    }, Math.abs(topy - bsitey + ((con.children.length - 2) * 85 * 0.8)) / (179 / 350), cjs.Ease.bounceOut).call(() => {
      bf.state = 'ready';
      con.state = 'ready';
      if (check(con)) {
        //成功一个
        var yh = wsp.yh_ani.clone();
        yh.scaleX=yh.scaleY=0.8;
        yh.x=con.x+35;
        yh.y=con.y+80;
        con.parent.addChild(yh);
        yh.gotoAndPlay('start');
        setTimeouc(() => {
          con.parent.removeChild(yh);
        }, sTime(yh,"start"));
        console.log("成功一个")
        ac1.start(71);
        ding.play();
      }
      var em = bigCon.children.filter(el => {
        return el.state == "end"
      })

      if (em.length==4) {
        
        console.log("全部成功")
        setTimeouc(() => {
          success.play();
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
        }, 700);
      }
    })
    return false;
  }

  
  if (con.state == 'up') {
    if (h2 != null) {
      return false;
    }
    con.state = 'active';
    cjs.Tween.get(con.children[0]).to({
      y: bsitey - ((con.children.length - 2) * 85 * 0.8)
    }, Math.abs(topy - bsitey + ((con.children.length - 2) * 85 * 0.8)) / (179 / 350), cjs.Ease.bounceOut).call(() => {
      con.state = 'ready';
    })
  } else if (con.state == 'ready' && con.state != 'end' && con.children.length != 1) {
    if ( h1 != null&&bigCon.getChildIndex(con) == 1 && h1.lock == true) {
      h1.stop();
      h1=null;
      bigCon.children[5].state="ready";
      con.children.splice(4, con.children.length - 4);
      var hand2 = wb.hand.clone();
      bigCon.children[5].addChild(hand2);

      hand2.x = 55;
      hand2.y = 120;
      window.h2 = new handTips(hand2);
    }
    if (bf != undefined) {
      bf.state = 'active';
      cjs.Tween.get(bf.children[0]).to({
        y: bsitey - ((bf.children.length - 2) * 85 * 0.8)
      }, Math.abs(topy - bsitey + ((bf.children.length - 2) * 85 * 0.8)) / (179 / 350), cjs.Ease.bounceOut).call(() => {
        bf.state = 'ready';
      })
    }
    con.state = 'active';
    cjs.Tween.get(con.children[0]).to({
      y: topy
    }, Math.abs((topy - con.children[0].y) / (179 / 300))).call(() => {
      con.state = 'up';
      // if (bigCon.getChildIndex(con) == 1 && typeof h1 !=undefined && h1.lock == false) {
      //   con.state = 'lock';
      // }
    })
  }
  
  function check(con){
    let a = 0;
    for (let index = 0; index < con.children.length; index++) {
      const element = con.children[index];
      if (element.scaleX == 0.8 && (element.color != con.children[0].color || con.children.length != 5)) {
        a++;
      }
    }
    if (a!=0) {
      //颜色不对
    }else{
      //四个小球颜色一致
      con.state='end';
      return true;
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


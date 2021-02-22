window.json_sprite = require('../images/bigimg/sprite.json');
import guang_ from '../images/bigimg/guang.png';
import bg_ from "../images/bigimg/bg.jpg"


// SK
// Japan
window.language = 'Japan';

window.advword = '';

let imgArr = ["sprite", "shu_f", "shu_f2"
];
let imgNum = 0;
imgArr.forEach((item) => {
  import( /* webpackMode: "eager" */ "../images/bigimg/" + item + '.png').then(module => {
    imgNum++;
    window[item.match(/\w+/)[0] + "_"] = module.default;
    if (imgNum == imgArr.length) {
      // var map = require("./map.js");
      console.log("loadCompleteimgArr")
      loadCompleteimgArr();
    }

  }).catch(err => {
    console.log(err.message);
  });
})

var canvas_b = document.createElement('canvas');
  canvas_b.setAttribute('id', 'canvas_bottom');
  canvas_b.setAttribute('style', 'position: absolute;left: 0;top: 0;pointer-events: none;');
document.getElementById('canvas_box').appendChild(canvas_b);

function loadCompleteimgArr() {
  var resizerq = require("./resize.js");
  console.log('rezise')
  resizerq.resizeContent("canvas");
  resizerq.resizeContent("canvas_bottom");

  window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_sakura');
    canvasSnow.width = window.innerWidth;
    canvasSnow.height = window.innerHeight;
    setTimeout(function () {
      // resizerq.resizeContent("canvas")
      var canvas_bottom = document.getElementById('canvas_bottom');
      var W = window.innerWidth;
      var H = window.innerHeight;
      var myIdElement = document.getElementById("canvas_box");

      if (W >= H) {
        window.pageState = "heng";
        // resizerq.horizontalChange();
        // resizerq.hengChange();
        console.log(canvas)
        wb.txt2.alpha = 1;
        canvas.style.transform = 'translateX(-50%) scale(' + H/W+ ')';
        canvas_bottom.style.transform = 'translateX(-50%) scale(' + H / W + ')';
        myIdElement.classList.remove("shu");
        myIdElement.classList.add('heng');
        wb.end_btn1.alpha=0;
        textadv.alpha = 0;
      } else {
        wb.txt2.alpha = 0;
        window.pageState = "shu";
        canvas.style.transform = 'translateX(-50%) scale(' + 1+ ')';
        canvas_bottom.style.transform = 'translateX(-50%) scale(' + 1 + ')';
        myIdElement.classList.remove("heng");
        myIdElement.classList.add('shu');
        wb.end_btn1.alpha = 1;
        textadv.alpha = 1;
        // resizerq.verticalChange();
        // resizerq.shuChange();
      }
      
    }, 200);
  }



  var sf_all = new createjs.SpriteSheet({
    framerate: 15,
    "images": [shu_f_, shu_f2_],
    "frames": {
      "regX": 0,
      "height": 520,
      "count": 30,
      "regY": 0,
      "width": 260
    },
    "animations": {
      "stop": [29],
      "start": [0, 29, "stop",0.6],
      "start1": [0, 29, "start1"],
    },
  });




  //开始前加载
  setTimeout(() => {

    // addRectBitmap_simple('bg_bottom', 'bg_bottom', sprite_, json_sprite, 0.5, 0.5, (1390-640)/2, screenBottom - 468, "addArrAll", true);

    addBitmap('bg', bg_, (1390 - 640) / 2, screenBottom - 1138, "addArr6");
    // container4_2.addChild(wb.bg);
    addSpriteSheet("sfani", sf_all, "stop", 0, 0, 1, 0.5, 0.5);
    // 491
    addRectBitmap_simple('hand', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 358, "addArrAll", true);
    addRectBitmap_simple('hand2', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 40, "addArrAll", true);
    addRectBitmap_simple('hand3', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 497, "addArrAll", true);
    addRectBitmap_simple('hand4', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 290, "addArrAll", true);
    addRectBitmap_simple('hand5', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 497, "addArrAll", true);
    addRectBitmap_simple('hand6', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 290, "addArrAll", true);
    addRectBitmap_simple('g1', 'g1', sprite_, json_sprite, 1, 1, 15, 40, "addArrAll", true);
    addRectBitmap_simple('g2', 'g2', sprite_, json_sprite, 1, 1, 15, 40, "addArrAll", true);

    addBitmap('guang', guang_, screenMiddle-640/2, screenMiddle-802/2-35, "addArr6");
    wb.guang.regX = 640 * 0.5;
    wb.guang.x = wb.guang.x + 640 * 0.5;
    wb.guang.regY = 751 * 0.5;
    wb.guang.y = wb.guang.y + 751 * 0.5;
    
    addRectBitmap_simple('you_win', 'you_win', sprite_, json_sprite, 1, 1, screenMiddle-585/2, screenTop+100, "addArrAll", true);
    // addRectBitmap_simple('card', 'card', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 276 / 2, screenMiddle-365/2-35, "addArrAll", true);
    addRectBitmap_simple('txt1', 'txt1', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 511 / 2, screenMiddle - 172 / 2 - 35 + 172 + 120, "addArrAll", true);
    addRectBitmap_simple('txt2', 'txt2', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 665 / 2, screenBottom - 120, "addArrAll", true);
    // addRectBitmap_simple('end_btn', 'end_btn', sprite_, json_sprite, 0.5, 0.5, screenMiddle-431/2, screenBottom-108-100, "addArrAll", true);

        if (language == 'Japan') {
          advword = '広告のみ';
          addRectBitmap_simple('top', 'top_r', sprite_, json_sprite, 0.5, 0.5, (1390-640)/2, screenTop, "addArrAll", true);
          addRectBitmap_simple('end_btn', 'end_btn_r', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 460 / 2, screenBottom - 108 - 60, "addArrAll", true);
          addRectBitmap_simple('end_btn1', 'end_btn_r', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 460 / 2, screenBottom - 150, "addArrAll", true);
          addRectBitmap_simple('card', 'card_r', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 276 / 2, screenMiddle - 365 / 2 - 35, "addArrAll", true);
        } else if (language == 'SK') {
          advword = '광고에만한정하다';
          addRectBitmap_simple('top', 'top_h', sprite_, json_sprite, 0.5, 0.5, (1390-640)/2, screenTop, "addArrAll", true);
          addRectBitmap_simple('end_btn', 'end_btn_h', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 460 / 2, screenBottom - 108 - 60, "addArrAll", true);
          addRectBitmap_simple('end_btn1', 'end_btn_h', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 460 / 2, screenBottom - 150, "addArrAll", true);
          addRectBitmap_simple('card', 'card_h', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 276 / 2, screenMiddle - 365 / 2 - 35, "addArrAll", true);
        }
        // addRectBitmap_simple('top', 'top', sprite_, json_sprite, 0.5, 0.5, (1390-652)/2, screenTop-3, "addArrAll", true);
        window.textadv = new createjs.Text(advword, "16px score", "#fff");
        var boundsw = textadv.getBounds().width;
        var boundsh = textadv.getBounds().height;
        // console.log(bounds)
        textadv.x = screenRight - boundsw-30;
        // if (language == 'Japan') {
        //   textadv.y = screenTop + (-3) + boundsh;
        // } else if (language == 'SK') {
        //   textadv.y = screenTop + (-3) + boundsh;
        // }

        textadv.y = screenBottom-boundsh;


        textadv.textBaseline = "alphabetic";
  }, 350);




   var textaddnumt=20;
   var txtaddnuml=0;
   var textstart = "1,439"
   if (language=='Japan') {
     textaddnumt=20;
     txtaddnuml=10;
     textstart = "1439";
   }
   window.text = new createjs.Text(textstart, "55px score", "#000");
   text.x = screenMiddle - 100 + txtaddnuml+10;
   text.y = screenTop + 135 + textaddnumt;
   text.textBaseline = "alphabetic";
 
  
  setTimeout(() => {
    addShape('bg_shape1', 0,0, 1390, 1390, 0.6, 'rect');
    
    window.savex = stage.x;
    window.savey = stage.y;
    stage.regX = stage.regY = 695;
    stage.x = 695 + stage.x;
    stage.y = 695 + stage.y;
    // stage.scaleX = stage.scaleY = 1.2;

    window.wsp = window.sprite || {};

    


     window.end_pop = new createjs.Container();
    // roadcon_box.addChild(roadcon1, roadcon3, roadcon4, roadcon2, roadcon5);
    person.addChild(wb.guang, wb.top, text, wb.txt2);
    
    wb.txt2.scaleX = wb.txt2.scaleY = 0.7;
    wb.txt2.alpha=0;
    window.arr_zero = [  end_pop, wb.hand2, wb.hand, wb.hand3, wb.hand4, wb.hand5, wb.hand6];

    // roadcon1.addChild(wb.road1,wb.waterweeds1, wb.waterweeds2, wb.waterweeds3, wb.waterweeds4, wb.waterweeds5, wb.fish_p1, wb.fish_p2, wb.fish_p3, wb.fish_p4);
    // roadcon2.addChild(wb.road2, wb.fish_m2, wb.fish_m3, wb.fish_m4, wb.hand, wb.hand3, wb.hand5);
    // roadcon3.addChild(wb.road3, wb.fish_b1, wb.fish_b2, wb.fish_b3, wb.fish_b4, wb.hand6);
    // roadcon4.addChild(wb.road4, wb.fish_y1, wb.fish_y2, wb.fish_y3, wb.fish_y4, wb.hand2, wb.hand4);
    
    // console.log(wb.hand.x,wb.hand.y)
    wb.end_btn1.scaleX = wb.end_btn1.scaleY = 0.7;
    stage.addChild(wb.end_btn1)
    // window.arr_zero2 = [wb.qipao1];

    window.alphaZero = function (arr_zero) {
      for (var i = 0; i < arr_zero.length; i++) {
        arr_zero[i].alpha = 0;
      }
    }

    alphaZero(arr_zero);

    window.scaleZero = function (arr_zero) {
      for (var i = 0; i < arr_zero.length; i++) {
        arr_zero[i].scaleX = arr_zero[i].scaleY = 0;
      }
    }

    // scaleZero(arr_zero2);
    // wb.road1.alpha = wb.road2.alpha = wb.road3.alpha = wb.road4.alpha =0.02;

    end_pop.addChild(bg_shape1, wb.guang, wb.you_win, wb.card, wb.txt1, wb.end_btn)
    person.addChild(end_pop);
    
    wb.guang.scaleX = wb.guang.scaleY = wb.card.scaleX = wb.card.scaleY =0.6;
    wb.you_win.y = wb.you_win.y - 300;
    wb.txt1.scaleX = wb.txt1.scaleY = wb.end_btn.scaleX = wb.end_btn.scaleY = 0.6;

    stage.addChild(textadv);


    // wb.open.addEventListener("mousedown", function () {
    //   if (wb.open.alpha == 0) {
    //     // gainNode.gain.value=1;
    //     audioCtx.resume();
    //     wb.open.alpha = 1;
    //     wb.close.alpha = 0;
    //     musicState = "play";
    //   } else {
    //     // gainNode.gain.value=0;
    //     audioCtx.suspend();
    //     wb.open.alpha = 0;
    //     wb.close.alpha = 1;
    //     musicState = "pause";
    //   }
    // })
    // wb.close.addEventListener("mousedown", function () {
    //   if (wb.open.alpha == 0) {
    //     // gainNode.gain.value=1;
    //     audioCtx.resume();
    //     wb.open.alpha = 1;
    //     wb.close.alpha = 0;
    //     musicState = "play";
    //   } else {
    //     // gainNode.gain.value=0;
    //     audioCtx.suspend();
    //     wb.open.alpha = 0;
    //     wb.close.alpha = 1;
    //     musicState = "pause";
    //   }
    // })

    document.addEventListener('visibilitychange', function () {

      // 用户离开了当前页面
      setTimeout(function () {
        if (document.visibilityState === 'hidden') {
          createjs.Ticker.paused = 1;
          if (musicState != null) {
            // gainNode.gain.value=0;
            audioCtx.suspend();
            // wb.open.alpha = 0;
            // wb.close.alpha = 1;
          }

        }
      }, 200)


      // 用户打开或回到页面
      setTimeout(function () {
        if (document.visibilityState === 'visible') {
          createjs.Ticker.paused = 0;
          if (musicState == "play") {
            // gainNode.gain.value=1;
            audioCtx.resume();
            // wb.open.alpha = 1;
            // wb.close.alpha = 0;
          }
        }
      }, 250)

    });

    // wb.open.alpha = 1;
    // wb.close.alpha = 0;

    // var W = window.innerWidth;
    // var H = window.innerHeight;

    // if (W >= H) {
    //   wb.open.x = wb.close.x = 531 - cx;
    //   wb.open.y = wb.close.y = 887 - cy;
    // } else {
    //   wb.open.x = wb.close.x = 778 - cx;
    //   wb.open.y = wb.close.y = 1390 / 2 - canvas.height / 2 + 510 - cy;
    // }




    window.stage.alpha = 1;

    setTimeout(() => {
      document.getElementsByTagName("body")[0].style.opacity = 1;
      var app = require("./app.js");
    }, 500);

    // var W = window.innerWidth;
    // var H = window.innerHeight;

    // if (W >= H) {
    //   window.pageState = "heng";
    //   // resizerq.horizontalChange();
    //   // resizerq.hengChange();
    // } else {
    //   window.pageState = "shu";
    //   // resizerq.verticalChange();
    //   // resizerq.shuChange();
    // }

    var W = window.innerWidth;
    var H = window.innerHeight;
    var myIdElement = document.getElementById("canvas_box");

    if (W >= H) {
      window.pageState = "heng";
      // resizerq.horizontalChange();
      // resizerq.hengChange();
      wb.txt2.alpha = 1;
      myIdElement.classList.remove("shu");
      myIdElement.classList.add('heng');
      canvas.style.transform = 'translateX(-50%) scale(' + H / W + ')';
      wb.end_btn1.alpha = 0;
      textadv.alpha = 0;
    } else {
      wb.txt2.alpha = 0;
      window.pageState = "shu";
      canvas.style.transform = 'translateX(-50%) scale(' + 1 + ')';
      myIdElement.classList.remove("heng");
      myIdElement.classList.add('shu');
      wb.end_btn1.alpha = 1;
      textadv.alpha = 1;
      // resizerq.verticalChange();
      // resizerq.shuChange();
    }


  }, 500);
  // mapDrawLine();





}
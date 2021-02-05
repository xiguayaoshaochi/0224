// import bg_ from '../images/JPNGmin/bg.jpg';

import {indexcss} from '../css/index.css'
window.wsp = window.sprite || {};
window.wb = window.bitmaps ||{};
window.stage = new createjs.Stage(window.canvas);
window.csW1 = 68; window.csH1 = 63;
window.csW2 = 66; window.csH2 = 72;
window.csW3 = 66; window.csH3 = 72;
window.boom1=window.boom2=window.boom3=window.boom4=window.boom5=window.boom6=null;
createjs.Touch.enable(window.stage);
createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stageBreakHandler);
createjs.MotionGuidePlugin.install();
window.last = false;
window.ani_state1 = 0;
window.ani_state2 = 0;
window.ani_state3 = 0;
window.ani_state4 = 0;

window.tip_a1 = null;
window.tip_a2 = null;
window.tip_a3 = null;
window.tip_a4 = null;

window.canvas = document.getElementById("canvas");
window.container0 = new createjs.Container();
window.container00 = new createjs.Container();
window.container1 = new createjs.Container();
window.container2 = new createjs.Container();
window.container3 = new createjs.Container();
window.container4_1 = new createjs.Container();
window.container4_2 = new createjs.Container();
window.container5 = new createjs.Container();
window.containerAll = new createjs.Container();
window.containerAll2 = new createjs.Container();
window.containerAll2_cs = new createjs.Container();
window.containerAll2_cs2 = new createjs.Container();
window.containerAll3 = new createjs.Container();
window.containerAll_yh = new createjs.Container();
window.person = new createjs.Container();



createjs.MotionGuidePlugin.install();
// stage.enableMouseOver(10);
window.stage.addChild(container4_2,container0, container00, person);

window.stage.alpha = 0;
containerAll2_cs.alpha = 0;
containerAll2_cs2.alpha = 0;



let verifyStatus = ()=>{
  if (stage.alpha!=0){
    return true;
  }else{
    return false;
  }
}


createjs.setTimeout = function (cb, delay) {
  var tween = createjs.Tween.get({})
    .wait(delay)
    .call(function () {
      cb && cb();
      createjs.clearTimeout(tween);
    });
  return tween;
}



// 定制一个 clearTimeout 方法
createjs.clearTimeout = function (timeout) {
  // 删除动画 
  createjs.Tween.removeTweens(timeout.target);
  // 删除实例
  timeout = undefined;
  return true;
}

// 定制一个 setInterval 方法
createjs.setInterval = function (cb, delay) {
  var tween = createjs.Tween.get({})
    .wait(delay)
    .call(function () {
      cb && cb();
    });
  tween.loop = true;
  return tween;
}
// 定制一个 clearInterval 方法
createjs.clearInterval = function (interval) {
  // 删除动画
  createjs.Tween.removeTweens(interval.target);
  // 删除实例
  interval = undefined;
  return true;
}

window.setTimeouc = createjs.setTimeout;
window.clearTimeout1 = createjs.clearTimeout;
window.setInterval1 = createjs.setInterval;
window.clearInterval1 = createjs.clearInterval;

window.Heng_pow_img_x = 745;
window.Heng_pow_img_y = 1141;
window.Heng_play_btn_x = 745;
window.Heng_play_btn_y = 1410;
window.Heng_logo_x = 745;
window.Heng_logo_y = 915;
window.Shu_pow_img_x = 745;
window.Shu_pow_img_y = 1050;
window.Shu_play_btn_x = 745;
window.Shu_play_btn_y = 1380;
window.Shu_logo_x = 745;
window.Shu_logo_y = 822;

window.yanhua_lock = true;
window.cx = 348;
window.cy = 40;
window.waitTime = 700000;
window.steps = "start";
window.bitmaps = window.bitmaps || {};
window.sprite = window.sprite || {};
window.addArr1 = window.addArr1 || [];
window.addArr2 = window.addArr2 || [];
window.addArr3 = window.addArr3 || [];
window.addArr4_1 = window.addArr4_1 || [];
window.addArr4_2 = window.addArr4_2 || [];
window.addArr5 = window.addArr5 || [];
window.addArr6 = window.addArr6 || [];
window.addArr_person = window.addArr_person || [];
window.musicState = null;
window.appleUrl = "https://apps.apple.com/us/app/id1472174540";
window.androidUrl = "https://play.google.com/store/apps/details?id=com.superwave.goldrush.android.googleplay";
window.userAgent = navigator.userAgent || navigator.vendor;


window.randomsort = (a, b)=> {
  return Math.random() > .5 ? -1 : 1;
  //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}


// 取两个数之间的随机数
window.random1 = (min, max) =>  {
  if (!max) {
    max = min;
    min = 0;
  }

  return min + Math.floor(Math.random() * (max - min + 1));
}


window.getNum = (con1, con2) =>  {
  var rand = random1(con1[0], con2[1]);

  if ((rand > con1[0] && rand < con1[1]) || (rand > con2[0] && rand < con2[1])) {
    return rand;
  }

  return getNum(con1, con2);
}


var agent = navigator.userAgent.toLowerCase();        //检测是否是ios
var iLastTouch = null;                                //缓存上一次tap的时间
if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0) {
  document.body.addEventListener('touchend', function (event) {
    var iNow = new Date().getTime();
    iLastTouch = iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */;
    var delta = iNow - iLastTouch;
    if (delta < 500 && delta > 0) {
      event.preventDefault();
      return false;
    }
    iLastTouch = iNow;
  }, false);
}



// module.exports = verifyStatus;
export default verifyStatus;
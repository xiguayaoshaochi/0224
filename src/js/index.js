import 'yuki-createjs/lib/easeljs-0.8.2.combined'
import 'yuki-createjs/lib/tweenjs-0.6.2.combined'
// import { call } from 'file-loader';
// import createjs from 'script-loader!createjs/builds/createjs-2015.11.26.min';
// import createjs from 'createjs-npm/lib/create';




window.onload=function(){
  document.getElementsByTagName("body")[0].style.opacity=0;
  require('./loadMusic.js');
  require("./creatjsPlayAds.js");
  require("./imgResource.js");
  require("./yinghua.js");
}

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}


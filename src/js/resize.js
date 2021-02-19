var vsStatus = require("./reset.js");
var changeNum = 30;
var resize = {
  resizeContent: (cs) => {
    var stageWidtha = document.documentElement.clientWidth;
    var art_size = 640;
    var stageScalea = stageWidtha / art_size;
    var W = window.innerWidth;
    var H = window.innerHeight;
    var ratio = W / H;
    var getCS = document.getElementById(cs);
    getCS.style.width = W + "px";
    getCS.style.height = H + "px";
    getCS.style.left = 0;
    getCS.style.top = 0;
    var ratio1 = 0.75;
    // if (W >= H) {
    //   stage.y = -375;
    //   canvas.height = art_size;
    //   //横屏
    //   // resize.horizontalChange();
    //   containerAll2_cs.x = 0;
    //   if (ratio > (1 / ratio1)) {
    //     //背景拉宽 元素保持左右居中
    //     canvas.width = art_size / (H / W);
    //     stage.x = -(1390 - canvas.width) / 2;
    //     // $(cs).height(H);
    //     containerAll2_cs.x = -60;
    //     getCS.style.height = H + "px";
    //   } else if (ratio <= (1 / ratio1)) {
    //     // $(cs).width(W);
    //     containerAll2_cs.x = -60;
    //     getCS.style.width = W + "px";
    //     canvas.width = art_size / ratio1;
    //     stage.x = -(1390 - canvas.width) / 2;
    //     getCS.style.height = W * ratio1 + "px";
    //     // $(cs).height(W*ratio1);
    //     getCS.style.top = (H / 2 - W * ratio1 / 2) + 'px';
    //     // $(cs).css("top",(H/2-W*ratio1/2)+'px');
    //   }
    // } else if (W < H) {
    //   stage.x = -375;
    //   stage.y = 0;
    //   canvas.width = art_size;
    //   canvas.height = H / stageScalea;
    //   //竖屏
    //   // resize.verticalChange();
    //   if (window.innerHeight > 1000) {
    //     containerAll2_cs.y = 50;
    //   } else {
    //     containerAll2_cs.y = 90;
    //   }
    //   containerAll2_cs.x = 0;
    //   if (ratio > ratio1) {
    //     //整体缩小  背景不动
    //     canvas.height = art_size / ratio1;
    //     stage.y = -(1390 - canvas.height) / 2;
    //     getCS.style.height = H + "px";
    //     getCS.style.width = H / (1 / ratio1) + "px";
    //     var newW = H / (1 / ratio1);
    //     getCS.style.left = (W / 2 - newW / 2) + 'px';
    //   } else if (ratio <= ratio1) {
    //     //背景拉长 元素保持上下居中
    //     stage.y = -(1390 - canvas.height) / 2;
    //     if (H >= 1390 * stageScalea) {
    //       //超出高度 一般不会出现这种分辨率
    //       stage.y = 0;
    //       getCS.style.height = 1390 * stageScalea + "px";
    //       canvas.height = 1390;
    //       getCS.style.top = (H - 1390 * stageScalea) / 2 + 'px';
    //     } else {

    //     }
    //   }
    // }
    stage.x = -375;
    stage.y = 0;
    canvas.width = art_size;
    canvas.height = H / stageScalea;



    containerAll2_cs.x = 0;
    if (ratio > ratio1) {
      //整体缩小  背景不动
      canvas.height = art_size / ratio1;
      stage.y = -(1390 - canvas.height) / 2;
      if (W >= H) {
        stage.y = -(1390 - 640 / (H / W)) / 2;
      }
      getCS.style.height = H + "px";
      getCS.style.width = H / (1 / ratio1) + "px";
      var newW = H / (1 / ratio1);
      getCS.style.left = (W / 2 - newW / 2) + 'px';
    } else if (ratio <= ratio1) {
      //背景拉长 元素保持上下居中
      stage.y = -(1390 - canvas.height) / 2;
      if (W >= H) {
        stage.y = -(1390 - 640 / (H / W)) / 2;
      }
      if (H >= 1390 * stageScalea) {
        //超出高度 一般不会出现这种分辨率
        stage.y = 0;
        getCS.style.height = 1390 * stageScalea + "px";
        canvas.height = 1390;
        getCS.style.top = (H - 1390 * stageScalea) / 2 + 'px';
      } else {

      }
    }

    if (W >= H) {
      canvas.height = 640 / (H / W);
      getCS.style.height = W + "px";
      getCS.style.width = H + "px";
      // canvas.height = W / stageScalea;
    }

    window.screenTop = (1390 - canvas.height) / 2;
    window.screenMiddle = 1390 / 2;
    window.screenBottom = (1390 + canvas.height) / 2;
    window.screenLeft = (1390 - canvas.width) / 2;
    window.screenRight = (1390 + canvas.width) / 2;
    console.log(screenBottom + "screenBottom")
  }
}


module.exports = resize;

/*
 * 预加载图片，获得图片信息，目前支持图片宽、高
 * @author fordlee404@gmail.com
 * @create 2012/09/25
 * @modify 2012/09/26
 */

var imgPreloading;

imgPreloading = function(srcStr, callback){
    var img = new Image();

    img.onload = function(){
        //console.log('onload');
        //console.log(img.complete);
        callback(img.width, img.height);
        return img.onload = null;
    };
    //console.log(img.complete);
    img.src = srcStr;
    //console.log(img.complete);
    if(img.complete){
        return callback(img.width, img.height);
    }
};

// 更新：
// 2012/09/25：1.code常用图片预加载方法
// 2012/09/26: 1.修复IE6，IE8下图片随机可能不加载bug

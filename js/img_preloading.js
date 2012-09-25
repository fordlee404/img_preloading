/*
 * 预加载图片，获得图片信息，如宽、高
 * @author fordlee404@gmail.com
 * @create 2012/09/25
 * @modify 2012/09/25
 */

var imgPreloading;

imgPreloading = function(srcStr, callback){
    var img = new Image();

    img.src = srcStr;
    if(img.complete){
        return callback(img.width, img.height);
    }else{
        img.onload = function(){
            callback(img.width, img.height);
            return img.onload = null;
        };
        // IE6,IE8需要手动触发img的onload()
        if($.browser.msie){
            if($.browser.version==='6.0'||$.browser.version==='8.0'){
                img.onload();
            }
        }
    }
};

// 更新：
// 2012/09/25：1.code常用图片预加载方法

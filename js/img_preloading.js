/*
 * 预加载图片，获得图片信息，目前支持图片宽、高
 * @author fordlee404@gmail.com
 * @create 2012/09/25
 * @modify 2012/09/26
 * @example imgPreloading('../images/demo1.jpg', function(img){// Do Something;}, function(){// Do Something;});
 */

var imgPreloading;

/*
 * @param srcStr {string} 图片路径
 * @param callback {function} 获得图片信息成功后的回调函数
 * @param [errorCallback] {function} 可选,获得图片信息失败后的回调函数
 * @return {object} 返回值为Image对象
 */
imgPreloading = function(srcStr, callback, errorCallback){
    var img = new Image(),
        _intervalTimer,
        _stopTimer,
        _ready,
        width,
        height,
        currentWidth,
        currentHeight;

    img.onerror = errorCallback || null;
    img.src = srcStr;
    width = img.width;
    height = img.height;
    
    if(img.complete||img.readyState==='complete'){ // if cache
        img.onload = img.onerror = null;
        return callback(img);
    }else{
        // image onload event
        img.onload = function(){
            _stopTimer();
            img.onload = img.onerror = null;
            return callback(img);
        };
        // stop interval
        _stopTimer = function(){
            clearInterval(_intervalTimer);
        };
        // width and height ready event
        _ready = function(){
            currentWidth = img.width;
            currentHeight = img.height;
            if(currentWidth !== width || currentHeight !== height){
                img.onload();
            }
        };

        _intervalTimer = setInterval(_ready, 10);
    }
};

// 更新：
// 2012/09/25：1.code常用图片预加载方法
// 2012/09/26: 1.修复IE6，IE8下图片随机可能不加载bug;
//             2.优化代码顺序;
//             3.添加onerror callback();
//             4.在浏览器获得img的宽、高后即可返回,不用等到请求结束再得到宽、高;
//             5.修改返回值为对象，不再单独返回宽、高;

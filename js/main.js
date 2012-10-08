seajs.config({
    alias: {
        'jquery': 'http://modules.seajs.org/jquery/1.7.2/jquery.js',
        'img_preloading': './img_preloading.js'
    },
    preload: 'jquery'
});

// 将jQuery暴露到全局
seajs.modify('jquery', function(require, exports){
    window.jQuery = window.$ = exports;
});
// 将img_preloading暴露到全局
seajs.modify('img_preloading', function(require, exports){
    window.imgPreloading = exports;
});

seajs.use('./js/demo');

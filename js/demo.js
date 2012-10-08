define(function(require, exports, module){
    var $imgRadio = $('input[name="img"]'),
        img = document.getElementById('img_show_tag'),
        imgPreloading = require('img_preloading'),
        _val, _src;

    $imgRadio.bind('click', function(){
        img.src = '';
        _val = this.value;

        imgPreloading(_val, function(_img){
            img.width = _img.width;
            img.height = _img.height;
            _src = _val;
            setTimeout(function(){
                img.src = _src;
            }, 1000);
        });
    });
});

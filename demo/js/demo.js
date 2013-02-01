$(function(){
    var $imgRadio = $('input[name="img"]');

    $imgRadio.bind('click', function(){
        var img = document.getElementById('img_show_tag'),
            _src;

        img.src = '';
        _src = this.value;

        imgPreloading(_src, function(_img){
            img.width = _img.width;
            img.height = _img.height;
            setTimeout(function(){
                img.src = _src;
            }, 1000);
        });
    });
});

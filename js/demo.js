$(function(){
    var $imgRadio = $('input[name="img"]'),
        img = document.getElementById('img_show_tag'),
        _val, _src;

    $imgRadio.bind('click', function(){
        img.src = '';
        _val = this.value;

        imgPreloading(_val, function(_img){
            img.width = _img.width;
            img.height = _img.height;
            _src = _val;
            //_src = [_val, '?', 'rnd=', (new Date).getTime()].join('');
            img.src = _src;
        });
    });
});

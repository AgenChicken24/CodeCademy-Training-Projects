$(function(){
    var imagescr = [
        "Stock/256x256.png",
        "Stock/logo.jpeg",
        "Stock/logo2.png",
        "Stock/police.png",
    ];
    $storage = $('.storage')
    $viewer = $('.viewer')
    $index = 0
    for(var i = 0; i <imagescr.length;i++){
        $storage.append('<div class= ' + "image" + i +"></div>")
        $('.image' + i).append('<img src = ' + imagescr[i] +'></img>')
        $viewer.append("<img class='myslides' src=" + imagescr[i] + "></img>")
    }
    $('.viewer .myslides:eq(0)').css('display', 'block');
    $('.storage img:eq(0)').addClass('active');

    $myslides = $('.myslides');
    $stimg = $('.storage img');

    $(document).on('keydown', () => {
        $myslides.css('display', 'none');
        $stimg.removeClass('active')
        $index = show($index);
        if ($index > imagescr.length - 1) {
            $index = 0;
        }else if($index < 0) {
            $index = imagescr.length - 1;
        }
        $('.myslides:eq(' + $index + ')').css('display', 'block')
        $('.storage img:eq('+$index+')').addClass('active');
    })

    function show($index) { 
        if(event.keyCode == 39) {
            $index++;
        }
        if(event.keyCode == 37) {
            $index--;
        }
        return $index
    }
})
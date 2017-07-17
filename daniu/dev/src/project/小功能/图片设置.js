// 创建对象 这里面是为了防止图片很大变形
        var img = new Image();
        // 改变图片的src
        img.src = result.song.coverPic;
        img.onload = function() {
            $('#audio-box').html(template('templateAudio', result))
            if ((img.height > img.width) || img.height > 500) {
                $('.audio').css("background-size", "contain")
                $('.audio').css('background-repeat', 'no-repeat')
            } else {
                $('.audio').css('background-size', 'cover')
                $('.audio').css('background-repeat', 'no-repeat')
            }
        }

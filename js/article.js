//悬浮目录
$(document).ready(function () {
    top();
    $('#floatting_dir').css('left', '0px');
    $("#floatting_dir").css('display', 'block');

    function top() {
        if ($('.container').width() <= 720) {
            $("#floatting_dir").css('top', '0px');
        } else {

            $("#floatting_dir").css('top', window.innerHeight / 9 + 'px');
        }
    }

    function ishide() {

        if ($('.container').width() <= 720) {
            $("#floatting_dir").css('top', '0px');
            // $("#dir_btn_close").hide()
            // $('#floatting_dir #index').hide();
            // $('#floatting_dir header').css("border-bottom","");
        } else {
            $("#floatting_dir").css('display', 'block');
        }
    }

    $(window).scroll(function () {
        ishide();
        if (($(window).scrollTop() != 0) && ($('#floatting_dir').css('display') == 'block')) {
            top();
        }
    });

    window.onresize = function () {
        ishide();
    }

    $("#dir_btn_open").click(function () {
        switch ($('#floatting_dir #index').css('display')) {
            case "none":
                $("#dir_btn_close").show()
                $('#floatting_dir #index').show();
                $('#floatting_dir header').css("border-bottom", "1px solid gray");
                break;
            default:
                break;
        }
    });

    $("#dir_btn_close").click(function () {
        switch ($('#floatting_dir #index').css('display')) {
            case "block":
                $("#dir_btn_close").hide()
                $('#floatting_dir #index').hide();
                $('#floatting_dir header').css("border-bottom", "");
                break;
            default:
                break;
        }
    });
});

//图片放大
$("img").click(function () {
    layer.photos({
        photos: this.parentNode,
        shift: -1,
        tab: function (pic, layero) {
            imgs = $(".layui-layer-shade")
            for (i = 1; i < imgs.length; i++) {
                $(".layui-layer.layui-layer-page.layui-layer-photos")[0].remove()
                $(".layui-layer-shade")[0].remove()

            }
        }
    });
});


/**
 * Created by yitao on 2017/7/11.
 */

import './style.scss'

class searchComponent {
    constructor() {

    }

    init(options) {
        this.insertTemplate(options);
        this.bindEvent(options);
    }
    insertTemplate(options) {
        $('body').append($(require('./template.html'))) //引用搜索模板
        $('#searchWrap').html(template('searchTemplate'))

    }
    bindEvent(options) {
        let me = this
        //输入框事件
        document.querySelector('.search-input').onclick = function(e) {
            $('.search-right').removeClass('search-hide ')

            $('.search-left').css('width', '90%');
            $('.search-left .form-input').css('width', '11rem');
            options.inputEventCallback(e.target); //输入框事件回调
        }

        //取消搜索事件
        document.querySelector('.search-right').onclick = function(e) {
            $(this).addClass('search-hide ')

            $('.search-left').css('width', '100%');
            $('.search-left .form-input').css('width', '12rem');
            $('.search-input').val('')
            $(".form-close").addClass("search-hide");
            options.cancelEventCallback(e.target);
        }
        //点击x按钮显示和隐藏模板
        document.querySelector('.form-close').onclick = function(e) {
            $('.search-input').val('')
            $('.form-close').addClass('search-hide')
        }
        //监听输入框事件
        $(".search-input").get(0).addEventListener("input", function(e) {
            var input_value = $(".search-input").val();

            if (input_value.length > 0) {
                $(".form-close").removeClass("search-hide");
            } else {
                $(".form-close").addClass("search-hide");
            }
        })

    }

}

export default new searchComponent()

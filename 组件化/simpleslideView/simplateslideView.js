/**
 * Created by yitao on 2017/7/13.
 */

import './style.scss'

class simplateslideView {
    constructor() {
        console.info("ggg")
    }
    init(options) {
        console.info(options)
    }

    showSlideView(options) {
        console.info(options)
        let orginHash = window.location.hash
        if (window.location.hash[0] !== '#') {
            window.location.hash += 'slideView=praise'
        } else {
            window.location.hash += '&slideView=praise'
        }
        $('.praise-wrapper').show()
        $('.praise-box').removeClass('fadeOutDown').addClass('fadeInUp')
        $('.praise-mask').animate({
            opacity: 1,
        }, {
            duration: 200
        })
    }
    backToMainView(options) {

    }


}

export default new simplateslideView()

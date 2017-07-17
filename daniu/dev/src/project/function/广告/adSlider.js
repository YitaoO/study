//轮换
$('.slider').swipeSlide({
        // 轮播初始值
        index: 0,
        // 连续滚动
        continuousScroll: true,
        // 自动切换
        autoSwipe: true,
        // 切换速度
        speed: 2500,
        // 图片懒加载
        transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
        // 图片懒加载
        lazyLoad: true,
        // 回调方法
        callback: function(index) {
            $("#advertsBoxTop" + ' .indicators').find('.indicator')
                .removeClass('sel')
                .eq(index).addClass('sel')
        }
    })

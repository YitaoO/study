/* ============================================================
    js
============================================================ */
$('body').css("min-height",$(window).height())
dialog.showLoading = function () {
    if (orginBodyClassName === 'orgin') {
        orginBodyClassName = document.body.className
    }

    document.body.className = 'body-loading'

    var loading = document.createElement('div')
    loading.className = 'loader'
    document.body.appendChild(loading)
}

dialog.hideLoading = function () {
    document.body.className = orginBodyClassName
    $('body').removeClass('body-loading')
    $('.loader').remove()
}

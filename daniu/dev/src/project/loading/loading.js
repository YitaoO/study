
/* ============================================================
    html
============================================================ */
<body class="body-loading">
    <div class="loader"></div>
</body>
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

/* ============================================================
    css
============================================================ */
.loader {
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    width: 187px;
    height: 190px;
    margin-top: -95px;
    margin-left: -93px;
    background-image: url("assets/images/loading.gif") !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
}

.body-loading {
    background-color: #36133b;
}

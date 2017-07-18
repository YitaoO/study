//接口请求完处理数据
function baseCustonAjaxThen() {
    return $.Deferred(deferred => {
        customAjax.get(`${config.interfaceUrls[0]}/law/`, {
            parentCode: 'LAW'
        }).then(categoryData => {
            deferred.resolve(categoryData.list)
        })
    })
}
baseCustonAjaxThen().then(list => {})

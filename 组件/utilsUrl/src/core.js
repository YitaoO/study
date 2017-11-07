/**
 * 插件主要入口
 */
let initialize = true //初始化进入
const cache = {} //生成的对象

class utilsUrl {
    //获取url参数的值
    prepare() {
        let strParams = ``
        let url = decodeURIComponent(decodeURIComponent(window.location.href))
        let search = decodeURIComponent(decodeURIComponent(window.location.search)) //存在问号
        let hash = window.location.hash

        if (url.lastIndexOf('?') > -1) { //存在问号
            strParams = search.split('?')[1]
        }
        if (url.lastIndexOf('#') > -1) { //存在hash
            strParams += `&` + hash.split('#')[1]
        }
        if (!!strParams) {
            let arrParams = strParams.split('&')
            for (let [i, item] of arrParams.entries()) { //es6新的遍历数组方法

                let key = item.substring(0, item.indexOf('='))
                let value = item.substring(item.indexOf('=') + 1)
                cache[key] = value

            }

        }
        initialize = false
    }
    //初始化进入
    query(option) {
        if (!!initialize) {
            this.prepare()
        }

        return cache[option]
    }

}

export default new utilsUrl()
module.exports = {
    // 应用名称，开发和发布时的文件夹名，根据命令参数获取
    app: 'project',
    // 发布时的组件路径
    components: 'components',
    // 环境配置
    env: {
        // 环境配置的发布路径
        release: '[release]/[app]/[components]'
    },
    // bower配置
    bower: {
        // bower_components组件发布路径
        release: '[release]/[app]/[components]'
    },

    // 路径配置
    roadmap: {
        path: [
            {
                // 需要编译的js入口
                reg: '[src]/[app]/*.js',
                // 是否有对应的html
                hasHtml: true,
                // 模块化的js文件(标记为这种值的文件，会进行umd的封装)
                isMod: true,
                // 是否提取css
                extractCss: true,
                // 对应的html路径，[filaname]约定页面文件名和js文件名相同
                html: '[src]/[app]/[filename].html',
                // 编译后产出到的目录
                release: '[release]/[app]',
                // 图片转化为base64的大小限制，默认为10k
                base64Limit: 10240
            }
        ]
    },

    // 脚手架模板文件路径
    scaffold: 'scaffold-template',

    // 无需添加min的js文件
    noMin: ['jweixin'],

    // 打包组配置
    bundle: {
        'head': [
            'rem'
        ],
        'components-base0': [
            'xss',
            'utilsUrl',
            'dateformat',
            'template',
            'ls',
            'waves'
        ],
        'components-base1': [
            'dialog',
            'iscroll-probe',
            'iscroll-pull',
            'paginator'
        ],
        'components-app': [
            'user',
            'custom-ajax',
            'weixin',
            'baiduStatistics'
        ]
    }
}

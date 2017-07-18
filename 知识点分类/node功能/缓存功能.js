/* ============================================================
    此JS用于的一些概念和代码解释（*代表重要的程度）
=========================================================== */
const gulp = require('gulp')
const requestSync = require('sync-request')
const path = require('path')
const fs = require('fs')

function injectTestTools() {
    if (gulp.GLOBALS.injectTestTools) {
        return gulp.GLOBALS.injectTestTools
    }

    const filePath = path.join(__dirname, '../../temp/scritpData.json')


    function remoteAndSave() {
        const res = requestSync('GET', `http://gitlab.ewaytec.cn/frontend-components-team/test-tools/raw/master/dist/testTools.js?private_token=${gulp.GLOBALS.gitlab_private_token}`, {
            'headers': {
                'user-agent': 'example-user-agent'
            }
        })

        gulp.GLOBALS.injectTestTools = res.body.toString()

        const getscriptData = {
            'updateTime': Date.parse(new Date(res.headers.date)),
            'scritpData': res.body.toString()
        }

        fs.writeFile(filePath, JSON.stringify(getscriptData), function(err) {
            if (err) {
                console.log(`写入${filePath}失败`)
           }
        })

        return gulp.GLOBALS.injectTestTools
    }

    if (!fs.existsSync(filePath)) {
       fs.mkdirSync(path.join(__dirname, '../../temp'));

        //没缓存
        return remoteAndSave()
    } else {
        //有缓存
        const bytesRead = fs.readFileSync(filePath)
        const day = Math.floor((Date.now() - JSON.parse(bytesRead).updateTime) / 86400000)

        if (day > 6) {
            return remoteAndSave()
        } else {
            gulp.GLOBALS.injectTestTools = JSON.parse(bytesRead).scritpData

            return gulp.GLOBALS.injectTestTools
        }
    }
}

function htmlInject() {
    return injectTestTools()
}

exports = module.exports = htmlInject

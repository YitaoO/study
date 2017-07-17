/* ============================================================
    此JS用于总结解决同步请求的需求的一些概念和代码解释（*代表重要的程度）
=========================================================== */
//1:npm地址：https://www.npmjs.com/package/sync-request
//2：用法:
let res = requestSync('GET', 'http://gitlab.ewaytec.cn/frontend-components-team/test-tools/raw/master/dist/testTools.js?private_token=a2GAzGssp7Z4b5sS1pUv', {
                      'headers': {
                        'user-agent': 'example-user-agent'
                      }
                    });
console.info(res.body.toString())

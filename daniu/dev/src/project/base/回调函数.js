
/**
 * 这个js用于回调函数的用法
 */

questionCount(function(num) {})

/**
* 查询已答题目数
*/
function questionCount(callback) {
let count = 0
for (var i = 0, len = data.questionResult.list.length; i < len; i++) {
    let question = data.questionResult.list[i]
    console.info(question)

    if (!!question.answer && question.answer !== '') {
        count++
    }

}
data.answerCount = count

callback(count) //回调函数，这个方法很有用
}

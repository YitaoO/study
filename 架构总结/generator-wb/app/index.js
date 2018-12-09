const Generator = require('yeoman-generator')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

const projects = require('./prompt-project')
const projectTypes = require('./prompt-projectType')

const componentTypes = require('./prompt-componentType')

const pageType = require('./prompt-pageType')
const pageVueType = require('./prompt-pageVueType')
const pageVueCommonType = require('./prompt-pageVueCommon')
const pageVueFeature = require('./prompt-pageVueFeature')

//定义变量
const choiceType = '' //初始化类型选择
const projectType = '' //项目类型选择
const componentType = '' //组件类型选择

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }
  //咨询用户,根据不同答案生成不同脚手架
  prompting() {
    var me = this

    // 英文名
    let ENName = {
      type: 'input',
      name: 'ENName',
      message: '请输入英文名：',
      validate: function(input) {
        if (!input) {
          me.log(chalk.red.bold('不能为空'))
          return
        }

        return true
      }
    }
    // 中文名
    let ZHName = {
      type: 'input',
      name: 'ZHName',
      message: '请输入中文名：',
      validate: function(input) {
        if (!input) {
          me.log(chalk.red.bold('不能为空'))
          return
        }

        return true
      }
    }
    // 作者
    let AuthorName = {
      type: 'input',
      name: 'AuthorName',
      message: '请输入作者：',
      validate: function(input) {
        if (!input) {
          me.log(chalk.red.bold('不能为空'))
          return
        }

        return true
      }
    }
    // 中文路径
    let pagePathName = {
      type: 'input',
      name: 'pagePathName',
      message: '请输入页面的父节点：',
      validate: function(input) {
        if (!input) {
          me.log(chalk.red.bold('不能为空'))
          return
        }

        return true
      }
    }
    // 构建完成,进入根目录
    let goPath = {
      type: 'input',
      name: 'pageName',
      message: '构建完成,是否进入项目目录?(y/n)',
      validate: function(answer) {
        if (answer == 'n') {
          return
        }

        return true
      }
    }

    let p = this.prompt([projects]).then(function(answers) {
      // 类型
      this.choiceType = answers.choiceType

      switch (this.choiceType) {
        // 项目类型
        case 'project':
          p = this.prompt([projectTypes]).then(function(answers) {
            this.projectType = answers.projectType

            p = this.prompt([ENName, ZHName, AuthorName]).then(function(answers) {
              this.ENName = answers.ENName
              this.ZHName = answers.ZHName
              this.AuthorName = answers.AuthorName
            }.bind(this))
            return p
          }.bind(this))
          return p
          break;

          // 组件
        case 'component':
          p = this.prompt([componentTypes]).then(function(answers) {
            this.componentType = answers.componentType

            p = this.prompt([ENName, ZHName, AuthorName]).then(function(answers) {
              this.ENName = answers.ENName
              this.ZHName = answers.ZHName
              this.AuthorName = answers.AuthorName
            }.bind(this))
            return p
          }.bind(this))
          return p
          break;
          // 页面类型
        case 'page':
          p = this.prompt([pageType]).then(function(answers) {
            this.pageType = answers.pageType

            p = this.prompt([pageVueType]).then(function(answers) {
              this.pageVueType = answers.pageVueType
              if (this.pageVueType == 'feature') { //功能模块
                p = this.prompt([pageVueFeature]).then(function(answers) {
                  this.pageVueFeature = answers.pageVueFeature
                }.bind(this))
                return p
              } else { //通用
                p = this.prompt([pageVueCommonType]).then(function(answers) {
                  this.pageVueCommonType = answers.pageVueCommonType
                  console.log(this.pageVueCommonType);
                  if (this.pageVueCommonType == 'base') {
                    p = this.prompt([ENName, pagePathName]).then(function(answers) {
                      this.ENName = answers.ENName
                      this.pagePathName = answers.pagePathName

                    }.bind(this))
                    return p
                  } else {
                    p = this.prompt([pagePathName]).then(function(answers) {
                      this.pagePathName = answers.pagePathName

                    }.bind(this))
                    return p
                  }

                }.bind(this))
                return p

              }


            }.bind(this))
            return p

          }.bind(this))
          return p
          break;

      }

    }.bind(this))

    return p
  }
  // copy文件到指定目录，生成脚手架
  writing() {
    let me = this

    switch (me.choiceType) {
      case 'project': //项目
        if (this.projectType == 'wechat') { //小程序
          copy([{
            from: 'project/wechat',
            to: ``
          }])
        } else if (this.projectType == 'vue') { //vue
          let target = [
            ['project/vue', `${me.ENName}`],
            // ['project/vue/static', `${me.ENName}/static`]
          ]
          //增加隐藏文件
          target = target.concat([
            ['project/vue/.babelrc', `${me.ENName}/.babelrc`],
            ['project/vue/.editorconfig', `${me.ENName}/.editorconfig`],
            ['project/vue/.eslintignore', `${me.ENName}/.eslintignore`],
            ['project/vue/.eslintrc.js', `${me.ENName}/.eslintrc.js`],
            ['project/vue/.postcssrc.js', `${me.ENName}/.postcssrc.js`]
          ])
          copy(target)
        }

        break;
      case 'component': //组件
        if (me.componentType == 'common') {
          copy([{
            ENName: me.ENName,
            ZHName: me.ZHName,
            AuthorName: me.AuthorName,
            from: 'component/common',
            to: `${me.ENName}`
          }])
        } else if (me.componentType == 'vue') {
          console.log("eee");
          // copy([{
          //   ENName: me.ENName,
          //   ZHName: me.ZHName,
          //   AuthorName: me.AuthorName,
          //   from: 'component/vue',
          //   to: `${me.ENName}`
          // }])
        }

        break;
      case 'page': //页面
        if (me.pageType == "vue") {
          if (me.pageVueType == "common") {
            if (this.pageVueCommonType == 'base') {
              me.fs.copyTpl(
                me.templatePath('page/vue/base.vue'),
                me.destinationPath(`src/views/${me.pagePathName}.vue`), {
                  ENName: me.ENName,
                  pagePathName: me.pagePathName
                }
              )
            } else {
              me.fs.copyTpl(
                me.templatePath(`page/vue/${me.pageVueCommonType}.vue`),
                me.destinationPath(`src/views/${me.pagePathName}/${me.pageVueCommonType}.vue`)
              )
            }

          } else if (me.pageVueType == "feature") {
            me.fs.copyTpl(
              me.templatePath(`page/vue/${me.pageVueFeature}`),
              me.destinationPath(`src/views/${me.pageVueFeature}`)
            )
          }
        } else if (me.pageType == "wechat") {

        }


        break;
      default:

    }

    function copy(list) {
      for (var i = 0; i < list.length; i++) {
        var item = list[i]

        me.fs.copyTpl(
          me.templatePath(item[0]),
          me.destinationPath(item[1]), {
            ENName: me.ENName,
            ZHName: me.ZHName,
            AuthorName: me.AuthorName
          }
        )
      }
    }

  }

  install() {
    // TODO: 无法在根目录下找到package.json，暂时不实现
    // if (this.choiceType === 'project') {
    //   this.npmInstall()
    // } else if (this.choiceType === 'component') {
    //   this.npmInstall()
    // }
  }
  end() {
    let me = this
    me.log(chalk.red.bold('构建完成,请进入项目安装依赖'))

  }
}
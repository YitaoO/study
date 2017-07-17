//设置分页请求
	if (paginatorInstance) {
		paginatorInstance.set(options)
		paginatorInstance.load()
		return true
	} else {
		paginatorInstance =new paginator(options)
		paginatorInstance.load()
		return false
	}

lsKey.details = generateLSKey(pageName, 'details')
lsKey.lastUpdateTime = generateLSKey(pageName, 'lastUpdateTime')
lsKey.hasData = generateLSKey(pageName, 'hasData')
let options={  //page分页
  customAjax: customAjax,
  pattern: 'server',
  url:interfaceUrls.shareScoreRank,  // 数据url
  data: {
      pageIndex: 1,
      pageSize: 20
  },
  server:{
      // 响应报文：列表数据
      key: 'list',
      // 响应报文：总数
      total: 'totalCount'
  },
  first: function(end) {
      if (!end) {
          dialog.showLoading()
      } else {
          dialog.hideLoading()
      }
  },
  ls: {
        id: 'id', // 列表id
        where: '', // 筛选条件
        orders: '', // 排序字段
        sorts: 'DESC', // 排序方向 DESC ASC
        list: lsKey.details,
        lastUpdateTime: lsKey.lastUpdateTime,
        hasData: lsKey.hasData
    },
  render: render, // 渲染页面前处理每条数据
  renderEnd: renderEnd // 渲染页面后处理
}


lsKey.list = generateLSKey(pagename, 'list')
lsKey.hasDat = generateLSKey(pagename, 'hasData')
lsKey.lastUpdateTime = generateLSKey(pagename, 'lastUpdateTime')
option = { //list缓存
  customAjax: customAjax, //必传
  pattern: 'list',
  url: config.interfaceUrls[0] + '/register/list', // 数据url
  data: {
  },
  stamp: 'updateDate',
  page: {
      getSize: 20, // 获取接口数量
      size: 20, // 每页显示数量
      index: 1, // 当前页码
      count: 0, // 总页数
      maxstamp: 0, // 本地存储的最大时间戳
      minstamp: 0, // 本地存储的最小时间戳
      lastsize: 0 // 上页显示数量。用于上页不满一页时，补足一页
  },
  first: function(end) {
      if (!end) {
          dialog.showLoading()
      } else {
          dialog.hideLoading()
      }
  },
  ls: {
      id: '', // 列表id
      where: 'delFlag==false&status!=null', // 筛选条件
      orders: 'updateDate', // 排序字段
      sorts: 'DESC', // 排序方向 DESC ASC
      list: lsKey.list1,
      lastUpdateTime: lsKey.lastUpdateTime,
      hasData: lsKey.hasData1
  },
  enablePullDown: true,
  template: 'template_fans', // 模板名称,
	element: {
            wrapper: '.wrapper-search', // 包裹框。iScroll5绑定在此元素上
            content: '.content-search2', // 内容展示框
            reload: '.icon-reload' // 重新加载元素
        },
  strHtml: {
      noContent: empty
  },
  render: render, // 渲染页面前处理每条数据
  renderEnd: renderEnd // 渲染页面后处理
}

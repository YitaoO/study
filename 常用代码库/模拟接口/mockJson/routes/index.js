var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/law/integral', function(req, res, next) {
    res.json({
      list:[{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      },{
        "id": 1,
        "userName": "黄涛涛",
        "groupName": "广州供电局",
        "headImage": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
        "integral":23456
      }]
    })
});

router.get('/homeAd', function(req, res, next) {
    res.json({
        isSign:true,
        signDay:3,
        errcode: 0,
        list: [{
            "full": {
                "title": "全屏广告",
                "adPic": "",
                // "adPic":"http://nw.esyun.cn/plugins/ftpweb//music/music/backend/2017/03/music/matchevent/83A7B12C768F4E6E9A6A001A1489950E.png",
                "linkUrl": "http://12"
            },
            "home": [{
                    "title": "首页广告1",
                    "adPic": "http://nw.esyun.cn/plugins/ftpweb//music/music/backend/2017/03/music/matchevent/5035D2E32FA74E99953D848DC27D9B75.png",
                    "linkUrl": "www.baidu.com"
                },
                {
                    "title": "首页广告2",
                    "adPic": "http://nw.esyun.cn/plugins/ftpweb//music/music/backend/2016/11/music/matchevent/FC68E607A4574E5E84969D670B1FD885.jpg",
                    "linkUrl": "www.baidu.com"
                }, {
                    "title": "首页广告2",
                    "adPic": "http://nw.esyun.cn/plugins/ftpweb//music/music/backend/2016/08/music/matchevent/23C572C9B8984C30B3C77BA51280E45B.JPG",
                    "linkUrl": "www.baidu.com"
                }
            ],
        }]
    })
});
router.get('/homeNewTopContent', function(req, res, next) {
    res.json({
      "succeed": true,
      "code": 0,
      "msg": "",
      "list": [
        {
    		"id": 15027,
    		"title": "一条可以分享的新闻啊啊",
    		"subTitle": "的的",
    		"coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
    		"clickCount":999
    	 },
       {
    		"id": 15027,
    		"title": "一条可以分享的新闻啊啊",
    		"subTitle": "的的",
    		"coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
    		"clickCount":999
	    },{
      "id": 15,
      "title": "一条可以分享的新闻啊啊",
      "subTitle": "的的",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
      "clickCount":999
    },{
      "id": 34,
      "title": "一条可以分享的新闻啊啊",
      "subTitle": "的的",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
      "clickCount":999
    },{
      "id": 23,
      "title": "一条可以分享的新闻啊啊",
      "subTitle": "的的",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FABD9F38FC1B4E40841B533A2E7D067D.jpg",
      "clickCount":999
    }],
      "hasNextPage": false
    })
});
router.get('/homeNewClassContent', function(req, res, next) {
    res.json({
      "succeed": true,
      "code": 0,
      "msg": "",
      "list": [
        {
    		"id": 15027,
    		"title": "一条可以分享的新闻啊啊",
    		"subTitle": "的的",
    		"coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/0203CAECA2B84713ABB1137AF5C54664.jpg",
    		"clickCount":999
    	 },
       {
    		"id": 15027,
    		"title": "一条可以分享的新闻啊啊",
    		"subTitle": "的的",
    		"coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/0203CAECA2B84713ABB1137AF5C54664.jpg",
    		"clickCount":999
	    },{
      "id": 15,
      "title": "一条可以分享的新闻啊啊",
      "subTitle": "的的",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/0203CAECA2B84713ABB1137AF5C54664.jpg",
      "clickCount":999
    },{
      "id": 34,
      "title": "一条可以分享的新闻啊啊",
      "subTitle": "的的",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/0203CAECA2B84713ABB1137AF5C54664.jpg",
      "clickCount":999
    },{
      "id": 23,
      "title": "一条可以分享的新闻啊啊",
      "subTitle": "的的",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/0203CAECA2B84713ABB1137AF5C54664.jpg",
      "clickCount":999
    },
    {
      "id": 23,
      "title": "一条可以分享的新闻啊啊",
      "subTitle": "的的",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/0203CAECA2B84713ABB1137AF5C54664.jpg",
      "clickCount":999
    }],
      "hasNextPage": false
    })
});

router.post('/homeSign', function(req, res, next) {
    res.json({
        errcode: 0,
        errmsg: 'ok'
    })
});
router.post('/collection', function(req, res, next) {
    res.json({
        errcode: 0,
        errmsg: 'ok'
    })
});


router.get('./cms/content/getTopContent',function(req,res,next){
  res.json({
      "succeed": true,
      "code": 0,
      "msg": "",
      "list": {
      "id": 15022,
      "categoryId": 327,
      "userId": null,
      "orgId": 1,
      "title": "一则可以分享的新闻头条",
      "subTitle": "成都市搜索",
      "labels": "查",
      "source": "成都市出生地",
      "author": null,
      "department": "南方电网公司",
      "summary": null,
      "imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"FD9AF169D61548A3ABD80C8A5B9958D2.jpg\",\"filePath\":\"/wicsg/notify/backend/2017/04/content/add/FD9AF169D61548A3ABD80C8A5B9958D2.jpg\",\"fileSize\":28126,\"originalFileName\":\"mmexport1470054701400.jpg\",\"parameterName\":\"Filedata\",\"thumbFileName\":\"FD9AF169D61548A3ABD80C8A5B9958D2_120x80_thumb.jpg\",\"thumbFilePath\":\"/wicsg/notify/backend/2017/04/content/add/FD9AF169D61548A3ABD80C8A5B9958D2_120x80_thumb.jpg\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FD9AF169D61548A3ABD80C8A5B9958D2.jpg\"}]",
      "coverUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FD9AF169D61548A3ABD80C8A5B9958D2.jpg",
      "thumbnailUrl": "http://test.ewaytec2001.cn//wicsg/notify/backend/2017/04/content/add/FD9AF169D61548A3ABD80C8A5B9958D2.jpg",
      "body": "",
      "businessDomainId": null,
      "isTop": true,
      "isEvent": false,
      "eventStartTime": null,
      "eventEndTime": null,
      "mark": 0,
      "publishedTime": 1491890182000,
      "publishRange": null,
      "publishRangeName": null,
      "readCount": 0,
      "followCount": 0,
      "state": 1,
      "isDeleted": false,
      "isShowReaded": null,
      "createdTime": 1491890152000,
      "modifiedTime": 1491890152000,
      "videoInfo": "",
      "videoUrl": "",
      "videoCover": "",
      "isShow": true,
      "isShare": true,
      "praiseIconType": "HEART",
      "titleOld": null,
      "subTitleOld": null,
      "publishRangeOld": null,
      "publishRangeNameOld": null,
      "categoryIdOld": null,
      "businessDomainIdOld": null,
      "sourceOld": null,
      "coverUrlOld": null,
      "thumbnailUrlOld": null,
      "isEventOld": null,
      "eventStartTimeTextOld": null,
      "eventEndTimeTextOld": null,
      "isShowReadedOld": null,
      "labelsOld": null,
      "bodyOld": null,
      "frontendOauthUrl": null,
      "appCode": null,
      "num": null,
      "sord": null,
      "sordFlag": null,
      "createdTimeText": "2017-04-11 13:55:52",
      "categoryOneName": null,
      "categoryOneId": null,
      "categoryTwoId": null,
      "categoryTwoName": null,
      "domainName": null,
      "domainId": null,
      "domainIdS": null,
      "queryDomian": null,
      "isTopStr": "是",
      "pageNum": 1,
      "pageSize": 10,
      "publishedTimeText": "2017-04-11 13:56:22",
      "eventStartTimeText": "",
      "eventEndTimeText": "",
      "attachmentList": null,
      "categoryCode": null,
      "categoryTypeCode": null,
      "attachmentMap": null,
      "categoryName": null,
      "followId": null,
      "publishRangeJson": null,
      "parentCode": null,
      "clickCount": 109,
      "examineOpinion": null,
      "enablePraise": null,
      "isPraise": null,
      "praiseCount": null,
      "bid": null,
      "operation": null,
      "contentManager": false
      },
      "hasNextPage": false
  })
})

router.get('/discip/organPage', function(req, res, next) {
    res.json({
      "list":[
        {
            "orgId":123,
            "orgName":"部门1"
        },
        {
            "orgId":1234,
            "orgName":"部门2"
        },{
            "orgId":1234,
            "orgName":"部门3"
        },{
            "orgId":1234,
            "orgName":"部门4"
        },{
            "orgId":1234,
            "orgName":"部门5"
        },{
            "orgId":1234,
            "orgName":"部门6"
        }],
      "hasNextPage": false
    })
})

router.get('/discip/organDetail', function(req, res, next) {
    res.json({
      "topThree":[
        {
            "empName":"第一名",
            "headImg":"http://183.62.242.6:8000/portal/ftpweb/wicsg/platform/201702/5023C7DFCBFB4576AA18766C948332F4.jpg"
        },
        {
            "empName":"第二名",
            "headImg":"http://183.62.242.6:8000/portal/ftpweb/wicsg/platform/201702/5023C7DFCBFB4576AA18766C948332F4.jpg"
        },
        {
            "empName":"第三名",
            "headImg":"http://183.62.242.6:8000/portal/ftpweb/wicsg/platform/201702/5023C7DFCBFB4576AA18766C948332F4.jpg"
        }
    ],
    "examStatisHasNext":true,
    "examStatis":[
        {
            "title":"2016测试",
            "complete":"99.9"
        },
        {
            "title":"2016测试",
            "complete":"99.9"
        }
    ],
    "readStatis":[
        {
            "categoryName":"教育1",
            "sendCount":100,
            "empCount":200,
            "readCount":300
        },
        {
            "categoryName":"教育2",
            "sendCount":100,
            "empCount":200,
            "readCount":300
        }
    ],
    "classUrl":"http://12"

    })
})
router.get('/discip/mineExamComplete', function(req, res, next) {
    res.json({
      "list":[
        {
            "title":"2016测试",
            "complete":"99.9"
        },
        {
            "title":"2016测试",
            "complete":"99.9"
        },{
            "title":"2016测试",
            "complete":"99.9"
        },
        {
            "title":"2016测试",
            "complete":"99.9"
        },{
            "title":"2016测试",
            "complete":"99.9"
        },
        {
            "title":"2016测试",
            "complete":"99.9"
        }
        ],
      "hasNextPage": false
    })
})

router.get('/discip/examList', function(req, res, next) {
    res.json({
      "list": [{
      		"id": 52,
      		"summary": "<p>serg&nbsp;</p>",
      		"businessDomain": 1,
      		"title": "学习测试10-学习测试标签song",
      		"endTime": 1492156255,
      		"beginTime": 1491810654,
      		"publishTime": 1492083821000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(ces)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/51EA06CBF1E2405BBE84CE9FBBBA2E90.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"51EA06CBF1E2405BBE84CE9FBBBA2E90.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/51EA06CBF1E2405BBE84CE9FBBBA2E90.jpg\",\"fileSize\":9564,\"originalFileName\":\"u=2654507824,2153349262&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/51EA06CBF1E2405BBE84CE9FBBBA2E90.jpg\"}]",
      		"modifyTime": 1492090856000,
      		"createTime": 1491810751000,
      		"status": 1,
      		"evaluationType": null,
      		"json_md5": "251572EB7485DB7A79447CC331E9B3DA",
      		"isShowUserCount": true
      	}, {
      		"id": 54,
      		"summary": "<p>违反&nbsp;</p>",
      		"businessDomain": 1,
      		"title": "10号BUG回归",
      		"endTime": 1492173760,
      		"beginTime": 1491828159,
      		"publishTime": 1491830332000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(测)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/3E19242A747C4E208C98CE697444B280.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"3E19242A747C4E208C98CE697444B280.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/3E19242A747C4E208C98CE697444B280.jpg\",\"fileSize\":9560,\"originalFileName\":\"u=29563522,56051172&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/3E19242A747C4E208C98CE697444B280.jpg\"}]",
      		"modifyTime": 1492090836000,
      		"createTime": 1491828255000,
      		"status": 1,
      		"evaluationType": null,
      		"json_md5": "8D0ABF41E61844151F25342806E4C951",
      		"isShowUserCount": true
      	}, {
      		"id": 55,
      		"summary": "<p>而发热管</p>",
      		"businessDomain": 1,
      		"title": "111111111111111111",
      		"endTime": 1492176022,
      		"beginTime": 1491830420,
      		"publishTime": 1491830540000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(测试)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/9B4B0EEED794480A9C5AC80290A37EE5.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"9B4B0EEED794480A9C5AC80290A37EE5.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/9B4B0EEED794480A9C5AC80290A37EE5.jpg\",\"fileSize\":9564,\"originalFileName\":\"u=2654507824,2153349262&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/9B4B0EEED794480A9C5AC80290A37EE5.jpg\"}]",
      		"modifyTime": 1492090825000,
      		"createTime": 1491830516000,
      		"status": 1,
      		"evaluationType": null,
      		"json_md5": "603168C3E5D8D74C1FC8AC7C7CC6693B",
      		"isShowUserCount": true
      	}, {
      		"id": 56,
      		"summary": "<p>wwwww</p>",
      		"businessDomain": 1,
      		"title": "99999",
      		"endTime": 1492521895,
      		"beginTime": 1491225892,
      		"publishTime": 1491830849000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/0FB57490F98A431EA09EBAE53BCDF7E9.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"0FB57490F98A431EA09EBAE53BCDF7E9.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/0FB57490F98A431EA09EBAE53BCDF7E9.jpg\",\"fileSize\":269741,\"originalFileName\":\"20122229543999.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/0FB57490F98A431EA09EBAE53BCDF7E9.jpg\"}]",
      		"modifyTime": 1491831086000,
      		"createTime": 1491830789000,
      		"status": 1,
      		"evaluationType": null,
      		"json_md5": "8F1F4F9FB9D2153FC2014359635E4D67",
      		"isShowUserCount": true
      	}, {
      		"id": 38,
      		"summary": "<p>waefb</p>",
      		"businessDomain": 1,
      		"title": "4月7号学习测试",
      		"endTime": 1491961862,
      		"beginTime": 1491529860,
      		"publishTime": 1491553627000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(ces)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/E7D4F3DFC3A44589980C9C1DFEED2E1B.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"E7D4F3DFC3A44589980C9C1DFEED2E1B.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/E7D4F3DFC3A44589980C9C1DFEED2E1B.jpg\",\"fileSize\":9564,\"originalFileName\":\"u=2654507824,2153349262&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/E7D4F3DFC3A44589980C9C1DFEED2E1B.jpg\"}]",
      		"modifyTime": 1492091021000,
      		"createTime": 1491529954000,
      		"status": 2,
      		"evaluationType": null,
      		"json_md5": "4A1D75DB61FFD5001A47050D9AB6ED4B",
      		"isShowUserCount": true
      	}, {
      		"id": 39,
      		"summary": "<p>是我的</p>",
      		"businessDomain": 1,
      		"title": "不选关联栏目未开始",
      		"endTime": 1491890075,
      		"beginTime": 1491634446,
      		"publishTime": 1491544822000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(测试)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/EE16C6D7D84641319E250D111C4AADB0.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"EE16C6D7D84641319E250D111C4AADB0.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/EE16C6D7D84641319E250D111C4AADB0.jpg\",\"fileSize\":9564,\"originalFileName\":\"u=2654507824,2153349262&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/EE16C6D7D84641319E250D111C4AADB0.jpg\"}]",
      		"modifyTime": 1492090907000,
      		"createTime": 1491544570000,
      		"status": 2,
      		"evaluationType": null,
      		"json_md5": "FA42FE9EA2EBD9E143E1468131E09A52",
      		"isShowUserCount": true
      	}, {
      		"id": 40,
      		"summary": "<p>we&#39;ve&nbsp;</p>",
      		"businessDomain": 1,
      		"title": "已结束的学习",
      		"endTime": 1491544852,
      		"beginTime": 1491544848,
      		"publishTime": 1491545161000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(测试)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/4B6E1FCE5192421FB5935C33C3CBCAEE.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"4B6E1FCE5192421FB5935C33C3CBCAEE.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/4B6E1FCE5192421FB5935C33C3CBCAEE.jpg\",\"fileSize\":8144,\"originalFileName\":\"u=4106129483,2271220716&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/4B6E1FCE5192421FB5935C33C3CBCAEE.jpg\"}]",
      		"modifyTime": 1492090999000,
      		"createTime": 1491544946000,
      		"status": 2,
      		"evaluationType": null,
      		"json_md5": "39D6103626C5DF9F3DD75C8CD0FF39D5",
      		"isShowUserCount": true
      	}, {
      		"id": 43,
      		"summary": "<p>二</p>",
      		"businessDomain": 1,
      		"title": "测试转换栏目默认改其他题目是299",
      		"endTime": 1492151776,
      		"beginTime": 1491546974,
      		"publishTime": 1492134339000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(测试)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/D9FD15FD730F4366B272B7A14BB463DC.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"D9FD15FD730F4366B272B7A14BB463DC.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/D9FD15FD730F4366B272B7A14BB463DC.jpg\",\"fileSize\":9564,\"originalFileName\":\"u=2654507824,2153349262&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/D9FD15FD730F4366B272B7A14BB463DC.jpg\"}]",
      		"modifyTime": 1492134339000,
      		"createTime": 1491547078000,
      		"status": 2,
      		"evaluationType": null,
      		"json_md5": "4865723B35D485CDBB43E944C4307804",
      		"isShowUserCount": true
      	}, {
      		"id": 44,
      		"summary": "<p>degtrh&nbsp;</p>",
      		"businessDomain": 1,
      		"title": "新增测试777777777777",
      		"endTime": 1491722710,
      		"beginTime": 1491549908,
      		"publishTime": 1491550145000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/3CBAC64490834636AA010C25FBA46345.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"3CBAC64490834636AA010C25FBA46345.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/3CBAC64490834636AA010C25FBA46345.jpg\",\"fileSize\":9560,\"originalFileName\":\"u=29563522,56051172&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/3CBAC64490834636AA010C25FBA46345.jpg\"}]",
      		"modifyTime": 1492090951000,
      		"createTime": 1491550010000,
      		"status": 2,
      		"evaluationType": null,
      		"json_md5": "6D792EC4B1F5FD25E3108E12FA64CB1B",
      		"isShowUserCount": true
      	}, {
      		"id": 45,
      		"summary": "<p>软碟通</p>",
      		"businessDomain": 1,
      		"title": "学习测试888888888888",
      		"endTime": 1491727663,
      		"beginTime": 1491554862,
      		"publishTime": 1491555038000,
      		"enterpriseId": 1,
      		"enterpriseName": "南方电网公司(测试)",
      		"imageUrl": "http://test.ewaytec2001.cn/wicsg/exam/backend/2017/04/questionnare/act/ED6CEE6D9D054D8EBE91783B9850CE1B.jpg",
      		"imageInfo": "[{\"contentType\":\"application/octet-stream\",\"fileName\":\"ED6CEE6D9D054D8EBE91783B9850CE1B.jpg\",\"filePath\":\"/wicsg/exam/backend/2017/04/questionnare/act/ED6CEE6D9D054D8EBE91783B9850CE1B.jpg\",\"fileSize\":11473,\"originalFileName\":\"u=3610161171,138711283&fm=21&gp=0.jpg\",\"parameterName\":\"Filedata\",\"thumbFilePath\":\"\",\"viewPath\":\"http://test.ewaytec2001.cn//wicsg/exam/backend/2017/04/questionnare/act/ED6CEE6D9D054D8EBE91783B9850CE1B.jpg\"}]",
      		"modifyTime": 1492090938000,
      		"createTime": 1491554958000,
      		"status": 2,
      		"evaluationType": null,
      		"json_md5": "714837EE5493ED34A0D680CBD06DB375",
      		"isShowUserCount": true
      	}],
      "hasNextPage": false
    })
})

router.get('/law/statis/page', function(req, res, next) {
    res.json({
      "list":[
        {
            "title":"2016年统计报表",
            "type":"0"
        },
        {
            "title":"四月份统计表表",
            "type":"1"
        },{
            "title":"2016年四月份统计报表",
            "type":"2"
        }
        ],
      "hasNextPage": false
    })
})

router.get('/law/statis/score', function(req, res, next) {
    res.json({
      "list":[
        {
            "title":"第一名",
            "complete":"99"
        },
        {
            "title":"第二名",
            "complete":"93"
        },{
            "title":"第三名",
            "complete":"80"
        },{
            "title":"第四名",
            "complete":"76"
        },{
            "title":"第五名",
            "complete":"67"
        },{
            "title":"第六名",
            "complete":"50"
        },{
            "title":"第七名",
            "complete":"31"
        },{
            "title":"第八名",
            "complete":"0"
        }
        ],
      "hasNextPage": false
    })
})
router.get('/law/statis/contribute', function(req, res, next) {
    res.json({
      "list":[
        {
          "groupName":"广州供电局",
          "contributeNum":10,
          "adoptNum":5,
          "adoptPer":50
        },
        {
          "groupName":"广州供电局",
          "contributeNum":10,
          "adoptNum":5,
          "adoptPer":50
        },{
          "groupName":"广州供电局",
          "contributeNum":10,
          "adoptNum":5,
          "adoptPer":50
        },{
          "groupName":"广州供电局",
          "contributeNum":10,
          "adoptNum":5,
          "adoptPer":50
        }
        ],
      "hasNextPage": false
    })
})

router.post('/law/content/praise', function(req, res, next) {
    res.json({
        errcode: 0,
        errmsg: 'ok'
    })
});


/* ============================================================
    畅想价值观第二季模拟接口
============================================================ */
router.post('/voice/comment_praise', function(req, res, next) {
    res.json({
        errcode: -1,
        errmsg: 'ok'
    })
});


router.get('/voice/elite_criticism', function(req, res, next) {
    res.json({
        "hasNextPage":true,
        "list":[
        {
          "isPraise":true,
          "praiseNum":200,
          "userId": "9441",
          "userName": "名441",
          "groupName": "南方电网公司1",
          "content": "内容内容内容",
          "imageList": "http://ms.bdimg.com/pacific/958044133.jpg",
          "headImage": "",
          "createDate": 1494317315000,
          "commentNum": 7,
          "praiseNum": 0,
          "coverPic": "http://192.168.101.97:9009//wicsg/voice/backend/2016/04/song/voicesong/97A9C2CB50A34AFDBA4F3B1AD116FB76.png",
          "singName": "最幸福的人44",
          "listenTime": 804,
          "commentTime": 7,
          "giftTime": 0,
          "zoneId": 1975,
          "songId": 13666,
          "criticismId": 12
        },  {
          "isPraise":false,
          "praiseNum":0,
          "userId": "9441",
          "userName": "名441",
          "groupName": "南方电网公司1",
          "content": "内容内容内容",
          "imageList": "http://ms.bdimg.com/pacific/958044133.jpg",
          "headImage": "",
          "createDate": 1494317315000,
          "commentNum": 7,
          "praiseNum": 0,
          "coverPic": "http://192.168.101.97:9009//wicsg/voice/backend/2016/04/song/voicesong/97A9C2CB50A34AFDBA4F3B1AD116FB76.png",
          "singName": "最幸福的人44",
          "listenTime": 804,
          "commentTime": 7,
          "giftTime": 0,
          "zoneId": 1975,
          "songId": 13666,
          "criticismId": 12
          },  {
            "isPraise":true,
            "praiseNum":1,
            "userId": "9441",
            "userName": "名441",
            "groupName": "南方电网公司1",
            "content": "内容内容内容",
            "imageList": "http://ms.bdimg.com/pacific/958044133.jpg",
            "headImage": "",
            "createDate": 1494317315000,
            "commentNum": 7,
            "praiseNum": 0,
            "coverPic": "http://192.168.101.97:9009//wicsg/voice/backend/2016/04/song/voicesong/97A9C2CB50A34AFDBA4F3B1AD116FB76.png",
            "singName": "最幸福的人44",
            "listenTime": 804,
            "commentTime": 7,
            "giftTime": 0,
            "zoneId": 1975,
            "songId": 13666,
            "criticismId": 12
            },  {
              "praiseNum":0,
              "isPraise":false,
              "userId": "9441",
              "userName": "名441",
              "groupName": "南方电网公司1",
              "content": "内容内容内容",
              "imageList": "http://ms.bdimg.com/pacific/958044133.jpg",
              "headImage": "",
              "createDate": 1494317315000,
              "commentNum": 7,
              "praiseNum": 0,
              "coverPic": "http://192.168.101.97:9009//wicsg/voice/backend/2016/04/song/voicesong/97A9C2CB50A34AFDBA4F3B1AD116FB76.png",
              "singName": "最幸福的人44",
              "listenTime": 804,
              "commentTime": 7,
              "giftTime": 0,
              "zoneId": 1975,
              "songId": 13666,
              "criticismId": 12
              }
    ]

    })
})

router.get('/voice/top_comments', function(req, res, next) {
    res.json({
      "list": [
      {
      "id": 25635,
      "headImage": null,
      "userName": "梅孜",
      "zoneId": null,
      "groupName": "汕头供电局",
      "updateDate": 1493200290000,
      "comment": "[抱拳][抱拳]谢谢捧场",
      "delFlag": false,
      "userId": "141920",
      "createDate": 1493199471000,
      "status": 1,
      "playerId": null,
      "isPraise": false,
      "praiseNum": 4,
      "parent": {
      "id": 25579,
      "headImage": null,
      "userName": "莫忠梁",
      "zoneId": null,
      "groupName": null,
      "updateDate": null,
      "comment": "唱得很好哦[玫瑰][玫瑰][玫瑰]",
      "delFlag": false,
      "userId": "606399",
      "createDate": null,
      "status": 1,
      "playerId": null,
      "isPraise": null,
      "praiseNum": null,
      "parent": null
      }
      },
      {
      "id": 26643,
      "headImage": null,
      "userName": "张志强",
      "zoneId": null,
      "groupName": "梅州供电局",
      "updateDate": 1493687296000,
      "comment": "很好！",
      "delFlag": false,
      "userId": "572547",
      "createDate": 1493681234000,
      "status": 1,
      "playerId": null,
      "isPraise": false,
      "praiseNum": 3,
      "parent": null
      },
      {
      "id": 25848,
      "headImage": "",
      "userName": "刘颖萍",
      "zoneId": null,
      "groupName": "梅州供电局",
      "updateDate": 1493341294000,
      "comment": "[强][强][强]",
      "delFlag": false,
      "userId": "146146",
      "createDate": 1493297617000,
      "status": 1,
      "playerId": null,
      "isPraise": false,
      "praiseNum": 1,
      "parent": null
      }
      ]
    })
});

router.get('/voice/get_comments', function(req, res, next) {
    res.json({
      "list": [
          {
          "id": 25579,
          "headImage": null,
          "userName": "莫忠梁",
          "zoneId": null,
          "groupName": "河池供电局",
          "updateDate": 1493192862000,
          "comment": "唱得很好哦[玫瑰][玫瑰][玫瑰]",
          "delFlag": false,
          "userId": "606399",
          "createDate": 1493188629000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 1,
          "parent": null
          },
          {
          "id": 25589,
          "headImage": null,
          "userName": "李晓波",
          "zoneId": null,
          "groupName": "兴义供电局",
          "updateDate": 1493192863000,
          "comment": "[微笑][微笑][微笑][微笑][微笑][微笑][微笑][微笑][微笑]",
          "delFlag": false,
          "userId": "51262",
          "createDate": 1493190361000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 0,
          "parent": null
          },
          {
          "id": 25612,
          "headImage": null,
          "userName": "王大坤",
          "zoneId": null,
          "groupName": "丽江供电局",
          "updateDate": 1493197067000,
          "comment": "好听[鼓掌][鼓掌][鼓掌][强][强][强][强]",
          "delFlag": false,
          "userId": "85177",
          "createDate": 1493194508000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 0,
          "parent": null
          },
          {
          "id": 25632,
          "headImage": null,
          "userName": "梅孜",
          "zoneId": null,
          "groupName": "汕头供电局",
          "updateDate": 1493200290000,
          "comment": "谢谢[抱拳][抱拳]",
          "delFlag": false,
          "userId": "141920",
          "createDate": 1493199427000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 0,
          "parent": {
          "id": 25612,
          "headImage": null,
          "userName": "王大坤",
          "zoneId": null,
          "groupName": null,
          "updateDate": null,
          "comment": "好听[鼓掌][鼓掌][鼓掌][强][强][强][强]",
          "delFlag": false,
          "userId": "85177",
          "createDate": null,
          "status": 1,
          "playerId": null,
          "isPraise": null,
          "praiseNum": null,
          "parent": null
          }
          },
          {
          "id": 25633,
          "headImage": null,
          "userName": "梅孜",
          "zoneId": null,
          "groupName": "汕头供电局",
          "updateDate": 1493200290000,
          "comment": "[抱拳][抱拳]",
          "delFlag": false,
          "userId": "141920",
          "createDate": 1493199435000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 1,
          "parent": {
          "id": 25589,
          "headImage": null,
          "userName": "李晓波",
          "zoneId": null,
          "groupName": null,
          "updateDate": null,
          "comment": "[微笑][微笑][微笑][微笑][微笑][微笑][微笑][微笑][微笑]",
          "delFlag": false,
          "userId": "51262",
          "createDate": null,
          "status": 1,
          "playerId": null,
          "isPraise": null,
          "praiseNum": null,
          "parent": null
          }
          },
          {
          "id": 25634,
          "headImage": null,
          "userName": "梅孜",
          "zoneId": null,
          "groupName": "汕头供电局",
          "updateDate": 1493200290000,
          "comment": "谢谢[握手][握手][握手]",
          "delFlag": false,
          "userId": "141920",
          "createDate": 1493199449000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 1,
          "parent": {
          "id": 25579,
          "headImage": null,
          "userName": "莫忠梁",
          "zoneId": null,
          "groupName": null,
          "updateDate": null,
          "comment": "唱得很好哦[玫瑰][玫瑰][玫瑰]",
          "delFlag": false,
          "userId": "606399",
          "createDate": null,
          "status": 1,
          "playerId": null,
          "isPraise": null,
          "praiseNum": null,
          "parent": null
          }
          },
          {
          "id": 25635,
          "headImage": null,
          "userName": "梅孜",
          "zoneId": null,
          "groupName": "汕头供电局",
          "updateDate": 1493200290000,
          "comment": "[抱拳][抱拳]谢谢捧场",
          "delFlag": false,
          "userId": "141920",
          "createDate": 1493199471000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 4,
          "parent": {
          "id": 25579,
          "headImage": null,
          "userName": "莫忠梁",
          "zoneId": null,
          "groupName": null,
          "updateDate": null,
          "comment": "唱得很好哦[玫瑰][玫瑰][玫瑰]",
          "delFlag": false,
          "userId": "606399",
          "createDate": null,
          "status": 1,
          "playerId": null,
          "isPraise": null,
          "praiseNum": null,
          "parent": null
          }
          },
          {
          "id": 25699,
          "headImage": null,
          "userName": "林泳江",
          "zoneId": null,
          "groupName": "潮州供电局",
          "updateDate": 1493256177000,
          "comment": "[玫瑰][玫瑰][玫瑰]",
          "delFlag": false,
          "userId": "193470",
          "createDate": 1493222687000,
          "status": 1,
          "playerId": null,
          "isPraise": false,
          "praiseNum": 0,
          "parent": null
          }
]
    })
});

router.get('/voice/get_song', function(req, res, next) {
    res.json({
      "headImage": null,
    "playerId": 21212,
    "userId": "141920",
    "userName": "梅孜",
    "zoneId": 1,
    "groupName": "汕头供电局",
    "matchTitle": "",
    "matchId": 1,
    "listenTime": 447,
    "giftTime": 430,
    "votes": 10,
    "integralVote": 20,
    "happyIntegral": 710,
    "commentTime": 12,
    "scoreRank": null,
    "popularityRank": null,
    "status": 1,
    "comment": "",
    "attendSongId": 13564,
    "isMySong": false,
    "song": {
        "id": 18294,
        "createDate": null,
        "updateDate": 1493187136000,
        "delFlag": null,
        "coverPic": "http://nw.esyun.cn/plugins/ftpweb/music/20160819160951.png",
        "userId": null,
        "playUrl": "http://changba.com/s/UOPeLu1dCZUL1fVkNbIc0A?code=RkvQSz26klpc_KJaafqw3ephdmRFZHz3w4YjTzsuNaGtto96C0MuvQ-o4f9HrY_CmuT2A25PQSI7B58Rj2NFgjJPBJuKPWTTQg1-49_ekvgTQHNAQld24QL-k3q-RN4_&source=wechat&from=singlemessage&isappinstalled=1",
        "singName": "一次就好",
        "singId": null,
        "memo": "谢谢大家",
        "type":1,
        "score": null,
        "source": 1,
        "imageListJson": null
        },
    "criticismList":[],
    "story": [
    {
    "userName": "涛涛3",
    "id": 3,
    "groupName": "广州供电局",
    "title": "你还要我怎样",
    "commenTitle": "我是评论啊我是评论啊我是评论啊我是评论啊我是评论啊我是评论啊我是评论啊我是评论啊我是评论啊我是评论啊",
    "commenImg": "http://nw.esyun.cn/plugins/ftpweb//music/api/backend/2016/08/music/head_img/9b8ddad9-6b50-27b4-2b8f-2304b2da7967.original.jpg",
    "content": "",
    "imageList": "",
    "headImage": "",
    "createDate": "1494215843000",
    "coverImg": "http://nw.esyun.cn/plugins/ftpweb//music/api/backend/2017/05/music/head_img/e5c48555-0455-3924-d10f-8b9d7460f9b9.original.jpg",
    "commentNum": 1,
    "praiseNum": 1,
    "coverPic": "",
    "singName": "",
    "listenTime": 11,
    "commentTime": 1,
    "giftTime": 1,
    "zoneId": 1,
    "songId": 1
    }
    ],
    "freeVote": 50,
    "chorusFreeVote": null,
    "scene": null,
    "integral": null,
    "source": 0,
    "attentionNum": null,
    "visitNum": null,
    "zonePopularityRank": null,
    "score": 100,
    "isHyperlink": 0,
    "zoneLabel": null,
    "totalFreeVote": 2156,
    "isAct": false,
    "isOver": false,
    "iconUrl": null,
    "isShareSports": false
    })
});

router.get('/voice/song_list', function(req, res, next) {
    res.json({

    })
});






module.exports = router;

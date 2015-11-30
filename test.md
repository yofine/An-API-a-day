<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My first file</title>
<link rel="stylesheet" href="http://app.classeur.io/base-min.css" />
<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
</head>
<body><div class="export-container"><h2 id="basic"><strong>Basic</strong></h2>
<h3 id="access-token">Access Token</h3>
<p>说明：其他所有 API 都需要传 access_token=XXX  即此接口返回数据</p>
<pre><code>POST  http://app.socialmaster.com.cn/api_v2/login/authorize
</code></pre>
<h4 id="parameters">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>email</td>
<td><code>string</code></td>
<td>用户的 <strong>Open</strong> 邮箱地址</td>
</tr>
<tr>
<td>password</td>
<td><code>string</code></td>
<td>用户的 <strong>Open</strong> 邮箱密码</td>
</tr>
</tbody>
</table>
<h4 id="example-input">Example Input</h4>
<pre><code>{
  "email": "xxx@admaster.com.cn",
  "password": xxx
}
</code></pre>
<h4 id="response">Response</h4>
<pre><code>Status: 200 OK
Content-Type → application/json; charset=utf-8

{
  "access_token": "2e2f3d6db5f288c321c8365baad00765f88bb56303b",
  "expires_in": 1431342190
}

</code></pre>
<h4 id="fields">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>access_token</td>
<td><code>string</code></td>
<td>令牌</td>
</tr>
<tr>
<td>expires_in</td>
<td><code>string</code></td>
<td>过期时间</td>
</tr>
</tbody>
</table>
<h3 id="session">Session</h3>
<p>说明：返回用户的信息，得到组织 id，团队 id</p>
<pre><code>GET http://app.socialmaster.com.cn/api_v2/session
</code></pre>
<h4 id="response-1">Response</h4>
<pre><code>{
    "oauth": {
        "id": xxx,
        "email": "xxx@admaster.com.cn",
        "username": "xxxx",
        "uuid": "xxxx",
        "client_id": "xxxxx"
    },
    "id": 3,
    "creatorId": 0,
    "name": "yofine",
    "role": "admin",
    "adModule": "",
    "email": "xxxxxx@admaster.com.cn",
    "status": "enabled",
    "language": "en",
    "timeZone": "+0",
    "isDelete": "no",
    "accessToken": "xxxxxxxxxxxxxxxxxxx",
    "createdAt": "2014-09-15T02:56:07.000Z",
    "updatedAt": "2015-08-17T08:29:22.000Z",
    "organizations": [
        {
            "id": xx,
            "organizationId": xx,
            "userId": xx,
            "role": "admin",
            "remark": "xx",
            "current": "no",
            "status": "enabled",
            "createdAt": "2015-02-10T04:19:37.000Z",
            "updatedAt": "2015-08-05T15:45:29.000Z",
            "organization": {
                "id": xxx,
                "name": "xx",
                "teams": [
                    {
                        "id": xx,
                        "organizationId": xx,
                        "creatorId": xx,
                        "name": "xxx"
                    }

                ]
            }
        }
    ]
}
</code></pre>
<h2 id="舆情数据-listening-data"><strong>舆情数据 Listening Data</strong></h2>
<h3 id="主题列表-topic">主题列表 Topic</h3>
<p>说明：返回主题的信息，得到主题 id 和 主题 name，其中的 tag 字段用来给主题分组</p>
<pre><code>GET http://app.socialmaster.com.cn/api_v2/teams/:teamId/topics
</code></pre>
<h4 id="parameters-1">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>teamId</td>
<td><code>string</code></td>
<td>团队 id， 可由 Session 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-2">Response</h4>
<pre><code>[
   {
        "id": xxx,
        "creatorId": xx,
        "teamId": 1,
        "name": "xxx",
        "main_keyword": "xx",
        "createdAt": "2015-03-09T14:07:54.000Z",
        "updatedAt": "2015-08-10T08:20:58.000Z",
        "tags":["xxx", "xxx", "xxxx"],
        "type": "keyword"
    }
]

</code></pre>
<h4 id="fields-1">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td><code>number</code></td>
<td>主题 id</td>
</tr>
<tr>
<td>name</td>
<td><code>string</code></td>
<td>主题名称</td>
</tr>
<tr>
<td>tag</td>
<td><code>string</code></td>
<td>主题标签</td>
</tr>
<tr>
<td>type</td>
<td><code>string</code></td>
<td>主题类型 keyword/weibo/wechat</td>
</tr>
</tbody>
</table>
<h3 id="讨论趋势">讨论趋势</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/listening/stats?topicIds=1,2&amp;dimensions=topic,day&amp;metrics=volume
</code></pre>
<h4 id="parameters-2">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topicIds</td>
<td><code>number</code></td>
<td>主题 id，可由 Topic 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-3">Response</h4>
<pre><code>
    {
        "day": "2015-08-12",
        "volume": 4242,
        "topic": 2
    },
    {
        "day": "2015-08-13",
        "volume": 3972,
        "topic": 2
    },
    {
        "day": "2015-08-14",
        "volume": 4338,
        "topic": 2
    }
    .....
]
</code></pre>
<h4 id="fields-2">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>topic</td>
<td><code>number</code></td>
<td>主题 id</td>
</tr>
<tr>
<td>day</td>
<td><code>string</code></td>
<td>日期</td>
</tr>
<tr>
<td>volume</td>
<td><code>number</code></td>
<td>声量</td>
</tr>
</tbody>
</table>
<h3 id="舆情数据可选过滤字段">舆情数据可选过滤字段</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>platform</td>
<td><code>number</code></td>
<td>平台 0:sina 2:news 3:blog 4:bbs 5:wechat 6:wenda</td>
</tr>
<tr>
<td>source</td>
<td><code>string</code></td>
<td>来源</td>
</tr>
<tr>
<td>sentiment</td>
<td><code>number</code></td>
<td>情感 -1:负面 0:中性 1:正面</td>
</tr>
<tr>
<td>province</td>
<td><code>string</code></td>
<td>省、直辖市、自治区</td>
</tr>
</tbody>
</table>
<h3 id="品牌排名、讨论分布">品牌排名、讨论分布</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/listening/stats?topicIds=1,2&amp;dimensions=topic&amp;metrics=volume
</code></pre>
<h4 id="parameters-3">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topicIds</td>
<td><code>number</code></td>
<td>主题 id，可由 TOpic 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-4">Response</h4>
<pre><code>[
    {
        "topic": 2,
        "volume": 26539
    },
    {
        "topic": 1,
        "volume": 26539
    }
]
</code></pre>
<h4 id="fields-3">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>topic</td>
<td><code>number</code></td>
<td>主题 id</td>
</tr>
<tr>
<td>volume</td>
<td><code>number</code></td>
<td>声量</td>
</tr>
</tbody>
</table>
<h3 id="概览">概览</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/listening/stats?topicIds=1,2&amp;dimensions=platform&amp;metrics=volume X 2
</code></pre>
<h4 id="parameters-4">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topicIds</td>
<td><code>number</code></td>
<td>主题 id，可由 TOpic 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-5">Response</h4>
<pre><code>[
    {
        "platform": 0,
        "volume": 48634
    },
    {
        "platform": 5,
        "volume": 4456
    }
]
</code></pre>
<h4 id="fields-4">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>platform</td>
<td><code>number</code></td>
<td>平台</td>
</tr>
<tr>
<td>volume</td>
<td><code>number</code></td>
<td>声量</td>
</tr>
</tbody>
</table>
<h3 id="平台分布">平台分布</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/listening/stats?topicIds=1,2&amp;dimensions=topic,platform&amp;metrics=volume
</code></pre>
<h4 id="parameters-5">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topicIds</td>
<td><code>number</code></td>
<td>主题 id，可由 Topic 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-6">Response</h4>
<pre><code>[
    {
        "platform": 0,
        "volume": 24309,
        "topic": 2
    },
    {
        "platform": 5,
        "volume": 2228,
        "topic": 2
    },
    {
        "platform": 0,
        "volume": 24309,
        "topic": 1
    },
    {
        "platform": 5,
        "volume": 2228,
        "topic": 1
    }
]
</code></pre>
<h4 id="fields-5">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>topic</td>
<td><code>number</code></td>
<td>主题 id</td>
</tr>
<tr>
<td>platform</td>
<td><code>number</code></td>
<td>平台</td>
</tr>
<tr>
<td>volume</td>
<td><code>number</code></td>
<td>声量</td>
</tr>
</tbody>
</table>
<h3 id="情感分布">情感分布</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/listening/stats?topicIds=1&amp;dimensions=sentiment&amp;metrics=volume
</code></pre>
<h4 id="parameters-6">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topicIds</td>
<td><code>number</code></td>
<td>主题 id，可由 Topic 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-7">Response</h4>
<pre><code>[
    {
        "sentiment": -1,
        "volume": 24309,
    },
    {
        "sentiment": 0,
        "volume": 2228,
    },
    {
        "sentiment": 1,
        "volume": 24309,
    }
]
</code></pre>
<h4 id="fields-6">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>topic</td>
<td><code>number</code></td>
<td>主题 id</td>
</tr>
<tr>
<td>sentiment</td>
<td><code>number</code></td>
<td>情感 正：1 中：0 负：-1</td>
</tr>
<tr>
<td>volume</td>
<td><code>number</code></td>
<td>声量</td>
</tr>
</tbody>
</table>
<h3 id="地域分布">地域分布</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/listening/stats?topicIds=1,2&amp;dimensions=location&amp;metrics=volume
</code></pre>
<h4 id="parameters-7">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topicIds</td>
<td><code>number</code></td>
<td>主题 id，可由 Topic 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-8">Response</h4>
<pre><code>[
    {
        "location": "山东",
        "volume": 6286
    },
    {
        "location": "广东",
        "volume": 2716
    },
    {
        "location": "北京",
        "volume": 1784
    },
    {
        "location": "江苏",
        "volume": 1388
    },
    {
        "location": "海外",
        "volume": 1384
    }
    .....
]
</code></pre>
<h4 id="fields-7">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>location</td>
<td><code>string</code></td>
<td>省/直辖市</td>
</tr>
<tr>
<td>volume</td>
<td><code>number</code></td>
<td>声量</td>
</tr>
</tbody>
</table>
<h3 id="热词">热词</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/listening/stats?topicIds=1,2&amp;dimensions=word&amp;metrics=frequency
</code></pre>
<h4 id="parameters-8">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topicIds</td>
<td><code>number</code></td>
<td>主题 id，可由 Topic 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-9">Response</h4>
<pre><code>[
    {
        "word": "宝马",
        "frequency": 47356
    },
    {
        "word": "奔驰",
        "frequency": 41366
    },
    {
        "word": "奥迪",
        "frequency": 23486
    }
    .....
]
</code></pre>
<h4 id="fields-8">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>word</td>
<td><code>string</code></td>
<td>热词</td>
</tr>
<tr>
<td>frequency</td>
<td><code>number</code></td>
<td>词频</td>
</tr>
</tbody>
</table>
<h3 id="使用微信账号微博账号查看舆情数据">使用微信账号/微博账号查看舆情数据</h3>
<p><code>GET http://app.socialmaster.com.cn/api_v2/organizations/1/search/topic_data?createdAt_gte=2015-10-15&amp;createdAt_lte=2015-10-21&amp;topics=4006&amp;maxResults=10</code></p>
<h4 id="parameters-9">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>topics</td>
<td><code>number</code></td>
<td>主题 id，可由 Topic 接口获得</td>
</tr>
<tr>
<td>startIndex</td>
<td><code>number</code></td>
<td>开始位置</td>
</tr>
<tr>
<td>maxResults</td>
<td><code>number</code></td>
<td>最大条数</td>
</tr>
<tr>
<td>createdAt_gte</td>
<td><code>date</code></td>
<td>开始时间</td>
</tr>
<tr>
<td>createdAt_lte</td>
<td><code>date</code></td>
<td>结束时间</td>
</tr>
</tbody>
</table>
<h4 id="response-10">Response</h4>
<pre><code>{
    "data": [
        {
            "flash": 458,
            "platform": 0,
            "cdate": "2015-10-21T17:50:08",
            "distr_pan": [
                {
                    "k": "javascript",
                    "v": 0
                }
            ],
            "distr_segment": [],
            "ccount": 0,
            "source": {
                "url": "",
                "name": "360安全浏览器"
            },
            "highlight": "@李东&lt;em&gt;javascript&lt;/em&gt;",
            "user": {
                "bi_followers_count": 264,
                "domain": "Beijingds",
                "statuses_count": 6009,
                "description": "清风捎来了远声，我听得见却看不见是谁在尽情的奏演；风里流动的芬芳，我闻得见却看不见她美丽的容颜!!!!",
                "friends_count": 517,
                "weihao": "",
                "url": "",
                "gender": "m",
                "created_at": "2011-04-27T10:16:59",
                "region1": "北京",
                "profile_image_url": "http://tp4.sinaimg.cn/1972116783/50/5634729676/1",
                "verified_reason": "",
                "region2": "丰台区",
                "followers_count": 458,
                "screen_name": "丰台king",
                "uid": 1972116783,
                "verified": false,
                "verified_type": 220,
                "favourites_count": 11
            },
            "acount": 0,
            "rcount": 0,
            "has_link": false,
            "hot": false,
            "mid": "3900440766642781",
            "retweet": {
                "uid": 2316673484,
                "text": "C罗假扮成流浪汉在街头卖艺乞讨，估计没给电话号码的女孩流下了悔恨的泪水[doge]|秒拍视频",
                "pic": null,
                "s_name": "每日幽默趣事",
                "date": "2015-10-21T16:00:03",
                "geo": null,
                "id": 3900413063871214,
                "acount": 123,
                "ccount": 7,
                "source": {
                    "url": "",
                    "name": "微博 weibo.com"
                },
                "isv": false,
                "rcount": 73
            }
        }
       ...
    ]
}
</code></pre>
<h4 id="fields-9">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>flash</td>
<td><code>number</code></td>
<td>曝光</td>
</tr>
<tr>
<td>user</td>
<td><code>object</code></td>
<td>用户信息</td>
</tr>
<tr>
<td>retweet</td>
<td><code>object</code></td>
<td>原创微博信息</td>
</tr>
<tr>
<td>cdate</td>
<td><code>date</code></td>
<td>微博发布时间</td>
</tr>
<tr>
<td>ccount</td>
<td><code>number</code></td>
<td>评论数</td>
</tr>
<tr>
<td>rcount</td>
<td><code>number</code></td>
<td>转发数</td>
</tr>
<tr>
<td>acount</td>
<td><code>number</code></td>
<td>点赞数</td>
</tr>
</tbody>
</table>
<p>说明：配置好<code>微博账号/微信账号</code>类型的主题即可使用，主题中有 type 字段标示。另外，该接口为 v2 版本接口，一些字段与 v3 版本有些差异，使用时需要注意。</p>
<h2 id="微信数据-wechat-data"><strong>微信数据 Wechat Data</strong></h2>
<h3 id="微信公众号列表-wechat">微信公众号列表 Wechat</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v2/teams/:teamId/weixin_accounts
</code></pre>
<h4 id="parameters-10">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>teamId</td>
<td><code>string</code></td>
<td>团队 id， 可由 Session 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-11">Response</h4>
<pre><code>[
    {
        "id": 99,
        "name": "xxxxx",
        "teamId": 1,
        "weixinAccountId": 1,
        "createdAt": "2015-04-21T09:14:13.000Z",
        "updatedAt": "2015-04-21T09:14:13.000Z"
    },
    {
        "id": 100,
        "name": "xxxxx",
        "teamId": 1,
        "weixinAccountId": 2,
        "createdAt": "2015-04-21T09:14:13.000Z",
        "updatedAt": "2015-04-21T09:14:13.000Z"
    }
]
</code></pre>
<h4 id="fields-10">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td><code>number</code></td>
<td>微信公众号 id</td>
</tr>
<tr>
<td>name</td>
<td><code>string</code></td>
<td>微信公众号昵称</td>
</tr>
</tbody>
</table>
<p>###微信公众号最近七天粉丝增量</p>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/accounts/wechat/user_analysis?wechatIds=99,100&amp;metrics=increase_user
</code></pre>
<h4 id="parameters-11">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>wechatIds</td>
<td><code>number</code></td>
<td>微信公众号 id，可由 Wechat 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-12">Response</h4>
<pre><code>{
    "increase_user": 348
}
</code></pre>
<h4 id="fields-11">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>increase_user</td>
<td><code>number</code></td>
<td>净增粉丝数</td>
</tr>
</tbody>
</table>
<p>###微信公众号粉丝总量</p>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/accounts/wechat/user_analysis?wechatIds=99,100&amp;metrics=cumulate_user&amp;startDate=2015-10-14&amp;endDate=2015-10-14
</code></pre>
<h4 id="parameters-12">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>wechatIds</td>
<td><code>number</code></td>
<td>微信公众号 id，可由 Wechat 接口获得</td>
</tr>
<tr>
<td>startDate</td>
<td><code>date</code></td>
<td>数据时间区间</td>
</tr>
<tr>
<td>endDate</td>
<td><code>date</code></td>
<td>数据时间区间</td>
</tr>
</tbody>
</table>
<p>说明：根据需求，此接口的 startDate\endDate 使用前一天的时间</p>
<h4 id="response-13">Response</h4>
<pre><code>{
    "cumulate_user": 1348
}
</code></pre>
<h4 id="fields-12">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>cumulate_user</td>
<td><code>number</code></td>
<td>总粉丝数</td>
</tr>
</tbody>
</table>
<p>图文分析</p>
<p>说明：返回选定公众号七天内图文统计数据总和。</p>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/accounts/wechat/article_analysis?wechatIds=99,100&amp;metrics=int_page_read_count,ori_page_read_count,share_count
</code></pre>
<h4 id="parameters-13">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>wechatIds</td>
<td><code>number</code></td>
<td>微信公众号 id，可由 Wechat 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-14">Response</h4>
<pre><code>{
    "int_page_read_count": 12520,
    "ori_page_read_count": 83,
    "share_count": 654
}
</code></pre>
<h4 id="fields-13">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>int_page_read_count</td>
<td><code>number</code></td>
<td>图文页阅读次数</td>
</tr>
<tr>
<td>ori_page_read_count</td>
<td><code>number</code></td>
<td>原文页阅读次数</td>
</tr>
<tr>
<td>share_count</td>
<td><code>number</code></td>
<td>分享次数</td>
</tr>
</tbody>
</table>
<h3 id="文章列表">文章列表</h3>
<p>说明：返回选定公众号七天内内发布的文章，从发布之日起七天内的统计数据。</p>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/accounts/wechat/article_stats?wechatIds=99&amp;dimensions=wechat,day,article&amp;metrics=int_page_read_user,ori_page_read_user,share_user,add_to_fav_user
</code></pre>
<h4 id="parameters-14">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>wechatIds</td>
<td><code>number</code></td>
<td>微信公众号 id，可由 Wechat 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-15">Response</h4>
<pre><code>[
    {
        "day": "2015-08-21",
        "int_page_read_user": 617,
        "ori_page_read_user": 0,
        "share_user": 15,
        "add_to_fav_user": 5,
        "wechat": 99,
        "article": "无肉更欢丨人气素食餐厅大盘点"
    },
    {
        "day": "2015-08-22",
        "int_page_read_user": 297,
        "ori_page_read_user": 0,
        "share_user": 12,
        "add_to_fav_user": 3,
        "wechat": 99,
        "article": "无肉更欢丨人气素食餐厅大盘点"
    },
    {
        "day": "2015-08-23",
        "int_page_read_user": 129,
        "ori_page_read_user": 0,
        "share_user": 7,
        "add_to_fav_user": 1,
        "wechat": 99,
        "article": "无肉更欢丨人气素食餐厅大盘点"
    }
    .....
]
</code></pre>
<h4 id="fields-14">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>day</td>
<td><code>string</code></td>
<td>日期</td>
</tr>
<tr>
<td>int_page_read_user</td>
<td><code>number</code></td>
<td>图文页阅读人数</td>
</tr>
<tr>
<td>ori_page_read_user</td>
<td><code>number</code></td>
<td>原文页阅读人数</td>
</tr>
<tr>
<td>share_user</td>
<td><code>number</code></td>
<td>分享人数</td>
</tr>
<tr>
<td>add_to_fav_user</td>
<td><code>number</code></td>
<td>收藏人数</td>
</tr>
<tr>
<td>wechat</td>
<td><code>number</code></td>
<td>公众号id</td>
</tr>
<tr>
<td>article</td>
<td><code>number</code></td>
<td>文章标题</td>
</tr>
</tbody>
</table>
<h2 id="授权微博账号数据-weibo-account"><strong>授权微博账号数据 Weibo Account</strong></h2>
<h3 id="微博账号">微博账号</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/teams/:teamId/accounts

</code></pre>
<h4 id="parameters-15">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>teamId</td>
<td><code>string</code></td>
<td>团队 id， 可由 Session 接口获得</td>
</tr>
</tbody>
</table>
<h4 id="response-16">Response</h4>
<pre><code>[
    {
        id: xx,
        teamId: xx,
        accountId: xx,
        createdAt: "2014-11-19T04:09:53.000Z",
        updatedAt: "2014-11-19T04:09:53.000Z",
        account: {
            id: xx,
            organizationId: xx,
            u_name: "xx",
            u_id: "xxxxx",
            createdAt: "2014-11-10T07:16:43.000Z",
            updatedAt: "2015-09-16T05:57:18.000Z",
            sinaApp: {
                id: xx,
                organizationId: xx,
                name: "xxxxxx",
                createdAt: "2014-11-10T07:16:00.000Z",
                updatedAt: "2014-11-10T07:16:00.000Z"
            }
        }
    }
]
</code></pre>
<h4 id="fields-15">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td><code>number</code></td>
<td>微博授权账号 id</td>
</tr>
<tr>
<td>accountId</td>
<td><code>number</code></td>
<td>组织下账号 id</td>
</tr>
<tr>
<td>u_name</td>
<td><code>string</code></td>
<td>微博授权账号昵称</td>
</tr>
</tbody>
</table>
<h3 id="微博账号最近七天粉丝、评论、转发增量">微博账号最近七天粉丝、评论、转发增量</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/accounts/weibo/influence_user?weiboIds=1&amp;dimensions=day,weibo&amp;metrics=real_nfcnt,sm_flash_factor,nctc,nrpc
</code></pre>
<h4 id="parameters-16">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>weiboIds</td>
<td><code>number</code></td>
<td>授权微博账号 id，可由 Weibo 接口获得 id 字段</td>
</tr>
</tbody>
</table>
<h4 id="response-17">Response</h4>
<pre><code>{
    "real_nfcnt": 0,
    "sm_flash_factor": 0,
    "nctc": 0,
    "nrpc": 0
}
</code></pre>
<h4 id="fields-16">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>real_nfcnt</td>
<td><code>number</code></td>
<td>日增粉丝</td>
</tr>
<tr>
<td>sm_flash_factor</td>
<td><code>number</code></td>
<td>日增曝光</td>
</tr>
<tr>
<td>nctc</td>
<td><code>number</code></td>
<td>日增评论</td>
</tr>
<tr>
<td>nrpc</td>
<td><code>number</code></td>
<td>日增转发</td>
</tr>
</tbody>
</table>
<h3 id="微博账号粉丝总量">微博账号粉丝总量</h3>
<pre><code>http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/accounts/weibo/influence_user?weiboIds=73&amp;dimensions=&amp;metrics=followers_count&amp;startDate=2015-10-14&amp;endDate=2015-10-14
</code></pre>
<h4 id="parameters-17">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>weiboIds</td>
<td><code>number</code></td>
<td>授权微博账号 id，可由 Weibo 接口获得 id 字段</td>
</tr>
<tr>
<td>startDate</td>
<td><code>date</code></td>
<td>数据时间区间</td>
</tr>
<tr>
<td>endDate</td>
<td><code>date</code></td>
<td>数据时间区间</td>
</tr>
</tbody>
</table>
<p>说明：根据需求，此接口的 startDate\endDate 使用前一天的时间</p>
<h4 id="response-18">Response</h4>
<pre><code>{
    "followers_count": 2132
}
</code></pre>
<h4 id="fields-17">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>real_nfcnt</td>
<td><code>number</code></td>
<td>日增粉丝</td>
</tr>
<tr>
<td>sm_flash_factor</td>
<td><code>number</code></td>
<td>日增曝光</td>
</tr>
<tr>
<td>nctc</td>
<td><code>number</code></td>
<td>日增评论</td>
</tr>
<tr>
<td>nrpc</td>
<td><code>number</code></td>
<td>日增转发</td>
</tr>
</tbody>
</table>
<h3 id="微博账号最近七天粉丝趋势">微博账号最近七天粉丝趋势</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/organizations/:organizationId/search/accounts/weibo/influence_user?weiboIds=73&amp;dimensions=day&amp;metrics=real_nfcnt
</code></pre>
<h4 id="parameters-18">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>organizationId</td>
<td><code>string</code></td>
<td>组织 id，可由 Session 接口获得</td>
</tr>
<tr>
<td>weiboIds</td>
<td><code>number</code></td>
<td>授权微博账号 id，可由 Weibo 接口获得 id 字段</td>
</tr>
<tr>
<td>startDate</td>
<td><code>date</code></td>
<td>数据时间区间</td>
</tr>
<tr>
<td>endDate</td>
<td><code>date</code></td>
<td>数据时间区间</td>
</tr>
</tbody>
</table>
<h4 id="response-19">Response</h4>
<pre><code>[
    {
        "day": "2015-10-09",
        "real_nfcnt": 0
    },
    {
        "day": "2015-10-10",
        "real_nfcnt": 1
    },
    {
        "day": "2015-10-11",
        "real_nfcnt": 1
    }
    ...
]
</code></pre>
<h4 id="fields-18">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>day</td>
<td><code>string</code></td>
<td>日期</td>
</tr>
<tr>
<td>real_nfcnt</td>
<td><code>number</code></td>
<td>日增粉丝</td>
</tr>
</tbody>
</table>
<h3 id="微博账号时间线-timeline">微博账号时间线 Timeline</h3>
<pre><code>GET http://app.socialmaster.com.cn/api_v3/sina_api/statuses/user_timeline?accountId=xxx&amp;page=2
</code></pre>
<h4 id="parameters-19">Parameters</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>accountId</td>
<td><code>number</code></td>
<td>微博账号 id， 可由 Weibo Account 接口获得 accountId 字段</td>
</tr>
<tr>
<td>page</td>
<td><code>number</code></td>
<td>页数，一页10条</td>
</tr>
</tbody>
</table>
<h4 id="response-20">Response</h4>
<pre><code>[
    {
        "mid": "3791228308805231",
        "id": "3791228308805231",
        "cdate": "2014-12-24T00:58:49+00:00",
        "idate": "2015-09-16T03:28:37.549Z",
        "text": "今天是年三十儿了，祝大家阖家欢乐。但普天同庆的同时，别忘了，只要万恶的资本主义还在，就会有小女孩在年三十儿晚上冻死。我们也算外资公司，年三十儿了为什么不放假呢？",
        "source": {
            "name": "微博 weibo.com",
            "url": "http://weibo.com/"
        },
        "rcount": 0,
        "ccount": 1,
        "acount": 1,
        "geo": null,
        "pic": "http://ww2.sinaimg.cn/thumbnail/6266cb9djw1enkhjutnzaj20960dcq37",
        "platform": 0,
        "user": {
            "uid": "1650903965",
            "screen_name": "iceWenT",
            "gender": "m",
            "location": "北京 海淀区",
            "description": "京城数据民工。",
            "url": "http://icewent.com",
            "domain": "icewent",
            "profile_image_url": "http://tp2.sinaimg.cn/1650903965/50/5675262788/1",
            "weihao": "337610888",
            "friends_count": 1051,
            "followers_count": 2119,
            "favourites_count": 2424,
            "bi_followers_count": 352,
            "statuses_count": 2773,
            "created_at": "2009-10-01T08:08:41.000Z",
            "verified": true,
            "verified_type": 0,
            "verified_reason": "新浪云中级开发者",
            "region1": "北京",
            "region2": "海淀区"
        },
        "flash": 2119
    }
]

</code></pre>
<h4 id="fields-19">Fields</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdate</td>
<td><code>string</code></td>
<td>微博发布时间</td>
</tr>
<tr>
<td>rcount</td>
<td><code>number</code></td>
<td>转发数</td>
</tr>
<tr>
<td>ccount</td>
<td><code>number</code></td>
<td>评论数</td>
</tr>
<tr>
<td>acount</td>
<td><code>number</code></td>
<td>点赞数</td>
</tr>
</tbody>
</table>
<hr></div></body>
</html>
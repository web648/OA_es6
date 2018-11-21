// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function(page_no) {
    console.log(page_no)
    let _data = [];
    for (let i = 0; i < page_no; i++) {
        let newArticleObject = {
            id:Random.natural(0, 99),
            visit_num:Random.float(60, 100, 2, 2),
            reply_num:Random.natural(0, 9999),
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            text: Random.cparagraph(),
            color: Random.color(),
            url: Random.url('http'),
            img_url: Random.dataImage('300x250', '自定义的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        _data.push(newArticleObject)
    }
 
    return {
        data: _data
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
// Mock.mock(/\/api\/healthPlat\/getRecipeDetail\/\w*\/\w*/, 'post', produceNewsData);
Mock.mock('/api/test', /post|get/i, produceNewsData(10));

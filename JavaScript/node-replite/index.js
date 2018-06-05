var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var i = 0;
var url = "http://huaban.com/";  //初始化url

function fetchPage(x){  //封装了一层函数
    startRequest(x);
}

function startRequest(x){
    // 采用http模块向服务器发起一次get请求

    http.get(x,function(res){
        var html = ''; //用来存储请求网页的整个html内容
        var titles = [];
        res.setEncoding('utf-8'); // 防止中文乱码

        //监听data事件，每次取一块数据
        res.on('data',function(chunk){
            html += chunk;
        });

        //监听end事件，如果整个网页内容的html都获取完毕 就执行回调函数
        res.on('end',function(){
            var $ = cheerio.load(html); //采用cheerio模块解析html

            var time = $('.article-info a:after-child').next().text().trim();

            var news_item = {
                // 获取文章的标题
                title :$('div.article-title a').text.trim(),
                //火舞文章的发布时间
                Time:time,
                link:"http://www.ss.pku.edu.cn" + $("div.article-title a").attr('href'),
                author : $('[title = 供稿]').text.trim(),
                i:i+1,
            };
            console.log(news_item);
            var news_title = $('div.article a').text().trim();
            saveContent($,new_title);
            savedImg($,news_title);

            //下一篇文章的url

            var nextlink = "http://www.ss.pku.edu.cn" + $("li.next a").attr('href');
            str1 = nextlink.split('-');
            str = encodeURI(str1[0]);

            //这是亮点之一，通过控制I,可以控制爬取多少篇文章.
            if(i <= 500){
                fetchPage(str);
            }
        })
    }).on('error',function(err){
        console.log(err);
    });
}

//该函数的作用：在本地存储所爬取的新闻内容资源
function saveContent($,news_title){
    $('article-content p').each(function (index ,item){
        var x = $(this).text();

        var y = x.substring(0,2).trim();

        if(y == ''){
            x = x+'\n';
            //新闻文本内容一段一段天际到/data  文件夹下，并用新闻的标题来命名文件
            fs.appendFile('./data')+news_title+'.text',x,'utf-8',function(err){
                if(err){
                    console.log(err);
                }
            }
        }
    })
}

//该函数的作用：在本地存储所爬取的图片资源
function savedImg($,news_title){
    $('article-content img').each(function (index,item){
        var img_title = $(this).parent().next().trim(); //获取图片的标题

        if(img_title.length > 35 || img_title == ''){
            img_title = 'NUll';
        }
        var img_filename = img_title + '.jpg';

        var img_src = 'http://www.ss.pku.edu.cn' +$(this).attr('src'); //获取图片url

        //采用request 模块，向服务器发去一次请求，获取图片资源
        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err)
            }
        });
        request(img_src).pipe(fs.createWriteStream('./image/'+news_title + '---' + img_filename));
    })
}

fetchPage(url);

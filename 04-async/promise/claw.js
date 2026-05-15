var url = ["http://msxy.moocollege.com/index/team.html"];
var http = require('http');
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');
// var Promise = require('bluebird');

//获取页面数据
function getPageContent(url) {
	return new Promise((resolve, reject) => {
		console.log('正在爬取'+url);
		var html = "";
		http.get(url, (res) => {
			res.on('data', (data) =>{
				html += data;
			});
			res.on('end', () => {
				resolve(html);
			})
		}).on('error', (e) => {
			console.log("爬取" + url + "出错！");
			reject(e);
		})
	})
}

function saveImage(name, url){
	var extname = path.extname(url);
	var fileName = "./file/img/" + name  + extname;

	request(encodeURI(url))
	.pipe(fs.createWriteStream(fileName))
	.on('close', () => {
		console.log("保存图片");
	})
	.on('error', (err) => {
		console.log("保存图片出错");
	})
}

// 获取每个链接
function getUrls(html) {
	var $ = cheerio.load(html);
	var lists = $(".team").find('ul>li');
	var urls = [];

	lists.each((index, item) => {
		var imageurl = $(item).find('a').attr('href');
		urls.push(imageurl);
	});
	return urls;
}

function filterProfile(html) {
  console.log(html,"load");
	var $ = cheerio.load(html);
	var profile = $(".teacher-pro");

	var imageUrl = $(profile).find('img').attr('src');
	var name = $(profile).find('.teacher-info-txt>h3').first().text().trim();
	var position = $(profile).find('h4.f-cb>span').last().text().trim();
	var organization = $(profile).find('h4.f-cb>span').first().text().trim();
	var profileInfo = $(profile).find(".teacher-info-txt>p").first().text().trim();
	var companyInfo = $(profile).find(".teacher-info-txt>p").eq(1).text().trim();

	var info = {
		name: name,
		position: position,
		imageUrl: imageUrl,
		organization: organization,
		profileInfo: profileInfo,
		companyInfo: companyInfo
	};
	console.log(imageUrl);
	return info;
}

//输出爬取信息
function saveProfile(person){
	var data = "姓名： "  + person.name + "\n" +
				"职位： " + person.position + "\n" +
				"机构： " + person.organization + "\n" +
				"个人介绍： " + person.profileInfo + "\n" +
				"公司简介： " + person.companyInfo + "\n" +
				"===========================================\n";
	fs.appendFile('file/profile.txt', data, { encoding: 'utf8'}, (err) => {
  		if (err) throw err;
  		console.log(person);
	});
	return person;
}

// Promise
// 	.all(getPageContent(url))
// 	.then((html) => {
// 		var temp = html.join('');
// 		return getUrls(temp);
// 	})
// 	.then((urls) => {
// 		console.log(urls.length);
// 		urls.forEach((profileUrl, index) => {
// 			Promise
// 			.all(getPageContent(profileUrl))
// 			.then((html2) => {
// 				var temphtml2 = html2.join('');
// 				return  filterProfile(temphtml2);
// 			})
// 			.then((person) => {
// 				return saveProfile(person)
// 			})
// 			.then((person) => {
// 				saveImage(person.name, person.imageUrl);
// 			})
// 		})
// 	})

function fetchAll(urls) {
    return urls.reduce((promise, url) => {
      return promise.then(() => {
        console.log(url, "fetch");
        return fetch(url)
          .then(content => {
            console.log(content,"fuck");
              return filterProfile(content);
          })
          .then((info) =>{
              console.log(info,"dk");
              saveProfile(info);
            })
            .then(person => {
              saveImage(person.name, person.imageUrl)
            });
      })
    }, Promise.resolve());
}

function fetch(url) {
  return getPageContent(url)
  .then(content => {
    let links = getUrls(content);
    console.log(links);
    return fetchAll(links);
  })
   .catch((err) => {
      console.error(err);
    });
}

fetchAll(url);

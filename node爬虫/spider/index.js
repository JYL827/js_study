const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

// 通过https模块的get方法，请求网站链接在回调函数中获取资源
https.get('https://movie.douban.com/top250', (res) => {
  // console.log(res);
  // 因为获取到的资源是分段返回的，所以需要手动拼接(html)
  let html = ''
  // res.on类似于addEventlistener
  res.on('data', (chunk) => {
    html += chunk
  })

  // res数据加载完成，我们去执行xx逻辑
  res.on('end', () => {
    // 操作dom
    const $ = cheerio.load(html)
    let allFilms = []
    $('li .item').each(function() {
      const title = $('.title', this).text()
      const star = $('.rating_num', this).text()
      const pic = $('.pic img', this).attr('src')
      allFilms.push({title, star, pic})
      const data = JSON.stringify(allFilms);
      fs.writeFile('file.json', data, (err) => {
      if (err) throw err;
});
    })
    // console.log(allFilms);
  })
})

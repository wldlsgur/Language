const express = require('express');
const router = express.Router();
const template = require('../Function/template.js');//사용자 함수 사용

router.get('/', function(request, response){
    var list = template.List(request.list);
    //console.log(request.list);//파일 함수 사용해서 나온 파일 이름 목록
    var title = 'Welcome';
    var description = "Hello, Node.js";
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <img src = "/images/hello.png" style = "width:500px; display:block; margin-top:10px;">`,
      `<a href = "/topic/create">create</a>`);
    response.send(html);
  });
  module.exports = router;
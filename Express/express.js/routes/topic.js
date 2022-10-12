const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const sanitizeHtml = require('sanitize-html');
const template = require('../Function/template.js');

router.get('/create', function(request, response){
    var list = template.List(request.list);
    var title = 'WEB - CREATE';
    var html = template.HTML(title, list, `
    <form action = "/topic/create_process" method = "post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p><textarea name="description" placeholder="description"></textarea></p>
      <p><input type="submit"</p>
    </form>`,
      ``);
    //form action 하면 저기 url로 쿼리스트링이 자동 전송으로 생성된다 method post하면 쿼리스트링을 숨겨준다.
    response.send(html);
  })
  router.post('/create_process', function(request, response){//이건 post방식으로 전달댐
    var post = request.body;
    var title = post.title;//json 쿼리스트링에서 title값 가져오기
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.redirect(`/topic/page/${title}`);
     })
  })
  
  router.get(`/update/:pageId`, function(request, response){
    var filteredID = path.parse(request.params.pageId).base;
  
    fs.readFile(`data/${filteredID}`, 'utf-8', function(err, description){
      var list = template.List(request.list);
      var title = request.params.pageId;
      
      var html = template.HTML(title, list,
        `
        <form action = "/topic/update_process" method = "post">
          <input type = "hidden" name = "id" value = "${title}">
          <p><input type="text" name="title" placeholder="title" value = "${title}"></p>
          <p><textarea name="description" placeholder="description">${description}</textarea></p>
          <p><input type="submit"</p>
        </form>
        `,
        `<a href = "/topic/create">create</a>
         <a href ="/topic/update/${title}">update</a>
        <form action = "/topic/delete_process" method = "post">
          <input type = "hidden" name = "id" value = "${title}">
          <input type = "submit" value = "delete">
        </form>`);
        response.send(html);
      });
  })
  
  router.post(`/update_process`, function(request, response){
  var post = request.body;
  var id = post.id;
  var title = post.title;//json 쿼리스트링에서 title값 가져오기
  var description = post.description;
  
  fs.rename(`data/${id}`, `data/${title}`, function(err){//파일명 변경
    fs.writeFile(`data/${title}`, description, 'utf8', function(err){//파일쓰기
      response.writeHead(302 , {Location : `/?id = ${title}`});//302번은 이동해라 해당 url로
      response.redirect(`/topic/${title}`);
    })
  });
  })
  router.post(`/delete_process`, function (request, response) {
    var post = request.body;
    var id = post.id;
    var filteredID = path.parse(id).base;
    fs.unlink(`data/${filteredID}`, function(err)
    {
      response.status(200);
      response.redirect(`/`);//302번은 이동해라 해당 url로
    })
  })
  //url 파라미터로 접속하는 형식(params) 대칭 관계이다
  router.get('/page/:pageId/', function(request,response,next){
      var filteredID = path.parse(request.params.pageId).base;
      //쿼리 값을 파일 분석 결과 json으로 바꾼다. 보안을 위해
      //ex)../password.js로 들어오면 ..을 삭제해준다. 원하는 값만 받겠다
      fs.readFile(`data/${filteredID}`, 'utf-8', function(err, description){
        if(err){
          next(err);//밑에 app.use err의 함수가 실행이 된다.
        }
        var list = template.List(request.list);
        var title = request.params.pageId;
  
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(description, {
          allowedTags:[`h1`]
        });
  
        var html = template.HTML(sanitizedTitle, list,
          `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
          `<a href = "/topic/create">create</a>
          <a href ="/topic/update/${sanitizedTitle}">update</a>
          <form action = "/topic/delete_process" method = "post">
          <input type = "hidden" name = "id" value = "${sanitizedTitle}">
          <input type = "submit" value = "delete">
          </form>`);
        response.send(html);
        });
  });
  module.exports = router;
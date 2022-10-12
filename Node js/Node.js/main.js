var http = require('http');
var fs = require('fs');
var url = require('url');//url 모듈을 사용할것이다.
var querystring = require('querystring');
var template = require('./Function/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

////////////////////////////////////////////////////
var app = http.createServer(function(request, response) {//비동기식 함수 사용방법
  var _url = request.url;//url은 포트뒤에오는/부터의 값
  var queryData = url.parse(_url,true).query;//_url에서 query값을 json으로 변환
  //console.log(queryData);
  var pathname = url.parse(_url,true).pathname;//url json에서 pathname가져오기
  //console.log(pathname);
  if(pathname === '/')//홈으로 갔을때 /id=???? 홈의 쿼리스트링이다.
  {
    if(queryData.id === undefined)//NULL이 언디파인
    {
      fs.readdir('./data', function(error, filelist){
        var list = template.List(filelist);
        var title = 'Welcome';
        var description = "Hello, Node.js";
        var html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          ``);
        response.writeHead(200);//200번 접속 성공
        response.end(html);
      });
    }
    else//쿼리스트링이 있을때
    {
      fs.readdir('./data', function(error, filelist){
        var filteredID = path.parse(queryData.id).base;//쿼리 값을 파일 분석 결과 json으로 바꾼다. 보안을 위해
        //ex)../password.js로 들어오면 ..을 삭제해준다. 원하는 값만 받겠다
        fs.readFile(`data/${filteredID}`, 'utf-8', function(err, description){
          var list = template.List(filelist);
          var title = queryData.id;//queryData.id 는 ?id = xxx 의 값

          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description);

          var html = template.HTML(sanitizedTitle, list,
            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
            `<a href = "/create">create</a> <a href ="/update?id=${sanitizedTitle}">update</a>
            <form action = "delete_process" method = "post">
            <input type = "hidden" name = "id" value = "${sanitizedTitle}">
            <input type = "submit" value = "delete">
            </form>`);
          response.writeHead(200);//200번 접속 성공
          response.end(html);
          });
      });
    }
  }
////////////////////////////////////////////////////

////////////////////////////////////////////////////
  else if(pathname === '/delete')
  {
    fs.readdir('./data', function(error, filelist){
      var list = template.List(filelist);
      var title = 'WEB - DELETE';
      var html = template.HTML(title, list, `
      <form action = "/create_process" method = "post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p><textarea name="description" placeholder="description"></textarea></p>
        <p><input type="submit"</p>
      </form>`,
      `<a href = "/create">create</a>
       <a href ="/update?id=${title}">update</a>
       <form action = "delete_process" method = "post">
        <input type = "hidden" name = "id" value = "${title}">
        <input type = "submit" value = "delete">
       </form>`);
      //form action 하면 저기 url로 쿼리스트링이 자동 전송으로 생성된다 method post하면 쿼리스트링을 숨겨준다.
      response.writeHead(200);//200번 접속 성공
      response.end(html);
    });
  }
  else if(pathname === '/delete_process')
  {
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });
    request.on('end',function(){
      var post = querystring.parse(body);//쿼리 스트링 json 형식 객체화
      var id = post.id;
      var filteredID = path.parse(id).base;
      fs.unlink(`data/${filteredID}`, function(err)
      {
        response.writeHead(302 , {Location : `/`});//302번은 이동해라 해당 url로
        response.end('success');
      })
    });
  }
////////////////////////////////////////////////////
  else if(pathname === '/create')
  {
    fs.readdir('./data', function(error, filelist){
      var list = template.List(filelist);
      var title = 'WEB - CREATE';
      var html = template.HTML(title, list, `
      <form action = "/create_process" method = "post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p><textarea name="description" placeholder="description"></textarea></p>
        <p><input type="submit"</p>
      </form>`,`<a href = "/create">create</a> <a href ="/update?id=${title}">update</a> 
      <form action = "delete_process" method = "post">
        <input type = "hidden" name = "id" value = "${title}">
        <input type = "submit" value = "delete">
      </form>`);
      //form action 하면 저기 url로 쿼리스트링이 자동 전송으로 생성된다 method post하면 쿼리스트링을 숨겨준다.
      response.writeHead(200);//200번 접속 성공
      response.end(html);
    });
  }
  else if(pathname === '/create_process')
  {
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });
    request.on('end',function(){
      var post = querystring.parse(body);//쿼리 스트링 json 형식 객체화
      var title = post.title;//json 쿼리스트링에서 title값 가져오기
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302 , {Location : `/?id = ${title}`});//302번은 이동해라 해당 url로
        response.end('success');
      })
    });
  }
////////////////////////////////////////////////////


////////////////////////////////////////////////////
  else if(pathname === '/update')
  {
    fs.readdir('./data', function(error, filelist){
      var list = template.List(filelist);
      var filteredID = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredID}`, 'utf-8', function(err, description){
        var title = queryData.id;//queryData.id 는 ?id = xxx 의 값
        var html = template.HTML(title, list,
          `
          <form action = "/update_process" method = "post">
          <input type = "hidden" name = "id" value = "${title}">
          <p><input type="text" name="title" placeholder="title" value = "${title}"></p>
          <p><textarea name="description" placeholder="description">${description}</textarea></p>
          <p><input type="submit"</p>
          </form>
          `
          ,`<a href = "/create">create</a> <a href ="/update?id=${title}">update</a>
          <form action = "delete_process" method = "post">
            <input type = "hidden" name = "id" value = "${title}">
            <input type = "submit" value = "delete">
          </form>`);
        response.writeHead(200);//200번 접속 성공
        response.end(html);
        });
    });
  }
  else if(pathname === '/update_process')
  {
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });
    request.on('end',function(){
      var post = querystring.parse(body);//쿼리 스트링 json 형식 객체화
      var id = post.id;
      var title = post.title;//json 쿼리스트링에서 title값 가져오기
      var description = post.description;

      fs.rename(`data/${id}`, `data/${title}`, function(err){//파일명 변경
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){//파일쓰기
          response.writeHead(302 , {Location : `/?id = ${title}`});//302번은 이동해라 해당 url로
          response.end('success');
        })
      });
    });
  }
////////////////////////////////////////////////////

  else//쿼리스트링이 없을때
  {
    response.writeHead(404);//접속불가
    response.end('Not found');
  }
});
app.listen(3000);
//56
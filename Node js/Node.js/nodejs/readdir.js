const testFolder = './data';
const fs = require('fs');

fs.readdir(testFolder, function(error, filelist){//data 디렉토리에서 file목록을 배열로 반환
    console.log(filelist);
})
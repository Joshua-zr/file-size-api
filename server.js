var express = require('express');
var path = require('path');
var multer = require('multer');
var fs = require('fs');
var app = express();
var uploading = multer({
  dest: path.join(__dirname + '/view'),
})

app.use(express.static(path.join(__dirname + '/view')));


app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.post('/file', uploading.single('uploadFile'), (req, res) => {
  var fileSize = req.file.size;
  var obj = {
    fileSize: fileSize,
  }
  console.log(obj.fileSize);
  // fs.stat(req.file.path, (err, stats) => {
  //   if (err) throw err;
  //   res.end(stats.size);
  // })
  // res.send(fileSize);
  res.json(obj);
})

app.listen(process.env.PORT || 5000);
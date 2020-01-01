var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mysql = require('mysql');

http.createServer(function (req, res) {
  if (req.url == '/formdata') {
    
var con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "root",
  database : "nodejs"
});


    var form = new formidable.IncomingForm();

    form.parse(req,function(err,field){
      con.connect(function(err){
          if(err) throw err;
          var sql = "INSERT INTO customers (name,address) VALUES ('"+field.name+"','"+field.address+"')";
          con.query(sql, function(err,result){
          if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('INSERT DATA SUCCESSFULLY!');
        });
      });
    });

    /*form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/var/www/html/ashish/nodejs/fileupload/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });*/
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="formdata" method="post" enctype="multipart/form-data">');
    res.write('<input type="text" name="name"><br>');
    res.write('<input type="text" name="address"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
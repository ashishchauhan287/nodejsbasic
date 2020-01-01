var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "root",
	database : "nodejs"
});

con.connect(function(err){
	if(err) throw err;
	con.query("SELECT * FROM customers WHERE address = 'ABC Road 32'",function(err,result){
		if(err) throw err;
		console.log(result);
	});
});
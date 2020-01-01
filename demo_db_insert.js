var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "root",
	database : "nodejs"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
	var sql = "INSERT INTO customers (name,address) VALUES ('Company Pvt','ABC Road 32')";
	con.query(sql, function(err,result){
		if(err) throw err;
		console.log("1 record inserted");
	});
}); 
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ptbaa1234',
    database : 'node'
});
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

exports.register = function(req,res){
    // console.log("req",req.body);
    var today = new Date();
    bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
        var users = {
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": bcryptedPassword,
            "created": today,
            "modified": today
        }
    });
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            console.log('The solution is: ', results);
            res.send({
                "code":200,
                "success":"user registered sucessfully"
            });
        }
    });
}

    exports.login = function(req,res){
        var email= req.body.email;
        var password = req.body.password;
        connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
            if (error) {
                // console.log("error ocurred",error);
                res.send({
                    "code":400,
                    "failed":"error ocurred"
                })
            }else{
                // console.log('The solution is: ', results);
                if(results.length >0){
                    bcrypt.compare(password, results[0].password, function(err, doesMatch){
                        if (doesMatch){
                            res.send({
                                "code":200,
                                "success":"login sucessfull"
                            });
                        }else{
                            res.send({
                                "code":204,
                                "success":"Email and password does not match"
                            });
                        }
                    });
                }
                else{
                    res.send({
                        "code":204,
                        "success":"Email does not exits"
                    });
                }
            }
        });
    }
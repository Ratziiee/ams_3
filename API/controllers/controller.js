const { db, pg, pool} = require('../../config/dbConfig');
const msgs = require('../../config/constants');
var cron = require('node-cron');


module.exports.test = (req,res) => {
    var query = `SELECT *
	FROM public.test;`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Fetched", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.post_loginDataToServer = (req,res) => {

    let MOBILE = req.query.mobile;
    let PWD = req.query.pwd;
    let USERNAME = req.query.username;


    // let query = `id SERIAL PRIMARY KEY,
    // mobile numeric NOT NULL,
    // password text NOT NULL,
    // user_id text NOT NULL,
    // username text NOT NULL,
    // unique_device_id text`;

    let query =`INSERT INTO public.user_master(
        mobile, password, username)
        VALUES ('${MOBILE}', '${PWD}', ${USERNAME}')`;
    
    let query_2 = `SELECT * FROM public.user_master where mobile = '${MOBILE}'`


        db.query(query).then((data) => {

            
            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.get_userFromMobileNo = (req,res) => {

    let MOBILE = req.query.mobile;
    
    var query = `SELECT * FROM public.user_master where mobile = '${MOBILE}`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Fetched", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}






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
    let USERID="ID_"+req.query.build_no;
    let UNIQUE_DEVICE_ID=req.query.build_no;
    let COUNTRY_CODE = req.query.country_code;
    let ISADMIN = false;


    // let query = `id SERIAL PRIMARY KEY,
    // mobile numeric NOT NULL,
    // password text NOT NULL,
    // user_id text NOT NULL,
    // username text NOT NULL,
    // unique_device_id text`;

    let query =`INSERT INTO public.user_master(
        mobile, password, user_id ,username, unique_device_id,country_code,is_admin)
        VALUES ('${MOBILE}', '${PWD}', '${USERID}' ,'${USERNAME}', '${UNIQUE_DEVICE_ID}','${COUNTRY_CODE}',${ISADMIN})`;
    

        db.query(query).then((data) => {

            
            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.get_userFromMobileNo = (req,res) => {

    let MOBILE = req.query.mobile;

    var query = `SELECT * FROM public.user_master where mobile = '${MOBILE}'`;
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

module.exports.post_updatePassword = (req,res) => {

    let MOBILE = req.query.mobile;
    let PWD = req.query.pwd;


    let query =`UPDATE public.user_master SET password = '${PWD}' WHERE mobile = '${MOBILE}'`;
    

        db.query(query).then((data) => {

            
            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.get_Login = (req,res) => {

    let MOBILE = req.query.mobile;
    let PASSWORD = req.query.pwd;

    var query = `SELECT * FROM public.user_master where mobile = '${MOBILE}' and password = '${PASSWORD}'`;
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

module.exports.post_organizationMaster = (req,res) => {

    let ORGANIZATION_NAME = req.query.org_name;
    let INDUSTRY = req.query.industry;
    let COUNTRY = req.query.country;
    let ORG_CODE = req.query.org_code;


    let query =`INSERT INTO public.organization_master(
        organization_name, organization_code ,industry ,country)
        VALUES ('${ORGANIZATION_NAME}', '${ORG_CODE}' ,'${INDUSTRY}', '${COUNTRY}')`;
    

        db.query(query).then((data) => {

            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.post_updateAdmin = (req,res) => {

    let MOBILE = req.query.mobile;
    let ISADMIN = true;
    let ORGANIZATION_NAME = req.query.org_name;

    var split = ORGANIZATION_NAME.split(" ");
    var time = Date.now(); 
    let ORGANIZATION_CODE = `${split[0]}_${time}`;


    let query =`UPDATE public.user_master SET organization_name = '${ORGANIZATION_NAME}', organization_code = '${ORGANIZATION_CODE}', is_admin = ${ISADMIN} 
     WHERE mobile = '${MOBILE}'`;
    
    
        db.query(query).then((data) => {

            
            res.send({statusCode : 200, message : "Data Successfully Saved", data:[{org_name : ORGANIZATION_NAME, org_code: ORGANIZATION_CODE, mobile :MOBILE }]});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.get_org_details = (req,res) => {


    let ORG_CODE = req.query.org_code;


    var query = `SELECT * FROM public.organization_master where organization_code = '${ORG_CODE}'`;
    

        db.query(query).then((data) => {

            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.post_addDataForApproval = (req,res) => {

    let MOBILE = req.query.mobile;
    let ISAPPROVED = false;
    let ORGANIZATION_NAME = req.query.org_name;
    var TIMESTAMP = Date.now(); 
    let ORGANIZATION_CODE = req.query.org_code;


    let query =`INSERT INTO public.organization_approval(
        organization_name, organization_code ,user_mobile ,timestamp, is_approved)
        VALUES ('${ORGANIZATION_NAME}', '${ORGANIZATION_CODE}' ,'${MOBILE}', '${TIMESTAMP}','${ISAPPROVED}')`;
    
    
        db.query(query).then((data) => {

            
            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.get_org_requests = (req,res) => {


    let ORG_CODE = req.query.org_code;


    var query = `SELECT * FROM public.organization_approval where organization_code = '${ORG_CODE}' and is_approved = false`;
    

        db.query(query).then((data) => {

            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.post_updateUser = (req,res) => {

    let MOBILE = req.query.mobile;
    let ISADMIN = false;
    let ORGANIZATION_NAME = req.query.org_name;
    let ORGANIZATION_CODE = req.query.org_code;


    let query =`UPDATE public.user_master SET organization_name = '${ORGANIZATION_NAME}', organization_code = '${ORGANIZATION_CODE}', is_admin = ${ISADMIN} 
     WHERE mobile = '${MOBILE}'`;
    
    
        db.query(query).then((data) => {

            
            res.send({statusCode : 200, message : "Data Successfully Saved", data:[{org_name : ORGANIZATION_NAME, org_code: ORGANIZATION_CODE, mobile :MOBILE }]});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.post_UpdateDataForApproval = (req,res) => {

    let MOBILE = req.query.mobile;
    let ISAPPROVED = true;
    let ORGANIZATION_CODE = req.query.org_code;

    
        let query =`UPDATE public.organization_approval SET is_approved = '${ISAPPROVED}' WHERE user_mobile = '${MOBILE}' and organization_code = '${ORGANIZATION_CODE}'`;
    
        db.query(query).then((data) => {
            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.get_Approval_Status = (req,res) => {

    let MOBILE = req.query.mobile;

    
    var query = `SELECT * FROM public.organization_approval where user_mobile = '${MOBILE}'`;
    
        db.query(query).then((data) => {
            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}

module.exports.get_Rejection_Request = (req,res) => {

    let MOBILE = req.query.mobile;
    let IS_APPROVED = false;

    var query = `DELETE FROM public.organization_approval
    WHERE user_mobile = '${MOBILE}' and is_approved = ${IS_APPROVED}`
   
 
        db.query(query).then((data) => {
            res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        }).catch((error) => {
            res.send({statusCode : 500, message : error.message,data : []});
        });
}





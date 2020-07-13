const { db, pg, pool} = require('../../config/dbConfig');
const msgs = require('../../config/constants');
var cron = require('node-cron');





module.exports.test = (req,res) => {
    var query = `SELECT id, userid, password, type
	FROM public.login_master;`;
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

module.exports.getAllEmployees = (req,res) => {
    var query = `SELECT *
	FROM public.user_master`;
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

module.exports.postAddEmployee = (req,res) => {

    let name=req.query.name;
    let email=req.query.email;
    let mobile=req.query.mobile;
    let designation = req.query.designation;
    let department = req.query.department;
    let emp_id = req.query.emp_id;
    let employee_type = req.query.employee_type;

    var query = `INSERT INTO public.user_master(
        name, email, mobile, designation, department, emp_id, emp_type)
        VALUES ('${name}', '${email}', ${mobile}, '${designation}', '${department}', '${emp_id}', '${employee_type}')`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        // res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.getAllEmployeesLogs = (req,res) => {
    var query = `SELECT *
	FROM public.attendance_master`;
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

module.exports.getSingleEmployeesLogs = (req,res) => {

    let emp_id = req.query.emp_id;
    let mobile = req.query.mobile;

    var query = `SELECT *
	FROM public.attendance_master where emp_id = '${emp_id}' and mobile = ${mobile}`;
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


module.exports.postEditProfile = (req,res) => {

    let id = req.query.id;
    let name=req.query.name;
    let email=req.query.email;
    let mobile=req.query.mobile;
    let designation = req.query.designation;
    let department = req.query.department;
    let emp_id = req.query.emp_id;
    let employee_type = req.query.employee_type;

    var query = `UPDATE public.user_master
    SET name='${name}', email='${email}' , mobile=${mobile}, designation='${designation}',
     department='${department}', emp_id='${emp_id}', emp_type='${employee_type}'
    WHERE id= ${id}`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.addVisitor = (req,res) => {

    
    let name=req.query.name;
    let email=req.query.email;
    let mobile=req.query.mobile;
    let companyname = req.query.companyname;
    let purpose = req.query.purpose;
    let meetingwith = req.query.meetingwith;
    let date = req.query.date;
    let time = req.query.time;

    var query = `INSERT INTO public.visitor_master(
        name, mobile, email, purpose, meetingwith, companyname, date, "time")
        VALUES ( '${name}', ${mobile}, '${email}', '${purpose}', '${meetingwith}', '${companyname}' , '${date}' , '${time}')`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.addGuard = (req,res) => {

    
    let name=req.query.name;
    let imei=req.query.imei;
    let mobile=req.query.mobile;
    let status = false;
    let email = req.query.email;
    

    var query = `INSERT INTO public.guard_master(
        name, imei, mobile,status,email)
        VALUES ('${name}', ${imei}, ${mobile},${status},'${email}');`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.deleteEmployee = (req,res) => {

    
    let id=req.query.id;
    
    var query = `DELETE FROM public.user_master
	WHERE id =${id}`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.deleteGuard = (req,res) => {

    
    let id=req.query.id;
    
    var query = `DELETE FROM public.guard_master
	WHERE id =${id}`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.deleteVisitor = (req,res) => {

    
    let id=req.query.id;
    
    var query = `DELETE FROM public.visitor_master
	WHERE id =${id}`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.deleteAllVisitor = (req,res) => {
    
    var query = `DELETE FROM public.visitor_master`;
    
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.addEmployeeLogs = (req,res) => {

    
    let emp_id=req.query.emp_id;
    let status=req.query.status;
    let mobile=req.query.mobile;
    let username=req.query.username;
    let timestamp = Date.now();
    let designation = req.query.designation;
    let emp_type = req.query.emp_type;
    let department = req.query.department;
    let email = req.query.email;
    
    

    var query = `INSERT INTO public.attendance_master(
        emp_id, mobile, status, username, "timestamp", designation, emp_type, department,email)
        VALUES ('${emp_id}', ${mobile}, '${status}', '${username}','${timestamp}' , '${designation}', '${emp_type}', '${department}', '${email}')`;
    
        console.log(query);

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.login = (req,res) => {

    let userid = req.query.userid;
    let password = req.query.password;
    let type = req.query.type;

    var query = `SELECT * 
	FROM public.login_master where userid = '${userid}' and password = '${password}' and type = '${type}'`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        if(data.length > 0)
        {
            res.send({statusCode : 200, message : "Data Successfully Fetched", data:data});
        }
        else
        {
            res.send({statusCode : 404, message : "No User Found", data:data});
        }
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.changePassword = (req,res) => {

    
    let id=req.query.id;
    let userid=req.query.userid;
    let newPassword=req.query.newPassword;
    

    var query = `UPDATE public.login_master
	SET  password='${newPassword}'
	WHERE id = ${id} and userid = ${userid}`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Password Successfully Changed", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.getAllDesignation = (req,res) => {
    var query = `SELECT distinct(designation)
	FROM public.user_master`;
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

module.exports.getAllDepartment = (req,res) => {
    var query = `SELECT distinct(department)
	FROM public.user_master`;
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

module.exports.getAllEmployeeType = (req,res) => {
    var query = `SELECT distinct(emp_type)
	FROM public.user_master`;
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

module.exports.getAllGuard = (req,res) => {
    var query = `SELECT *
	FROM public.guard_master`;
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

module.exports.updateGuardStatus = (req,res) => {

    let imei = req.query.imei;
    let status = req.query.status; 

    var query = `UPDATE public.guard_master
	SET  status=${status}
	WHERE imei = ${imei}`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        // res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.getSingleEmployeesDetails = (req,res) => {

    let EMAIL = req.query.email;

    var query = `SELECT *
	FROM public.user_master where email = '${EMAIL}'`;
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


module.exports.updatePassword = (req,res) => {

    let USERNAME = req.query.username;
    let NEW_PWD = req.query.newPwd; 
    let TYPE = req.query.type;

    var query = `UPDATE public.login_master
	SET  password='${NEW_PWD}'
	WHERE userid='${USERNAME}' AND type = '${TYPE}';`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        // res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}


module.exports.getQrCodeDetails = (req,res) => {

    let EMAIL = req.query.userid;

    var query = `SELECT *
	FROM public.qr_code_master where username = '${EMAIL}'`;
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

module.exports.getSingleEmployeesLogsByEmail = (req,res) => {

    let userid = req.query.userid;
    

    var query = `SELECT *
	FROM public.attendance_master WHERE EMAIL = '${userid}';`;
    debugger

    console.log(query)
    db.any(query).then((data) => {
        console.log('data logs aaya',formatDate(parseInt(data[0].timestamp)));
        
        
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");

        res.send({statusCode : 200, message : "Data Successfully Fetched", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

function formatDate(date) {
    console.log("format date :",date);
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
// console.log("day",day)
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
        console.log([day, month, year].join('-'))
    return [day, month, year].join('-');
}

module.exports.addToLoginMaster = (req,res) => {

    let USERNAME = req.query.username;
    let PWD = req.query.pwd; 
    let TYPE = req.query.type;

    var query = `INSERT INTO public.login_master(
        userid, password, type)
        VALUES ('${USERNAME}', '${PWD}', '${TYPE}')`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        // res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.postQrCodeData = (req,res) => {

    let USERNAME = req.query.email;
    let MOBILE = req.query.mobile; 
    let EMP_ID = req.query.emp_id;
    let DESIGNATION = req.query.designation;
    let EMP_TYPE = req.query.emp_type;
    let DEPARTMENT = req.query.department;
    let EMP_NAME = req.query.emp_name;
    let DATE = formatDate(new Date());


    var query = `INSERT INTO public.qr_code_master(
         username, mobile,valid_upto ,emp_id, designation, emp_type, department, emp_name)
        VALUES ( '${USERNAME}', ${MOBILE} ,'${DATE}' ,'${EMP_ID}', '${DESIGNATION}', '${EMP_TYPE}', '${DEPARTMENT}', '${EMP_NAME}')`;
    
    debugger
    
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
        // res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

cron.schedule('0 1 * * *', updateDateForQR(), {
    scheduled: true,
    timezone: "Asia/Kolkata",
});



function formatDate(date) {
    console.log("format date :",date);
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
// console.log("day",day)
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
        console.log([day, month, year].join('/'))
    return [day, month, year].join('/');
}

module.exports.deleteEmployeeFromLogin = (req,res) => {

    
    let userid=req.query.userid;
    
    var query = `DELETE FROM public.login_master
	WHERE userid ='${userid}'`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.deleteEmployeeFromQR = (req,res) => {

    
    let username=req.query.username;
    
    var query = `DELETE FROM public.qr_code_master
	WHERE username ='${username}'`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.deleteEmployeeFromUserlogs = (req,res) => {

    
    let email=req.query.email;
    
    var query = `DELETE FROM public.attendance_master
	WHERE email ='${email}'`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.deleteGuardFromLogin = (req,res) => {

    
    let userid=req.query.userid;
    
    var query = `DELETE FROM public.login_master
	WHERE userid ='${userid}'`;
    

    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send({statusCode : 200, message : "Data Successfully Deleted", data:data});
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}

module.exports.getSingleGuard = (req,res) => {

    let EMAIL = req.query.email;

    var query = `SELECT *
	FROM public.guard_master where email='${EMAIL}'`;
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

module.exports.getAllVisitor = (req,res) => {
    var query = `SELECT *
	FROM public.visitor_master`;
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

function updateDateForQR() {
    let date = formatDate(new Date());
    
    var query = `UPDATE public.qr_code_master
	SET valid_upto='${date}'`;
   
   debugger
   
   db.any(query).then((data) => {
       console.log('data aaya',data);
       // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
       res.send({statusCode : 200, message : "Data Successfully Saved", data:data});
       // res.send(data);
   }).catch((err) => {
       console.log('error aaya',err);
       res.send({statusCode : 500, message : err.message});
   });
}

module.exports.getForgotPasswordDetails = (req,res) => {

    let email = req.query.email;
    

    var query = `SELECT * 
	FROM public.login_master where userid = '${email}'`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        if(data.length > 0)
        {
            res.send({statusCode : 200, message : "Data Successfully Fetched", data:data});
        }
        else
        {
            res.send({statusCode : 404, message : "No User Found", data:data});
        }
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        
    }).catch((err) => {
        console.log('error aaya',err);
        res.send({statusCode : 500, message : err.message});
    });
}
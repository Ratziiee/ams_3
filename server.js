let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const routes = require('./API/routes/routess')




app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',  parameterLimit: 100000,extended : true}));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 

  app.use('/',routes);

  app.listen(PORT, () => console.log('Lestining to port '+PORT))

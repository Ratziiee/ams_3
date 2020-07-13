let main_obj = {};

main_obj.db = {};
main_obj.db.user = 'postgres';
main_obj.db.pwd = 'ratziiee';
// main_obj.db.dbName = 'nhai_ams';
main_obj.db.dbName = 'postgres';
// main_obj.db.host = 'localhost';
main_obj.db.host = 'ams.carzqrhlvekg.ap-south-1.rds.amazonaws.com';
main_obj.db.port = 5432;
main_obj.db.maxConnections = 50;
main_obj.db.idleTimeoutMillis = 30000;

main_obj.geoServer = {};
main_obj.geoServer.host = 'localhost';
main_obj.geoServer.port = 8080;
main_obj.geoServer.credential = 'admin:geoserver';

main_obj.server = {};
main_obj.server.port = 5002;

main_obj.msgs = {};

//--------------------UNIVERSAL ERROR MSG--------------------------------//

main_obj.msgs.error = "The request was not completed. The server met an unexpected condition.";

//----------------------------------//------------------------------------

module.exports.main_obj = main_obj;
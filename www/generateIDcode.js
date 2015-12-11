module.exports = {
    idcode : function(type, user_id, dev_id, num, successCallback, errorCallback) {
        cordova.exec(successCallback,
                     errorCallback,
                     "generateIDCode",
                     "idCode",
                     [type, user_id, dev_id, num]);
        
    }
};
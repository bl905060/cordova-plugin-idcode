module.exports = {
    idCode : function(type, successHandler, errorHandler) {
        cordova.exec(successHandler,
                     errorHandler,
                     "generateIDCode",
                     "idCode",
                     [type]);
        
    },
    
    shortCode : function() {type, successHandler, errorHandler) {
        cordova.exec(successHandler,
                     errorHandler,
                     "generateIDCode",
                     "shortCode",
                     [type]);
    }
};
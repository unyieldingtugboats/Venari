angular.module('scavengerhunt.huntfactory', [])
.factory('HuntFact', function(request) {
  var hunts = []; 
  return {

    //get hunts from the database by making a request to api/hunts
    getHunts: function(zip, callback) {
      var zipCode = '';
      if (zip) {
        zipCode = '?zip='+zip;
      }

      request.request('http://127.0.0.1:3000/api/hunts' + zipCode, null, function(data) {
        callback(data);
      });
    }

  }
});

(function() {
  var Users;

  Users = (function() {
    function Users() {
      this.collection = "users";
    }

    Users.prototype.all = function(res, callback) {
      var _this = this;

      return Db.createCollection(this.collection, function(err, collection) {
        if (err) {
          throw err;
        }
        return collection.find().toArray(function(err, records) {
          if (err) {
            throw err;
          }
          return callback(res, records);
        });
      });
    };

    return Users;

  })();

  global.Users = new Users;

}).call(this);

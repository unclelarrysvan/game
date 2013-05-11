(function() {
  var User;

  User = (function() {
    function User(data) {
      data = data || {};
      this.collection = "users";
      this.userName = data.userName;
    }

    User.prototype.toJson = function() {
      return {
        userName: this.userName
      };
    };

    User.prototype.save = function() {
      var _this = this;

      return Db.createCollection(this.collection, function(err, collection) {
        if (err) {
          throw err;
        }
        return collection.insert(_this.toJson(), function(err, records) {
          if (err) {
            throw err;
          }
          return console.log("Record added as " + records[0]._id);
        });
      });
    };

    return User;

  })();

  global.User = User;

}).call(this);

(function() {
  var Users;

  Users = (function() {
    function Users() {
      this.collection = "users";
      this.ObjectID = require('mongodb').ObjectID;
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

    Users.prototype.find = function(id, response, callback) {
      var _this = this;

      return Db.createCollection(this.collection, function(err, collection) {
        if (err) {
          throw err;
        }
        return collection.find({
          _id: new _this.ObjectID(id)
        }).nextObject(function(err, record) {
          if (err) {
            throw err;
          }
          return callback(response, record);
        });
      });
    };

    return Users;

  })();

  global.Users = new Users;

}).call(this);

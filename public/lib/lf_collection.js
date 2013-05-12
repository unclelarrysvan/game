(function() {
  var LFCollection;

  LFCollection = (function() {
    function LFCollection() {}

    LFCollection.prototype.ObjectID = require('mongodb').ObjectID;

    LFCollection.prototype.getCollection = function(callback) {
      var _this = this;

      return Db.createCollection(this.collection, function(err, collection) {
        if (err) {
          throw err;
        }
        return callback(collection);
      });
    };

    LFCollection.prototype.all = function(res, callback) {
      var _this = this;

      return this.getCollection(function(collection) {
        return collection.find().toArray(function(err, records) {
          if (err) {
            throw err;
          }
          return callback(res, records);
        });
      });
    };

    LFCollection.prototype.find = function(id, response, callback) {
      var _this = this;

      return this.getCollection(function(collection) {
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

    LFCollection.prototype.save = function(obj, response, callback) {
      var _this = this;

      return this.getCollection(function(collection) {
        return collection.insert(obj, function(err, records) {
          if (err) {
            throw err;
          }
          return callback(response);
        });
      });
    };

    LFCollection.prototype.update = function(params, response, callback) {
      var _id,
        _this = this;

      _id = params._id;
      delete params._id;
      return this.getCollection(function(collection) {
        return collection.update({
          _id: new _this.ObjectID(_id)
        }, {
          $set: params
        }, function(err, record) {
          if (err) {
            throw err;
          }
          return callback(response, record);
        });
      });
    };

    LFCollection.prototype["delete"] = function(id, response, callback) {
      var _this = this;

      return this.getCollection(function(collection) {
        return collection.remove({
          _id: new _this.ObjectID(id)
        }, function(err) {
          if (err) {
            throw err;
          }
          return callback(response);
        });
      });
    };

    return LFCollection;

  })();

  global.LFCollection = LFCollection;

}).call(this);

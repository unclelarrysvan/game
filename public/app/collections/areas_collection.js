(function() {
  var Areas,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Areas = (function(_super) {
    __extends(Areas, _super);

    function Areas() {
      this.collection = "areas";
    }

    Areas.prototype.findStartingArea = function(response, callback) {
      var _this = this;

      return this.getCollection(function(collection) {
        return collection.find({
          "startingArea": "on"
        }).toArray(function(err, records) {
          if (err) {
            throw err;
          }
          return callback(response, records[0]);
        });
      });
    };

    return Areas;

  })(LFCollection);

  global.Areas = new Areas;

}).call(this);

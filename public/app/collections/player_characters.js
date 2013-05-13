(function() {
  var PlayerCharacters,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PlayerCharacters = (function(_super) {
    __extends(PlayerCharacters, _super);

    function PlayerCharacters() {
      this.collection = "playerCharacters";
    }

    PlayerCharacters.prototype.findForUser = function(user, response, callback) {
      var _this = this;

      return this.getCollection(function(collection) {
        return collection.find({
          user_id: _this.ObjectID(user._id.toString())
        }).toArray(function(err, records) {
          if (err) {
            throw err;
          }
          return callback(response, records);
        });
      });
    };

    return PlayerCharacters;

  })(LFCollection);

  global.PlayerCharacters = new PlayerCharacters;

}).call(this);

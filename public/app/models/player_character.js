(function() {
  var PlayerCharacter,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PlayerCharacter = (function(_super) {
    __extends(PlayerCharacter, _super);

    function PlayerCharacter(data) {
      data = data || {};
      if (data._id) {
        this._id = this.ObjectID(data._id);
      }
      this.user_id = data.user_id;
      this.name = data.name;
    }

    return PlayerCharacter;

  })(LFModel);

  global.PlayerCharacter = PlayerCharacter;

}).call(this);

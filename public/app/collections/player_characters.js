(function() {
  var PlayerCharacters,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PlayerCharacters = (function(_super) {
    __extends(PlayerCharacters, _super);

    function PlayerCharacters() {
      this.collection = "playerCharacters";
    }

    return PlayerCharacters;

  })(LFCollection);

  global.PlayerCharacters = new PlayerCharacters;

}).call(this);

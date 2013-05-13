(function() {
  var PlayerCharactersController, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PlayerCharactersController = (function(_super) {
    __extends(PlayerCharactersController, _super);

    function PlayerCharactersController() {
      _ref = PlayerCharactersController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PlayerCharactersController.prototype.index = function(req, response) {
      var _this = this;

      return PlayerCharacters.all(response, function(response, records) {
        return response.render("playerCharacters/index", {
          records: records
        });
      });
    };

    PlayerCharactersController.prototype.show = function(req, res) {
      var query;

      query = this.getParams(req);
      return PlayerCharacters.find(query.id, res, function(response, playerCharacter) {
        return response.render("playerCharacters/show", {
          playerCharacter: playerCharacter
        });
      });
    };

    PlayerCharactersController.prototype["new"] = function(req, res) {
      var playerCharacter;

      playerCharacter = new PlayerCharacter;
      return res.render("playerCharacters/new", {
        playerCharacter: playerCharacter
      });
    };

    PlayerCharactersController.prototype.save = function(req, response) {
      var playerCharacter;

      playerCharacter = new PlayerCharacter(req.body);
      return PlayerCharacters.save(playerCharacter, response, function(respose) {
        return response.redirect("/playerCharacters");
      });
    };

    PlayerCharactersController.prototype.edit = function(req, response) {
      var query,
        _this = this;

      query = this.getParams(req);
      return PlayerCharacters.find(query.id, response, function(response, playerCharacter) {
        return response.render("playerCharacters/edit", {
          playerCharacter: playerCharacter
        });
      });
    };

    PlayerCharactersController.prototype["delete"] = function(req, response) {
      var query,
        _this = this;

      query = this.getParams(req);
      return PlayerCharacters["delete"](query.id, response, function(response) {
        return response.redirect("/playerCharacters");
      });
    };

    return PlayerCharactersController;

  })(ApplicationController);

  global.PlayerCharactersController = new PlayerCharactersController;

}).call(this);

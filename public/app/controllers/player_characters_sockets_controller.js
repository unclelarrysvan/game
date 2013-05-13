(function() {
  var PlayerCharactersSocketsController, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PlayerCharactersSocketsController = (function(_super) {
    __extends(PlayerCharactersSocketsController, _super);

    function PlayerCharactersSocketsController() {
      _ref = PlayerCharactersSocketsController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PlayerCharactersSocketsController.prototype.forUser = function(socket) {
      var client,
        _this = this;

      client = Clients.find(socket.id);
      return PlayerCharacters.findForUser(client.user, socket, function(socket, records) {
        return socket.emit("player_characters/index", {
          html: _this.renderTemplate("views/player_characters/_socket_index.jade", {
            characters: records
          })
        });
      });
    };

    PlayerCharactersSocketsController.prototype["new"] = function(socket) {
      var client;

      client = Clients.find(socket.id);
      return socket.emit("player_characters/new", {
        html: this.renderTemplate("views/player_characters/_socket_new.jade")
      });
    };

    PlayerCharactersSocketsController.prototype.save = function(socket, data) {
      var client, playerCharacter,
        _this = this;

      client = Clients.find(socket.id);
      data.user_id = client.user._id;
      playerCharacter = new PlayerCharacter(data);
      return PlayerCharacters.save(playerCharacter, socket, function(socket) {
        return _this.forUser(socket);
      });
    };

    PlayerCharactersSocketsController.prototype.choose = function(socket, data) {
      var client;

      client = Clients.find(socket.id);
      client.currentPlayerCharacter_id = data.id;
      return WorldSocketsController.enter(socket);
    };

    return PlayerCharactersSocketsController;

  })(LFSocketController);

  global.PlayerCharactersSocketsController = new PlayerCharactersSocketsController;

}).call(this);

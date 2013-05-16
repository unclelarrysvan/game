(function() {
  var WorldSocketsController, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WorldSocketsController = (function(_super) {
    __extends(WorldSocketsController, _super);

    function WorldSocketsController() {
      _ref = WorldSocketsController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    WorldSocketsController.prototype.enter = function(socket) {
      var client,
        _this = this;

      socket.emit("world/enter");
      client = Clients.find(socket.id);
      Logger.info(client.currentPlayerCharacter_id);
      return PlayerCharacters.find(client.currentPlayerCharacter_id, socket, function(socket, character) {
        return _this.plop(socket, character);
      });
    };

    WorldSocketsController.prototype.plop = function(socket, playerCharacter) {
      var _this = this;

      this.renderPlayer(socket, playerCharacter);
      playerCharacter = new PlayerCharacter(playerCharacter);
      if (!playerCharacter.currentArea) {
        return playerCharacter.plop(socket, function(socket) {
          return _this.findArea(socket, playerCharacter);
        });
      } else {
        Logger.log("ELSE");
        return this.renderArea(socket);
      }
    };

    WorldSocketsController.prototype.renderPlayer = function(socket, playerCharacter) {
      return socket.emit("render/playerCharacter", {
        playerCharacter: playerCharacter,
        html: this.renderTemplate("views/player_characters/_show.jade", {
          playerCharacter: playerCharacter
        })
      });
    };

    WorldSocketsController.prototype.findArea = function(socket, playerCharacter) {
      var _this = this;

      return Areas.find(playerCharacter.currentArea_id, socket, function(socket, area) {
        return _this.renderArea(socket, area);
      });
    };

    WorldSocketsController.prototype.renderArea = function(socket, area) {
      return socket.emit("render/area", {
        area: area,
        html: this.renderTemplate("views/areas/_show.jade", {
          area: area
        })
      });
    };

    return WorldSocketsController;

  })(LFSocketController);

  global.WorldSocketsController = new WorldSocketsController;

}).call(this);

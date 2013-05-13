(function() {
  this.PlayerCharacters = (function() {
    function PlayerCharacters() {
      this.setSocketListeners();
    }

    PlayerCharacters.prototype.setSocketListeners = function() {
      var _this = this;

      ClientSocket.socket.on('player_characters/index', function(data) {
        return _this.receivePlayerCharacters(data);
      });
      return ClientSocket.socket.on('player_characters/new', function(data) {
        return _this.receiveNewForm(data);
      });
    };

    PlayerCharacters.prototype.getCharacters = function() {
      ClientSocket.socket.emit("player_characters/index");
      return Ui.gettingCharacters();
    };

    PlayerCharacters.prototype.receivePlayerCharacters = function(data) {
      if (data.html) {
        return Ui.mainWindowRender(data.html);
      } else {
        return this.getNewForm();
      }
    };

    PlayerCharacters.prototype.getNewForm = function() {
      return ClientSocket.socket.emit("player_characters/new");
    };

    PlayerCharacters.prototype.receiveNewForm = function(data) {
      return Ui.mainWindowRender(data.html);
    };

    PlayerCharacters.prototype.submitNewPlayerForm = function() {
      var data;

      data = {
        name: $("#character_name").val()
      };
      ClientSocket.socket.emit("player_characters/save", data);
      return new LoadingImage({
        target: "main",
        message: "Getting character list..."
      });
    };

    PlayerCharacters.prototype.choose = function(id) {
      return ClientSocket.socket.emit("player_characters/choose", {
        _id: id
      });
    };

    return PlayerCharacters;

  })();

}).call(this);

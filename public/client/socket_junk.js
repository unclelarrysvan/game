(function() {
  this.ClientSockets = (function() {
    function ClientSockets(channel) {
      this.socket = io.connect();
      this.setSocketListeners();
    }

    ClientSockets.prototype.login = function(userName) {
      return this.socket.emit("login", {
        userName: userName
      });
    };

    ClientSockets.prototype.setSocketListeners = function() {
      var _this = this;

      this.socket.on('loginResponse', function(data) {
        return _this.loginResponse(data);
      });
      return this.socket.on('world', function(data) {
        return _this.worldMessage(data);
      });
    };

    ClientSockets.prototype.loginResponse = function(data) {
      if (data.login === "success") {
        return Ui.loginSuccess();
      } else {
        return Ui.loginFailed();
      }
    };

    ClientSockets.prototype.worldMessage = function(data) {
      return Ui.displayWorldMessage(data.message);
    };

    ClientSockets.prototype.setChannel = function(channel) {
      this.socket.emit("change channel", {
        channel: channel
      });
      this.channel = channel;
      return Ui.displayChannel(channel);
    };

    ClientSockets.prototype.setNickname = function(nickname) {
      return this.socket.emit("set nickname", {
        nickname: nickname
      });
    };

    ClientSockets.prototype.broadcast = function(message) {
      this.socket.emit('broadcast', {
        message: message
      });
      return Ui.displayMessage($("#name").val(), message);
    };

    return ClientSockets;

  })();

}).call(this);

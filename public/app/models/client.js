(function() {
  var Client;

  Client = (function() {
    function Client(socket) {
      this.socket = socket;
      this.id = this.socket.id;
      this.userName = this.id;
      this.joinChannel("world");
    }

    Client.prototype.joinChannel = function(channel) {
      return this.socket.join(channel);
    };

    Client.prototype.leaveChannel = function(channel) {
      this.socket.broadcast.to(channel).emit("channel message", {
        userName: "Server",
        mes: this.nickname + " has left the channel."
      });
      return this.socket.leave(channel);
    };

    Client.prototype.setUserName = function(userName) {
      return this.userName = userName;
    };

    Client.prototype.broadcast = function(message) {
      return this.socket.broadcast.to(this.channel).emit("channel message", {
        userName: this.userName,
        mes: message
      });
    };

    return Client;

  })();

  global.Client = Client;

}).call(this);

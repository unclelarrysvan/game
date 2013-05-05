(function() {
  var SessionsController;

  SessionsController = (function() {
    function SessionsController() {}

    SessionsController.prototype["new"] = function(socket) {
      var client;

      Logger.info("Client connected.");
      client = new Client(socket);
      return Clients.add(client);
    };

    SessionsController.prototype.create = function(socket, data) {
      var client;

      Logger.info("Client attempting to log in.");
      client = Clients.find(socket.id);
      client.setUserName(data.userName);
      client.socket.emit("loginResponse", {
        login: "success"
      });
      return io.sockets.emit("world", {
        message: "" + client.userName + " has entered the world."
      });
    };

    return SessionsController;

  })();

  global.SessionsController = new SessionsController;

}).call(this);

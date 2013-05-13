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
      var _this = this;

      Logger.info("Client attempting to log in.");
      return Users.findByUserName(socket, data.userName, function(socket, record) {
        if (record) {
          return _this.success(socket, record);
        } else {
          return _this.fail(socket);
        }
      });
    };

    SessionsController.prototype.success = function(socket, user) {
      var client;

      client = Clients.find(socket.id);
      client.secure(user);
      client.socket.emit("loginResponse", {
        login: "success"
      });
      return io.sockets.emit("world", {
        message: "" + client.userName + " has entered the world."
      });
    };

    SessionsController.prototype.fail = function(socket) {
      return socket.emit("loginResponse", {
        login: "fail"
      });
    };

    return SessionsController;

  })();

  global.SessionsController = new SessionsController;

}).call(this);

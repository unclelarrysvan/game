(function() {
  var ActionsController;

  ActionsController = (function() {
    function ActionsController() {}

    ActionsController.prototype.parse = function(socket, data) {
      var client;

      client = Clients.find(socket.id);
      return io.sockets.emit("world", {
        message: "" + client.userName + " entered " + data.input + "."
      });
    };

    return ActionsController;

  })();

  global.ActionsController = new ActionsController;

}).call(this);

(function() {
  io.sockets.on('connection', function(socket) {
    SessionsController["new"](socket);
    socket.on('login', function(data) {
      return SessionsController.create(socket, data);
    });
    socket.on('action', function(data) {
      return ActionsController.parse(socket, data);
    });
    socket.on('player_characters/index', function() {
      return PlayerCharactersSocketsController.forUser(socket);
    });
    socket.on('player_characters/new', function() {
      return PlayerCharactersSocketsController["new"](socket);
    });
    socket.on('player_characters/save', function(data) {
      return PlayerCharactersSocketsController.save(socket, data);
    });
    socket.on('player_characters/choose', function(data) {
      return PlayerCharactersSocketsController.choose(socket, data);
    });
    socket.on('broadcast', function(data) {
      return ClientsController.broadcast(socket, data.message);
    });
    return socket.on('disconnect', function() {
      return ClientsController.disconnect(socket);
    });
  });

}).call(this);

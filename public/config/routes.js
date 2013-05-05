(function() {
  app.get('/client/socket_junk.js', function(req, res) {
    return res.sendfile("client/socket_junk.js");
  });

  app.get('/client/ui.js', function(req, res) {
    return res.sendfile("client/ui.js");
  });

  app.get('/client/init.js', function(req, res) {
    return res.sendfile("client/init.js");
  });

  app.get('/', function(req, res) {
    return WelcomeController.index(req, res);
  });

  io.sockets.on('connection', function(socket) {
    Clients.newClient(socket);
    socket.on('set nickname', function(data) {
      return Clients.setNickname(socket, data.nickname);
    });
    socket.on("change channel", function(data) {
      return Clients.joinChannel(socket, data.channel);
    });
    socket.on('disconnect', function() {
      return Clients.disconnect(socket);
    });
    return socket.on('broadcast', function(data) {
      return Clients.broadcast(socket, data.message);
    });
  });

}).call(this);

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

  app.get('/client/stylesheets/application.css', function(req, res) {
    return res.sendfile("client/stylesheets/application.css");
  });

  app.get('/', function(req, res) {
    return WelcomeController.index(req, res);
  });

  io.sockets.on('connection', function(socket) {
    SessionsController["new"](socket);
    socket.on('login', function(data) {
      return SessionsController.create(socket, data);
    });
    socket.on('broadcast', function(data) {
      return ClientsController.broadcast(socket, data.message);
    });
    return socket.on('disconnect', function() {
      return ClientsController.disconnect(socket);
    });
  });

}).call(this);

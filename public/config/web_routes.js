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

  app.get('/users', function(req, res) {
    return UsersController.index(req, res);
  });

  app.get('/users/show', function(req, res) {
    return UsersController.show(req, res);
  });

  app.get('/users/new', function(req, res) {
    return UsersController["new"](req, res);
  });

  app.post('/users/create', function(req, res) {
    return UsersController.create(req, res);
  });

  app.get('/users/edit', function(req, res) {
    return UsersController.edit(req, res);
  });

  app.post('/users/update', function(req, res) {
    return UsersController.update(req, res);
  });

  app.get('/users/delete', function(req, res) {
    return UsersController["delete"](req, res);
  });

  app.get('/areas', function(req, res) {
    return AreasController.index(req, res);
  });

  app.get('/areas/show', function(req, res) {
    return AreasController.show(req, res);
  });

  app.get('/areas/new', function(req, res) {
    return AreasController["new"](req, res);
  });

  app.post('/areas/create', function(req, res) {
    return AreasController.create(req, res);
  });

  app.get('/areas/edit', function(req, res) {
    return AreasController.edit(req, res);
  });

  app.post('/areas/update', function(req, res) {
    return AreasController.update(req, res);
  });

  app.get('/areas/delete', function(req, res) {
    return AreasController["delete"](req, res);
  });

}).call(this);

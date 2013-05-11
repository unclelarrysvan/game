#client assets
app.get '/client/socket_junk.js',      (req, res) -> res.sendfile("client/socket_junk.js")
app.get '/client/ui.js',               (req, res) -> res.sendfile("client/ui.js")
app.get '/client/init.js',             (req, res) -> res.sendfile("client/init.js")
app.get '/client/stylesheets/application.css', (req, res) -> res.sendfile("client/stylesheets/application.css")

#web routes
app.get   '/',             (req, res) -> WelcomeController.index(req, res)

app.get   '/users',         (req, res) -> UsersController.index(req, res)
app.get   '/users/show',    (req, res) -> UsersController.show(req, res)
app.get   '/users/new',     (req, res) -> UsersController.new(req, res)
app.post  '/users/create',  (req, res) -> UsersController.create(req, res)
app.get   '/users/edit',    (req, res) -> UsersController.edit(req, res)
app.post  '/users/update',  (req, res) -> UsersController.update(req, res)
app.get   '/users/delete', (req, res) -> UsersController.delete(req, res)

#socket routes
io.sockets.on 'connection', (socket) ->
  SessionsController.new(socket)
  socket.on 'login',      (data) -> SessionsController.create(socket, data)
  socket.on 'broadcast',  (data) -> ClientsController.broadcast(socket, data.message)
  socket.on 'disconnect',        -> ClientsController.disconnect(socket)

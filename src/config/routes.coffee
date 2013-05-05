#client assets
app.get '/client/socket_junk.js',      (req, res) -> res.sendfile("client/socket_junk.js")
app.get '/client/ui.js',               (req, res) -> res.sendfile("client/ui.js")
app.get '/client/init.js',             (req, res) -> res.sendfile("client/init.js")
app.get '/client/stylesheets/application.css', (req, res) -> res.sendfile("client/stylesheets/application.css")

#web routes
app.get  '/', (req, res) -> WelcomeController.index(req, res)

#socket routes
io.sockets.on 'connection', (socket) ->
  SessionsController.new(socket)
  socket.on 'login',      (data) -> SessionsController.create(socket, data)
  socket.on 'broadcast',  (data) -> ClientsController.broadcast(socket, data.message)
  socket.on 'disconnect',        -> ClientsController.disconnect(socket)
  #socket.on 'set nickname',   (data) -> ClientsController.setNickname(socket, data.nickname)
  #socket.on "change channel", (data) -> ClientsController.joinChannel(socket, data.channel)

#client assets
app.get '/client/socket_junk.js', (req, res) -> res.sendfile("client/socket_junk.js")
app.get '/client/ui.js',          (req, res) -> res.sendfile("client/ui.js")
app.get '/client/init.js',        (req, res) -> res.sendfile("client/init.js")

#web routes
app.get  '/', (req, res) -> WelcomeController.index(req, res)

#socket routes
io.sockets.on 'connection', (socket) ->
  Clients.newClient(socket)
  socket.on 'set nickname',   (data) -> Clients.setNickname(socket, data.nickname)
  socket.on "change channel", (data) -> Clients.joinChannel(socket, data.channel)
  socket.on 'disconnect',            -> Clients.disconnect(socket)
  socket.on 'broadcast',      (data) -> Clients.broadcast(socket, data.message)

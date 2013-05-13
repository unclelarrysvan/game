#socket routes
io.sockets.on 'connection', (socket) ->
  SessionsController.new(socket)
  socket.on 'login',         (data) -> SessionsController.create(socket, data)

  socket.on 'player_characters/index', -> PlayerCharactersSocketsController.forUser(socket)
  socket.on 'player_characters/new',   -> PlayerCharactersSocketsController.new(socket)
  socket.on 'player_characters/save',  (data) ->
    PlayerCharactersSocketsController.save(socket, data)

  socket.on 'broadcast',     (data) -> ClientsController.broadcast(socket, data.message)
  socket.on 'disconnect',           -> ClientsController.disconnect(socket)

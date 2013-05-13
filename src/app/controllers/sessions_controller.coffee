class SessionsController
  new: (socket)->
    Logger.info "Client connected."
    client = new Client(socket)
    Clients.add(client)

  create: (socket, data) ->
    Logger.info "Client attempting to log in."
    Users.findByUserName socket, data.userName, (socket, record) =>
      if record
        @success(socket, record)
      else
        @fail(socket)

  success: (socket, user) ->
    client = Clients.find(socket.id)
    client.secure(user)
    client.socket.emit("loginResponse", {login: "success"})
    io.sockets.emit("world", {message: "#{client.userName} has entered the world."})

  fail: (socket) ->
    socket.emit("loginResponse", {login: "fail"})

global.SessionsController = new SessionsController

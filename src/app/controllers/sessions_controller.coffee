class SessionsController
  new: (socket)->
    Logger.info "Client connected."
    client = new Client(socket)
    Clients.add(client)

  create: (socket, data) ->
    Logger.info "Client attempting to log in."
    client = Clients.find(socket.id)
    client.setUserName(data.userName)
    client.socket.emit("loginResponse", {login: "success"})
    io.sockets.emit("world", {message: "#{client.userName} has entered the world."})

global.SessionsController = new SessionsController

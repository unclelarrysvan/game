class ActionsController
  parse: (socket, data) ->
    client = Clients.find(socket.id)
    io.sockets.emit("world", {message: "#{client.userName} entered #{data.input}."})

global.ActionsController = new ActionsController

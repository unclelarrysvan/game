class Client
  constructor: (@socket) ->
    @id = @socket.id
    @userName = @id
    @joinChannel("world")

  joinChannel: (channel) ->
    @socket.join(channel)

  leaveChannel: (channel) ->
    @socket.broadcast.to(channel).emit("channel message", { userName: "Server", mes: @nickname + " has left the channel."})
    @socket.leave(channel)

  setUserName: (userName) -> @userName = userName

  broadcast: (message) ->
    @socket.broadcast.to(@channel).emit("channel message", { userName: @userName, mes: message})

global.Client = Client

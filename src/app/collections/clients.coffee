Client = require("../models/client").Client
class Clients
  constructor: ->
    @list = {}

  newClient: (socket) ->
    Logger.info "Client connected"
    client = new Client(socket)
    @list[socket.id] = client

  getClient: (id) ->
    client = @list[id]

  setNickname: (socket, nickname) ->
    Logger.info "Nickname set " + nickname
    client = @getClient(socket.id)
    client.setNickname nickname

  joinChannel: (socket, channel)->
    Logger.info "Client joining channel " + channel
    client = @getClient(socket.id)
    client.setChannel channel

  disconnect: (socket) ->
    Logger.info "Client disconnected. " + socket.id
    client = @getClient(socket.id)
    client.disconnect()
    delete @list[socket.id]

  broadcast: (socket, message) ->
    Logger.info "Client Broadcasting " + socket.id
    client = @getClient(socket.id)
    client.broadcast(message)

exports.Clients = Clients

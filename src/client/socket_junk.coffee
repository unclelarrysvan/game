class @ClientSockets
  constructor: (channel) ->
    @socket = io.connect()
    @setSocketListeners()

  login: (userName) ->
    @socket.emit("login", {userName: userName})

  setSocketListeners: ->
    @socket.on 'loginResponse', (data) => @loginResponse(data)
    @socket.on 'world',         (data) => @worldMessage(data)
    #@socket.on 'channel message', (data) =>
    #Ui.displayMessage(data.userName, data.mes)

  loginResponse: (data) ->
    if data.login == "success"
      Ui.loginSuccess()

  worldMessage: (data) ->
    Ui.displayWorldMessage(data.message)

  setChannel: (channel) ->
    @socket.emit("change channel", {channel: channel})
    @channel = channel
    Ui.displayChannel(channel)

  setNickname: (nickname) ->
    @socket.emit("set nickname", {nickname: nickname})

  broadcast: (message) ->
    @socket.emit('broadcast', { message: message })
    Ui.displayMessage($("#name").val(), message)

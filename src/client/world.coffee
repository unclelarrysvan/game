class @World
  constructor: ->
    @setSocketListeners()

  setSocketListeners: ->
    ClientSocket.socket.on 'world/enter', (data) => @enter(data)

  enter: (data) ->
    Ui.mainWindowRender(data.html)

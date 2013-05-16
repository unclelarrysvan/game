class @World
  constructor: ->
    @setSocketListeners()

  setSocketListeners: ->
    ClientSocket.socket.on 'world/enter', => Ui.reset()
    ClientSocket.socket.on 'render/playerCharacter', (data) => @displayPlayerCharacter(data)
    ClientSocket.socket.on 'render/area', (data) => @displayArea(data)

  displayPlayerCharacter: (data) ->
    $("#playerCharacter").html data.html

  displayArea: (data) ->
    $("#title").html data.area.name
    $("#area").html data.html

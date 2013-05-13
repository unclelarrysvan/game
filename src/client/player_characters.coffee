class @PlayerCharacters
  constructor: ->
    @setSocketListeners()

  setSocketListeners: ->
    ClientSocket.socket.on 'player_characters/index', (data) => @receivePlayerCharacters(data)
    ClientSocket.socket.on 'player_characters/new',   (data) => @receiveNewForm(data)

  getCharacters: ->
    ClientSocket.socket.emit("player_characters/index")
    Ui.gettingCharacters()

  receivePlayerCharacters: (data) ->
    if data.html
      Ui.mainWindowRender(data.html)
    else
      @getNewForm()

  getNewForm: ->
    ClientSocket.socket.emit("player_characters/new")

  receiveNewForm: (data) ->
    Ui.mainWindowRender(data.html)

  submitNewPlayerForm: () ->
    data = name: $("#character_name").val()
    ClientSocket.socket.emit("player_characters/save", data)
    new LoadingImage(target: "main", message: "Getting character list...")

  choose: (id) ->
    ClientSocket.socket.emit("player_characters/choose", {_id: id})

class @PlayerCharacters
  constructor: ->
    @setSocketListeners()

  setSocketListeners: ->
    ClientSocket.socket.on 'player_characters/index', (data) => @receivePlayerCharacters(data)
    ClientSocket.socket.on 'player_characters/new',   (data) => @newPlayerCharacterForm(data)

  getCharacters: ->
    ClientSocket.socket.emit("player_characters/index")
    Ui.gettingCharacters()

  receivePlayerCharacters: (data) ->
    if data.characters.length == 0
      ClientSocket.socket.emit("player_characters/new")
    else
      console.log data.characters

  newPlayerCharacterForm: (data) ->
    Ui.mainWindowRender(data.html)

  submitNewPlayerForm: () ->
    data = name: $("#character_name").val()
    ClientSocket.socket.emit("player_characters/save", data)
    new LoadingImage(target: "main", message: "Getting character list...")

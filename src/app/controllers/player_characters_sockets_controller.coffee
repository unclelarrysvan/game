class PlayerCharactersSocketsController extends LFSocketController
  forUser: (socket) ->
    client = Clients.find(socket.id)
    PlayerCharacters.findForUser client.user, socket,
      (socket, records) =>
        socket.emit("player_characters/index",
          {html: @renderTemplate("views/player_characters/_socket_index.jade", {characters: records})})

  new: (socket) ->
    client = Clients.find(socket.id)
    socket.emit("player_characters/new",
      {html: @renderTemplate("views/player_characters/_socket_new.jade")})

  save: (socket, data) ->
    client = Clients.find(socket.id)
    data.user_id = client.user._id
    playerCharacter = new PlayerCharacter(data)
    PlayerCharacters.save(playerCharacter, socket,
      (socket) => @forUser(socket))

  choose: (socket, data) ->
    client = Clients.find(socket.id)
    client.currentPlayerCharacter_id = data.id
    WorldSocketsController.enter(socket)


global.PlayerCharactersSocketsController = new PlayerCharactersSocketsController

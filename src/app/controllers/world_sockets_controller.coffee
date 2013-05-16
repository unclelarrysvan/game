class WorldSocketsController extends LFSocketController
  enter: (socket) ->
    socket.emit "world/enter"
    client = Clients.find(socket.id)
    Logger.info client.currentPlayerCharacter_id
    PlayerCharacters.find client.currentPlayerCharacter_id, socket,
      (socket, character) => @plop(socket, character)

  plop: (socket, playerCharacter) ->
    @renderPlayer(socket, playerCharacter)
    playerCharacter = new PlayerCharacter(playerCharacter)
    if !playerCharacter.currentArea
      playerCharacter.plop socket, (socket) => @findArea(socket, playerCharacter)
    else
      Logger.log "ELSE"
      @renderArea(socket)

  renderPlayer: (socket, playerCharacter) ->
    socket.emit "render/playerCharacter",
      playerCharacter: playerCharacter
      html: @renderTemplate("views/player_characters/_show.jade",
        {playerCharacter: playerCharacter})

  findArea: (socket, playerCharacter) ->
    Areas.find playerCharacter.currentArea_id, socket,
      (socket, area) => @renderArea(socket, area)

  renderArea: (socket, area) ->
    socket.emit "render/area",
      area: area
      html: @renderTemplate("views/areas/_show.jade", {area: area})

global.WorldSocketsController = new WorldSocketsController

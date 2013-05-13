class PlayerCharactersController extends ApplicationController
  index: (req, response) ->
    PlayerCharacters.all(response,
      (response, records) => response.render("playerCharacters/index", {records: records}))

  show: (req, res) ->
    query = @getParams(req)
    PlayerCharacters.find(query.id, res,
      (response, playerCharacter) -> response.render("playerCharacters/show", {playerCharacter: playerCharacter}))

  new: (req, res) ->
    playerCharacter = new playerCharacter
    res.render("playerCharacters/new", {playerCharacter: playerCharacter})

  save: (req, response) ->
    playerCharacter = new playerCharacter(req.body)
    PlayerCharacters.save(playerCharacter, response,
      (respose) -> response.redirect "/playerCharacters")

  edit: (req, response) ->
    query = @getParams(req)
    PlayerCharacters.find(query.id, response,
      (response, playerCharacter) => response.render("playerCharacters/edit", {playerCharacter: playerCharacter}))

  delete: (req, response) ->
    query = @getParams(req)
    PlayerCharacters.delete(query.id, response,
      (response) => response.redirect "/playerCharacters")

global.PlayerCharactersController = new PlayerCharactersController

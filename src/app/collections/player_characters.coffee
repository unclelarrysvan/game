class PlayerCharacters extends LFCollection
  constructor: ->
    @collection = "playerCharacters"

  findForUser: (user, response, callback) ->
    @getCollection (collection) =>
      collection.find(user_id: @ObjectID(user._id.toString())).toArray (err, records) =>
        throw err if err
        callback(response, records)

global.PlayerCharacters = new PlayerCharacters

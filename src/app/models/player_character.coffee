class PlayerCharacter extends LFModel
  constructor: (data) ->
    data = data || {}
    @_id = @ObjectID(data._id) if data._id
    @user_id = data.user_id
    @name = data.name

global.PlayerCharacter = PlayerCharacter

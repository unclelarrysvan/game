class User extends LFModel
  constructor: (data) ->
    data = data || {}
    @_id = @ObjectID(data._id) if data._id
    @userName = data.userName

global.User = User

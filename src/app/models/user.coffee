class User
  constructor: (data) ->
    data = data || {}
    @userName = data.userName

global.User = User

class User
  constructor: (data) ->
    data = data || {}
    @collection = "users"
    @userName = data.userName

  toJson: ->
    userName: @userName

  save: ->
    Db.createCollection @collection, (err, collection) =>
      throw err if err
      collection.insert @toJson(), (err, records) ->
        throw err if err
        console.log "Record added as #{records[0]._id}"


global.User = User

class Users
  constructor: ->
    @collection = "users"

  all: (res, callback) ->
    Db.createCollection @collection, (err, collection) =>
      throw err if err
      collection.find().toArray (err, records) =>
        throw err if err
        callback(res, records)

global.Users = new Users

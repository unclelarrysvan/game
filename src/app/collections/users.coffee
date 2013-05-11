class Users
  constructor: ->
    @collection = "users"
    @ObjectID = require('mongodb').ObjectID

  all: (res, callback) ->
    Db.createCollection @collection, (err, collection) =>
      throw err if err
      collection.find().toArray (err, records) =>
        throw err if err
        callback(res, records)

  find: (id, response, callback) ->
    Db.createCollection @collection, (err, collection) =>
      throw err if err
      collection.find(_id: new @ObjectID(id)).nextObject (err, record) =>
        throw err if err
        callback(response, record)

global.Users = new Users

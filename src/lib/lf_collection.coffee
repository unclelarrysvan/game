class LFCollection
  ObjectID: require('mongodb').ObjectID

  getCollection: (callback) ->
    Db.createCollection @collection, (err, collection) =>
      throw err if err
      callback(collection)

  all: (res, callback) ->
    @getCollection (collection) =>
      collection.find().toArray (err, records) =>
        throw err if err
        callback(res, records)

  find: (id, response, callback) ->
    @getCollection (collection) =>
      collection.find(_id: new @ObjectID(id)).nextObject (err, record) =>
        throw err if err
        callback(response, record)

  save: (obj, response, callback) ->
    @getCollection (collection) =>
      collection.insert obj, (err, records) ->
        throw err if err
        callback(response)

  update: (params, response, callback) ->
    _id = params._id
    delete params._id
    @getCollection (collection) =>
      collection.update {_id: new @ObjectID(_id)}, {$set: params},
        (err, record) =>
          throw err if err
          callback(response, record)

  delete: (id, response, callback) ->
    @getCollection (collection) =>
      collection.remove {_id: new @ObjectID(id)},
        (err) =>
          throw err if err
          callback(response)

global.LFCollection = LFCollection

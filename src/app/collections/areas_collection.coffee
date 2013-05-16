class Areas extends LFCollection
  constructor: ->
    @collection = "areas"

  findStartingArea: (response, callback) ->
    @getCollection (collection) =>
      collection.find("startingArea": "on").toArray (err, records) =>
        throw err if err
        callback(response, records[0])

global.Areas = new Areas

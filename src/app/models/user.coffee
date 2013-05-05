Db.createCollection "leesTestCollection", (err, collection) ->
  throw err if err
  collection.insert {name:"lee"}, (err, records) ->
    throw err if err
    console.log "Record added as #{records[0]._id}"

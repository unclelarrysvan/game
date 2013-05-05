(function() {
  Db.createCollection("leesTestCollection", function(err, collection) {
    if (err) {
      throw err;
    }
    return collection.insert({
      name: "lee"
    }, function(err, records) {
      if (err) {
        throw err;
      }
      return console.log("Record added as " + records[0]._id);
    });
  });

}).call(this);

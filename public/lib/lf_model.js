(function() {
  var LFModel;

  LFModel = (function() {
    function LFModel() {}

    LFModel.prototype.ObjectID = require('mongodb').ObjectID;

    return LFModel;

  })();

  global.LFModel = LFModel;

}).call(this);

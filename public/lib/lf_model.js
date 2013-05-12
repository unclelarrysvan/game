(function() {
  var LFModel;

  LFModel = (function() {
    function LFModel() {}

    LFModel.prototype.ObjectID = require('mongodb').ObjectID;

    LFModel.prototype.isReadyToSave = function() {
      return true;
    };

    return LFModel;

  })();

  global.LFModel = LFModel;

}).call(this);

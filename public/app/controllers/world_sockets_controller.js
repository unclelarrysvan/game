(function() {
  var WorldSocketsController, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WorldSocketsController = (function(_super) {
    __extends(WorldSocketsController, _super);

    function WorldSocketsController() {
      _ref = WorldSocketsController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    WorldSocketsController.prototype.enter = function(socket) {
      return socket.emit("world/enter", {
        html: "FUCK YEAH"
      });
    };

    return WorldSocketsController;

  })(LFSocketController);

  global.WorldSocketsController = new WorldSocketsController;

}).call(this);

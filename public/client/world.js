(function() {
  this.World = (function() {
    function World() {
      this.setSocketListeners();
    }

    World.prototype.setSocketListeners = function() {
      var _this = this;

      return ClientSocket.socket.on('world/enter', function(data) {
        return _this.enter(data);
      });
    };

    World.prototype.enter = function(data) {
      return Ui.mainWindowRender(data.html);
    };

    return World;

  })();

}).call(this);

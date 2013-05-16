(function() {
  this.World = (function() {
    function World() {
      this.setSocketListeners();
    }

    World.prototype.setSocketListeners = function() {
      var _this = this;

      ClientSocket.socket.on('world/enter', function() {
        return Ui.reset();
      });
      ClientSocket.socket.on('render/playerCharacter', function(data) {
        return _this.displayPlayerCharacter(data);
      });
      return ClientSocket.socket.on('render/area', function(data) {
        return _this.displayArea(data);
      });
    };

    World.prototype.displayPlayerCharacter = function(data) {
      return $("#playerCharacter").html(data.html);
    };

    World.prototype.displayArea = function(data) {
      $("#title").html(data.area.name);
      return $("#area").html(data.html);
    };

    return World;

  })();

}).call(this);

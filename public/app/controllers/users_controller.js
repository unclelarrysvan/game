(function() {
  var UsersController;

  UsersController = (function() {
    function UsersController() {}

    UsersController.prototype.index = function(req, response) {
      var _this = this;

      return Users.all(response, (function(response, records) {
        return _this.showIndex(response, records);
      }));
    };

    UsersController.prototype.showIndex = function(response, records) {
      return response.send(records);
    };

    UsersController.prototype["new"] = function(req, res) {
      return res.sendfile("app/views/users/new.html");
    };

    UsersController.prototype.create = function(req, res) {
      var params, user;

      params = req.body;
      user = new User(params);
      user.save();
      return res.send("done");
    };

    return UsersController;

  })();

  global.UsersController = new UsersController;

}).call(this);

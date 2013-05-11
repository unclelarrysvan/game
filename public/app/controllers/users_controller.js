(function() {
  var UsersController;

  UsersController = (function() {
    function UsersController() {}

    UsersController.prototype.index = function(req, response) {
      var _this = this;

      return Users.all(response, function(response, records) {
        return response.render("users/index", {
          records: records
        });
      });
    };

    UsersController.prototype.show = function(req, res) {
      var query, url, url_parts;

      url = require('url');
      url_parts = url.parse(req.url, true);
      query = url_parts.query;
      return Users.find(query.id, res, function(response, user) {
        return response.render("users/show", {
          user: user
        });
      });
    };

    UsersController.prototype["new"] = function(req, res) {
      return res.sendfile("app/views/users/new.html");
    };

    UsersController.prototype.create = function(req, res) {
      var params, user;

      params = req.body;
      user = new User(params);
      user.save();
      return res.redirect("/users");
    };

    UsersController.prototype.edit = function(req, res) {
      var _this = this;

      return User.find(req.body.id, response, function(response, user) {
        return response.render("users/form", {
          user: user
        });
      });
    };

    return UsersController;

  })();

  global.UsersController = new UsersController;

}).call(this);

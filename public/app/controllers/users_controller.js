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
      var user;

      user = new User;
      return res.render("users/new", {
        user: user
      });
    };

    UsersController.prototype.create = function(req, res) {
      var params, user;

      params = req.body;
      user = new User(params);
      user.save();
      return res.redirect("/users");
    };

    UsersController.prototype.edit = function(req, response) {
      var query, url, url_parts,
        _this = this;

      url = require('url');
      url_parts = url.parse(req.url, true);
      query = url_parts.query;
      return Users.find(query.id, response, function(response, user) {
        return response.render("users/edit", {
          user: user
        });
      });
    };

    UsersController.prototype.update = function(req, response) {
      var _this = this;

      return Users.update(req.body, response, function(response) {
        return response.redirect("/users");
      });
    };

    UsersController.prototype["delete"] = function(req, response) {
      var query, url, url_parts,
        _this = this;

      url = require('url');
      url_parts = url.parse(req.url, true);
      query = url_parts.query;
      return Users["delete"](query.id, response, function(response) {
        return response.redirect("/users");
      });
    };

    return UsersController;

  })();

  global.UsersController = new UsersController;

}).call(this);

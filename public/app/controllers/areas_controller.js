(function() {
  var AreasController, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AreasController = (function(_super) {
    __extends(AreasController, _super);

    function AreasController() {
      _ref = AreasController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AreasController.prototype.index = function(req, response) {
      var _this = this;

      return Areas.all(response, function(response, records) {
        return response.render("areas/index", {
          records: records
        });
      });
    };

    AreasController.prototype.show = function(req, res) {
      var query;

      query = this.getParams(req);
      return Areas.find(query.id, res, function(response, area) {
        return response.render("areas/show", {
          area: area
        });
      });
    };

    AreasController.prototype["new"] = function(req, res) {
      var area;

      area = new Area;
      return res.render("areas/new", {
        area: area
      });
    };

    AreasController.prototype.create = function(req, response) {
      var area;

      area = new Area(req.body);
      return Areas.save(area, response, function(respose) {
        return response.redirect("/areas");
      });
    };

    AreasController.prototype.edit = function(req, response) {
      var query,
        _this = this;

      query = this.getParams(req);
      return Areas.find(query.id, response, function(response, area) {
        return response.render("areas/edit", {
          area: area
        });
      });
    };

    AreasController.prototype.update = function(req, response) {
      var _this = this;

      return Areas.update(req.body, response, function(response) {
        return response.redirect("/areas");
      });
    };

    AreasController.prototype["delete"] = function(req, response) {
      var query,
        _this = this;

      query = this.getParams(req);
      return Areas["delete"](query.id, response, function(response) {
        return response.redirect("/areas");
      });
    };

    return AreasController;

  })(ApplicationController);

  global.AreasController = new AreasController;

}).call(this);

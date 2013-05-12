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

    AreasController.prototype["new"] = function(req, response) {
      var area;

      area = new Area;
      return Areas.all(response, function(response, areas) {
        return response.render("areas/new", {
          area: area,
          areas: areas
        });
      });
    };

    AreasController.prototype.save = function(req, response) {
      var area;

      area = new Area(req.body);
      if (req.body.adjacentArea_direction) {
        area.addAdjacentAreas(req.body.adjacentArea_direction, req.body.adjacentArea_id);
      }
      return Areas.save(area, response, function(respose) {
        return response.redirect("/areas");
      });
    };

    AreasController.prototype.edit = function(req, response) {
      var query,
        _this = this;

      query = this.getParams(req);
      return Areas.find(query.id, response, function(response, area) {
        return Areas.all(response, function(response, areas) {
          return response.render("areas/edit", {
            area: area,
            areas: areas
          });
        });
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

    AreasController.prototype.adjacentForm = function(req, response) {
      var _this = this;

      return Areas.all(response, function(response, areas) {
        return response.render("areas/_adjacent_area_form", {
          adjacentArea: {},
          areas: areas
        });
      });
    };

    return AreasController;

  })(ApplicationController);

  global.AreasController = new AreasController;

}).call(this);

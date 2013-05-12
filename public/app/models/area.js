(function() {
  var Area,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Area = (function(_super) {
    __extends(Area, _super);

    function Area(data) {
      data = data || {};
      this.name = data.name;
      this.description = data.description;
    }

    return Area;

  })(LFModel);

  global.Area = Area;

}).call(this);

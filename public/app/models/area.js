(function() {
  var Area;

  Area = (function() {
    function Area(data) {
      data = data || {};
      this.name = data.name;
      this.description = data.description;
    }

    return Area;

  })();

  global.Area = Area;

}).call(this);

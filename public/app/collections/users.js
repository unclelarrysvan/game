(function() {
  var Users,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Users = (function(_super) {
    __extends(Users, _super);

    function Users() {
      this.collection = "users";
    }

    return Users;

  })(LFCollection);

  global.Users = new Users;

}).call(this);

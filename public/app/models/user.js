(function() {
  var User,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  User = (function(_super) {
    __extends(User, _super);

    function User(data) {
      data = data || {};
      if (data._id) {
        this._id = this.ObjectID(data._id);
      }
      this.userName = data.userName;
    }

    return User;

  })(LFModel);

  global.User = User;

}).call(this);

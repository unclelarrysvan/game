(function() {
  var User;

  User = (function() {
    function User(data) {
      data = data || {};
      this.userName = data.userName;
    }

    return User;

  })();

  global.User = User;

}).call(this);

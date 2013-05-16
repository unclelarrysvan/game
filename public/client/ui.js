(function() {
  this.Ui = (function() {
    function Ui() {
      this.setObservers();
    }

    Ui.prototype.setObservers = function() {
      var _this = this;

      return $("#login").click(function() {
        return _this.login();
      });
    };

    Ui.prototype.login = function() {
      var userName;

      userName = $("#userName").val();
      return ClientSocket.login(userName);
    };

    Ui.prototype.loginSuccess = function() {
      $("#loginForm").hide();
      $("#game").show();
      return $("#title").html("Logged in successfully.");
    };

    Ui.prototype.loginFailed = function() {
      return $("#title").html("Failed to log in.");
    };

    Ui.prototype.displayWorldMessage = function(message) {
      return $("#worldMessages").append(message).append("<br>").scrollTop($("#worldMessages").outerHeight());
    };

    Ui.prototype.mainWindowRender = function(html) {
      return $("#main").html(html);
    };

    Ui.prototype.reset = function() {
      $("#main").html("");
      return $("#title").html("");
    };

    Ui.prototype.gettingCharacters = function() {
      return new LoadingImage({
        target: "main",
        message: "Getting character list..."
      });
    };

    Ui.prototype.setNickname = function() {
      var nickname;

      nickname = $("#name").val();
      return ClientSocket.setNickname(nickname);
    };

    Ui.prototype.displayMessage = function(who, message) {
      var html;

      html = $("#messages").html();
      html += "<br><b>" + who + ":</b> " + message;
      return $("#messages").html(html).scrollTop($("#messages").outerHeight());
    };

    Ui.prototype.clearMessageBox = function() {
      return $("#message").val("");
    };

    Ui.prototype.sendMessage = function() {
      var message;

      message = $("#message").val();
      ClientSocket.broadcast(message);
      return this.clearMessageBox();
    };

    Ui.prototype.displayChannel = function(channel) {
      return $("#channelName").html("Channel " + channel);
    };

    return Ui;

  })();

}).call(this);

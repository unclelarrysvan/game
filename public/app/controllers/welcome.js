(function() {
  var WelcomeController;

  WelcomeController = (function() {
    function WelcomeController() {}

    WelcomeController.prototype.index = function(req, res) {
      Logger.info("!! GET REQUEST RECEIVED !!");
      res.sendfile("app/views/index.html");
      return io.sockets["in"](req.body.channel).emit(req.body.message_type, {
        message: req.body.message
      });
    };

    return WelcomeController;

  })();

  global.WelcomeController = new WelcomeController;

}).call(this);

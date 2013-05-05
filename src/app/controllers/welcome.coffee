class WelcomeController
  index: (req, res) ->
    Logger.info "!! GET REQUEST RECEIVED !!"
    res.sendfile("app/views/index.html")
    io.sockets.in(req.body.channel).emit(req.body.message_type, { message: req.body.message })

global.WelcomeController = new WelcomeController

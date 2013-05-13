class Logger
  info: (message) ->
    console.log ">>>>>>>>> " + message + " <<<<<<<<<"

global.Logger = new Logger

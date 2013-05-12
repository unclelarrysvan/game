class Logger
  constructor: ->
  info: (message) ->
    console.log ">>>>>>>>> " + message + " <<<<<<<<<"

global.Logger = Logger

class @Input
  constructor: ->
    $("#input").keypress (event) =>
      if event.charCode == 13
        console.log "submit"
        @submit()

  submit: ->
    input = $("#input input").val()
    ClientSocket.socket.emit("action", input: input)
    @clear()

  clear: ->
    $("#input input").val ""


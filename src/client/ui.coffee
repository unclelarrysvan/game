class @Ui
  constructor: ->
    @setObservers()

  setObservers: ->
    $("#login").click =>         @login()
    #$("#sendMessage").click =>  @sendMessage()
    #$("#channel1").click =>     ClientSocket.setChannel(1)
    #$("#channel2").click =>     ClientSocket.setChannel(2)
    #$("#message").keyup (event) => ClientSocket.sendSock() if event.keyCode == 13

  login: ->
    userName = $("#userName").val()
    ClientSocket.login(userName)

  loginSuccess: ->
    $("#loginForm").hide()
    $("#game").show()
    $("#title").html "Logged in successfully."

  loginFailed: ->
    $("#title").html "Failed to log in."

  displayWorldMessage: (message) ->
    $("#worldMessages")
      .append(document.createTextNode(message))
      .append("<br>")
    $('#worldMessages').scrollTop($('#worldMessages').prop("scrollHeight"))

  mainWindowRender: (html) ->
    $("#main").html html

  reset: ->
    $("#main").html ""
    $("#title").html ""

  gettingCharacters: ->
    new LoadingImage(target: "main", message: "Getting character list...")

#######
  setNickname: ->
    nickname = $("#name").val()
    ClientSocket.setNickname(nickname)

  displayMessage: (who, message)->
    html = $("#messages").html()
    html += "<br><b>" + who + ":</b> " + message
    $("#messages").html(html).scrollTop($("#messages").outerHeight())

  clearMessageBox: -> $("#message").val("")

  sendMessage: ->
    message = $("#message").val()
    ClientSocket.broadcast message
    @clearMessageBox()

  displayChannel: (channel) ->
    $("#channelName").html("Channel #{channel}")


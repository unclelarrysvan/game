(function() {
  $(function() {
    window.Ui = new Ui;
    window.ClientSocket = new ClientSockets;
    return window.PlayerCharacters = new PlayerCharacters;
  });

}).call(this);

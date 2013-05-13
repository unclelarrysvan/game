(function() {
  $(function() {
    window.Ui = new Ui;
    window.ClientSocket = new ClientSockets;
    window.PlayerCharacters = new PlayerCharacters;
    return window.World = new World;
  });

}).call(this);

(function() {
  $(function() {
    window.Ui = new Ui;
    window.ClientSocket = new ClientSockets;
    window.PlayerCharacters = new PlayerCharacters;
    window.World = new World;
    return window.Input = new Input;
  });

}).call(this);

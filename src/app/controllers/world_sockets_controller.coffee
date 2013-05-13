class WorldSocketsController extends LFSocketController
  enter: (socket) ->
    socket.emit("world/enter", {html: "FUCK YEAH"})

global.WorldSocketsController = new WorldSocketsController

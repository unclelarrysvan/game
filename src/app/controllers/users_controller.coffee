class UsersController
  index: (req, response) ->
    Users.all(response, ((response, records) => @showIndex(response, records)))

  showIndex: (response, records) ->
    response.send(records)

  new: (req, res) ->
    res.sendfile("app/views/users/new.html")

  create: (req, res) ->
    params = req.body
    user = new User(params)
    user.save()
    res.send("done")

global.UsersController = new UsersController

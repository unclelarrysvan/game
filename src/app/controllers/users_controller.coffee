class UsersController
  index: (req, response) ->
    Users.all(response, ((response, records) => @showIndex(response, records)))

  showIndex: (response, records) ->
    response.render("index", {records: records})

  new: (req, res) ->
    res.sendfile("app/views/users/new.html")

  create: (req, res) ->
    params = req.body
    user = new User(params)
    user.save()
    res.redirect "/users"

global.UsersController = new UsersController

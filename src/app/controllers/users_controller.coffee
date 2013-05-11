class UsersController
  index: (req, response) ->
    Users.all(response,
      (response, records) => response.render("users/index", {records: records}))

  show: (req, res) ->
    url = require('url')
    url_parts = url.parse(req.url, true)
    query = url_parts.query
    Users.find(query.id, res,
      (response, user) -> response.render("users/show", {user: user}))

  new: (req, res) ->
    res.sendfile("app/views/users/new.html")

  create: (req, res) ->
    params = req.body
    user = new User(params)
    user.save()
    res.redirect "/users"

  edit: (req, res) ->
    User.find(req.body.id, response,
      (response, user) => response.render("users/form", {user: user}))

global.UsersController = new UsersController

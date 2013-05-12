class UsersController extends ApplicationController
  index: (req, response) ->
    Users.all(response,
      (response, records) => response.render("users/index", {records: records}))

  show: (req, res) ->
    query = @getParams(req)
    Users.find(query.id, res,
      (response, user) -> response.render("users/show", {user: user}))

  new: (req, res) ->
    user = new User
    res.render("users/new", {user: user})

  create: (req, response) ->
    user = new User(req.body)
    Users.save(user, response,
      (respose) -> response.redirect "/users")

  edit: (req, response) ->
    query = @getParams(req)
    Users.find(query.id, response,
      (response, user) => response.render("users/edit", {user: user}))

  update: (req, response) ->
    Users.update(req.body, response,
      (response) => response.redirect "/users")

  delete: (req, response) ->
    query = @getParams(req)
    Users.delete(query.id, response,
      (response) => response.redirect "/users")

global.UsersController = new UsersController

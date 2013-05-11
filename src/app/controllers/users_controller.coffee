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
    user = new User
    res.render("users/new", {user: user})

  create: (req, res) ->
    params = req.body
    user = new User(params)
    user.save()
    res.redirect "/users"

  edit: (req, response) ->
    url = require('url')
    url_parts = url.parse(req.url, true)
    query = url_parts.query
    Users.find(query.id, response,
      (response, user) => response.render("users/edit", {user: user}))

  update: (req, response) ->
    Users.update(req.body, response,
      (response) => response.redirect "/users")

  delete: (req, response) ->
    url = require('url')
    url_parts = url.parse(req.url, true)
    query = url_parts.query
    Users.delete(query.id, response,
      (response) => response.redirect "/users")

global.UsersController = new UsersController

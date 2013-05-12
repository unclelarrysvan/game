class AreasController extends ApplicationController
  index: (req, response) ->
    Areas.all(response,
      (response, records) => response.render("areas/index", {records: records}))

  show: (req, res) ->
    query = @getParams(req)
    Areas.find(query.id, res,
      (response, area) -> response.render("areas/show", {area: area}))

  new: (req, res) ->
    area = new Area
    res.render("areas/new", {area: area})

  create: (req, response) ->
    area = new Area(req.body)
    Areas.save(area, response,
      (respose) -> response.redirect "/areas")

  edit: (req, response) ->
    query = @getParams(req)
    Areas.find(query.id, response,
      (response, area) => response.render("areas/edit", {area: area}))

  update: (req, response) ->
    Areas.update(req.body, response,
      (response) => response.redirect "/areas")

  delete: (req, response) ->
    query = @getParams(req)
    Areas.delete(query.id, response,
      (response) => response.redirect "/areas")

global.AreasController = new AreasController

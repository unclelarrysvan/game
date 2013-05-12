class AreasController extends ApplicationController
  index: (req, response) ->
    Areas.all(response,
      (response, records) => response.render("areas/index", {records: records}))

  show: (req, res) ->
    query = @getParams(req)
    Areas.find(query.id, res,
      (response, area) -> response.render("areas/show", {area: area}))

  new: (req, response) ->
    area = new Area
    Areas.all(response,
      (response, areas) -> response.render("areas/new", {area: area, areas: areas}))

  create: (req, response) ->
    area = new Area(req.body)
    Areas.save(area, response,
      (respose) -> response.redirect "/areas")

  edit: (req, response) ->
    query = @getParams(req)
    Areas.find(query.id, response,
      (response, area) =>
         Areas.all(response,
            (response, areas) =>
              response.render("areas/edit", {area: area, areas: areas})))

  update: (req, response) ->
    Areas.update(req.body, response,
      (response) => response.redirect "/areas")

  delete: (req, response) ->
    query = @getParams(req)
    Areas.delete(query.id, response,
      (response) => response.redirect "/areas")

global.AreasController = new AreasController

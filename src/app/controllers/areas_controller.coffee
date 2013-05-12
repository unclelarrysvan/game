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

  save: (req, response) ->
    area = new Area(req.body)
    if req.body.adjacentArea_direction
      area.addAdjacentAreas req.body.adjacentArea_direction, req.body.adjacentArea_id
    Areas.save(area, response,
      (respose) -> response.redirect "/areas")

  edit: (req, response) ->
    query = @getParams(req)
    Areas.find(query.id, response,
      (response, area) =>
         Areas.all(response,
           (response, areas) =>
             response.render("areas/edit", {area: area, areas: areas})))

  delete: (req, response) ->
    query = @getParams(req)
    Areas.delete(query.id, response,
      (response) => response.redirect "/areas")

  adjacentForm: (req, response) ->
    Areas.all(response,
      (response, areas) =>
        response.render("areas/_adjacent_area_form", {adjacentArea: {}, areas: areas}))

global.AreasController = new AreasController

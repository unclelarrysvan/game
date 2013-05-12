class Area
  constructor: (data) ->
    data = data || {}
    @name = data.name
    @description = data.description


global.Area = Area

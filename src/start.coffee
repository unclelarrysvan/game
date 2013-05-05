global.port = process.env.PORT || 3001

require("./config/initializers/server")
require("./config/database_connection_info")
require("./config/initializers/database")
require("./config/routes")

require("./app/controllers/welcome")

Clients = require("./app/collections/clients").Clients
global.Clients = new Clients

Logger = require("./lib/logger").Logger
global.Logger = new Logger

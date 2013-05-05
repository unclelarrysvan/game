global.port = process.env.PORT || 3001

require("./config/initializers/server")
require("./config/database_connection_info")
require("./config/initializers/database")
require("./config/routes")

require("./app/controllers/welcome")

require("./app/models/client")
require("./app/collections/clients")
require("./app/controllers/clients_controller")
require("./app/controllers/sessions_controller")

Logger = require("./lib/logger").Logger
global.Logger = new Logger

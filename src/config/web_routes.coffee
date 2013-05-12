#client static assets
app.get '/client/socket_junk.js',      (req, res) -> res.sendfile("client/socket_junk.js")
app.get '/client/ui.js',               (req, res) -> res.sendfile("client/ui.js")
app.get '/client/init.js',             (req, res) -> res.sendfile("client/init.js")
app.get '/client/stylesheets/application.css', (req, res) -> res.sendfile("client/stylesheets/application.css")

#web routes
app.get   '/',              (req, res) -> WelcomeController.index(req, res)

app.get   '/users',         (req, res) -> UsersController.index(req, res)
app.get   '/users/show',    (req, res) -> UsersController.show(req, res)
app.get   '/users/new',     (req, res) -> UsersController.new(req, res)
app.post  '/users/create',  (req, res) -> UsersController.create(req, res)
app.get   '/users/edit',    (req, res) -> UsersController.edit(req, res)
app.post  '/users/update',  (req, res) -> UsersController.update(req, res)
app.get   '/users/delete',  (req, res) -> UsersController.delete(req, res)

app.get   '/areas',         (req, res) -> AreasController.index(req, res)
app.get   '/areas/show',    (req, res) -> AreasController.show(req, res)
app.get   '/areas/new',     (req, res) -> AreasController.new(req, res)
app.post  '/areas/create',  (req, res) -> AreasController.create(req, res)
app.get   '/areas/edit',    (req, res) -> AreasController.edit(req, res)
app.post  '/areas/update',  (req, res) -> AreasController.update(req, res)
app.get   '/areas/delete',  (req, res) -> AreasController.delete(req, res)

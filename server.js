let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

// create web app
let app = express()

let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')
let vueApp = express.static(pathToVueApp)
app.use('/', vueApp)

// tell the app to use rout we created
app.use('/api', routes)

// star server runnign
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})
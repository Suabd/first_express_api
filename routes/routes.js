// router on the serve identify request
let express = require('express')
let router = express.Router()

//req represents the request the client has made
//res represents the respons the server's gonna send back
 router.get('/', function(req, res, next){
    res.json({ 'message': 'Hello! ITEC 2560 Web Programmers'})
 })

 module.exports = router
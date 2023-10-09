const express = require('express')
const app = express()
const server = require('http').Server(app)
const PORT = process.env.PORT || 3000

const expressLayouts = require('express-ejs-layouts')

app.use(express.urlencoded({
	extended: false
}))
app.use(express.json())

app.use(express.static(__dirname + "/public"));

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use('/', require('./routes/index'))
// app.get('/', (req, res) => {
// 	res.status(200).json({
// 		message: 'Hello, World!'
// 	});
// });



server.listen(PORT, console.log(`Server running on prot ${PORT}`))
module.exports = app;
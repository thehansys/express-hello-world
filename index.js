var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// app.listen(Number(process.env.PORT), function () {
//   console.log('Listening on port' + process.env.PORT)
// })

export default app

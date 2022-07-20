const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log('Server is listening on port ' + PORT))

const express = require("express")
const path = require("path")




const app = express()

const port = 5000 || process.env.PORT

app.use(express.static('public'))


app.get('/', (req, res) => res.sendFile("index"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
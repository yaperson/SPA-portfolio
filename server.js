const express = require('express')
const path = require('path')
const host = 'localhost'
const port = 5051

let app = express() 

app.use(express.static(path.resolve(__dirname, "wwwroot")));

app.listen(port, host, () => {
    console.log(`Server is runing on http://${host}:${port}`)
})

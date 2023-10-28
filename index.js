const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors({
    origin:['http://localhost:3000']
}))
app.use('/movies',require('./routes/Movies'))
app.use('/animes',require('./routes/Animes'))

app.listen(PORT,() => { console.log(`server Running on http://localhost:${PORT}`) })
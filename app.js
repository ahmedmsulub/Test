const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/users.js')

const app = express();
const PORT = 5000;

app.use(bodyParser.json())


//ROUTES
app.use('/users', userRoutes)
app.get('/',(req,res)=> {
    res.send('hello from home page')
})


app.listen(PORT,()=>console.log(`SERVER IS RUNNING ON PORT ${PORT}`))
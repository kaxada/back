const express = require('express');
const cors = require('cors');
const app = express();
var indexrouter = require('./routes/index');

const db = require('./models');

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({extended:true}))

db.sequelize.sync({force:true}).then(()=>{
    console.log("Drop and re-sync db.");
})

app.use('/', indexrouter);

app.get("/", (req,res)=>{
    res.json("welcome to my application")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
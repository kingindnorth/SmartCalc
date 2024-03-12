const express =  require("express")
const  connect  = require("./utils/db")
require("dotenv").config()



const app = express()

const cors = require('cors');
app.use(cors())
app.use(express.json())


connect()

//routes
app.use('/api/cash',require("./routes/cashRoute"))

const PORT = 4000

app.listen(PORT,()=>{
    console.log(`server started`)
}) 
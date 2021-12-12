const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
require('./db/conn')
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use(express.json())

// adding routes
app.use(require('./routes/AuthRoutes'))
app.use(require('./routes/userRoutes'))
app.use(require('./routes/productRoutes'))
app.use(require('./routes/categoriesRoute'))
app.use(require('./routes/cartRoutes'))
app.use(require('./routes/BrandsRoutes'))


app.listen(port, (req, res) => {
    console.log(`Express Server Running at ${port}`)
})
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
//Builtin MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
//Midle ware to delay response
const delayMiddleware = async (req, res, next) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 5000));
    next();
}
app.use(delayMiddleware);
//Custome MiddleWares
const form = require('./basicform/basicformroutes.js');
app.use('/submit',form);


app.get('/',(req,res)=>{
    res.status(200).send("success");
})




app.listen(2345,()=>{
    console.log("server Listening on port 2345:");
})
const express = require('express');
const app = express();
app.use(express.json())

const apiRouter = require('./routes/api.router');
const instance = require('./dataBase').getInstance()
instance.setModels()

app.use('/api', apiRouter);

app.use('*', (err, req, res, next)=> {
     res
         .status(err.status || 404)
         .join({
             message: err.message || 'not found',
             code: err.customCode || ''
         })

})

app.listen('5000', (err)=> {
    if(err) {
        console.log(err);
    }
    console.log('Server 5000');
})


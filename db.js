const mong = require('mongoose')

const mongoUrl = 'mongodb://localhost:27017/tut'

mong.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
})

const db = mong.connection;
db.on('connected',()=>{
    console.log('connected to mongoDB server');
})

db.on('error',(err)=>{
    console.log('ERROR ! mongoDB server',err);
})

db.on('disconnected',()=>{
    console.log('DISconnected to mongoDB server');
})


module.exports=db;






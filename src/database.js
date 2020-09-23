import mongoose from 'mongoose'

mongoose.connect('mongodb://apiProducts:apiProducts1@ds237832.mlab.com:37832/api-products', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
)
    .then( db => console.log('DB is connected'))
    .catch( error => console.log(error))
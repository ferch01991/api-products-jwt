import mongoose from 'mongoose'

// mongoose.connect('mongodb://apiProducts:apiProducts1@ds237832.mlab.com:37832/api-products', 
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex:true,
//         useFindAndModify: true
//     }
// )
//     .then( db => console.log('DB is connected'))
//     .catch( error => console.log(error))

mongoose.connect('mongodb+srv://fercho123:fercho123@cluster0.a6f7w.mongodb.net/api-prueba?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: true
    }
)
    .then( db => console.log('DB is connected') )
    .catch( error => console.log(error) )
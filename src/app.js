import express, { request, response } from 'express'
import morgan from "morgan"
import pkg from "./../package.json"

import {createRoles} from "./libs/initialSetup"

import productRoutes from "./routes/products.routes"
import authRoutes from "./routes/auth.routers"

const app = express()
createRoles()

// Guardar una variable en express
app.set("pkg", pkg);

app.use(morgan('dev'))
// Entender los objectos json que llegan al servidor
app.use(express.json());
app.get('/', (request, response) => {
    response.json(
        {
            author: app.get('pkg').author,
            Nommbre: app.get('pkg').name,
            description: app.get('pkg').description
        }
    )
})

app.use("/api/products" ,productRoutes)
app.use("/api/auth" ,authRoutes)


export default app

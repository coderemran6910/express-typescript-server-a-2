import express, { Request, Response } from 'express'
import { productRoute } from './modules/products/product.route'
const app = express()

// parser
app.use(express.json())

app.use('/api/products', productRoute)

app.get('/', (req: Request , res: Response ) => {
  res.send('Hello World!')
})



export default app
import express, { json } from 'express';
import cors from 'cors';
import itemsRoute from './routes/itemsRoute.js'


const app = express();
app.use(cors());

app.use('/items', itemsRoute)

app.use(express.static("public"));

app.listen(3000, function() {console.log("Im actively listening at PORT:3000...");})
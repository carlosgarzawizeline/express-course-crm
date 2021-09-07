import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';

// Express app
const app = express();

// Server port
const PORT = 4000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

// Serving static files (images, pdfs, etc.)
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})

app.get('/', (request, response) => {
    response.send(`Node and express server running on port ${PORT}`)
})
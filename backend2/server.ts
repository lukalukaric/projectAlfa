import * as express from 'express';
import { createConnection } from 'typeorm';
import { MenuController } from './app/Controllers/menuController';
import { UserController } from './app/Controllers/userController';

// Create an instance of Express
const app: express.Application = express();
var cors = require('cors');
app.use(cors());

const port = 3000; // You can change this to the desired port number

// Middleware to parse JSON requests
app.use(express.json());

// Core controllers
app.use('/user', UserController);
app.use('/menu', MenuController);


createConnection()
    .then(() => {
        console.log('Connected to the PostgreSQL database');

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }).catch((error) => console.error('Error connecting to the database', error));
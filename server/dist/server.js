import express from 'express';
import { client } from './models/index.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import routes from './routes/api/index.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;
/* MiddleWare - Some additional functionality to our routes or opening/closing layers of access */
// Allow json to be sent from the client/browser to our routes through req.body
app.use(express.json());
// Allow us to use req.cookies in our routes to get the client/browser jwt token
app.use(cookieParser());
// Load all of our routes
app.use('/', routes);
// Sync all of our models to create the database tables (Users, Shops and Wines)
try {
    await client.sync({ force: false });
    console.log('Database synced successfully');
}
catch (error) {
    console.error('Error syncing database:', error);
}
app.listen(PORT, () => console.log('Express server started'));

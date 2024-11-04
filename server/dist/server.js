import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
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
    console.error('Error syncing database:');
}
// Render deployment code that will only trigger when the app is running on Render
if (process.env.PORT) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // Share the contents of client/dist
    app.use(express.static(path.join(__dirname, '../../client/dist')));
    // Wildcard route that will send back the index html file for any requests that are made outside of the routes above
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
}
app.listen(PORT, () => console.log('Express server started'));

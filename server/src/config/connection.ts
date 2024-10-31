import { Sequelize } from 'sequelize';

const client = new Sequelize({
    username: 'postgres',
    password: 'pass',
    database: 'flavorwave_db',
    host: 'localhost',
    dialect: 'postgres'
});

export default client;
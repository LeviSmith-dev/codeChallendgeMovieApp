const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    endPoint: process.env.API_URL,
    masterKey: process.env.API_KEY
};
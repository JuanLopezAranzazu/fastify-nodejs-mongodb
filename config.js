const { config } = require("dotenv");
config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/prueba-fastify-mongodb";
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.PORT || "yoursecretkey";
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

module.exports = {
  MONGODB_URI,
  PORT,
  JWT_SECRET,
  CLOUD_NAME,
  API_KEY,
  API_SECRET,
};

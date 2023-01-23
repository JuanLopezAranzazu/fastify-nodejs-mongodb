const { CLOUD_NAME, API_KEY, API_SECRET } = require("./../config");
const cloudinary = require("cloudinary").v2;
// configuration
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

module.exports = cloudinary;

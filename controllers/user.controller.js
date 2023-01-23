const argon2 = require("argon2");
// models
const User = require("./../models/user.model");
// cloudinary
const cloudinary = require("./../tools/configImage");

const getUsers = async (req, reply) => {
  try {
    const users = await User.find({});
    reply.send(users);
  } catch (error) {
    reply.code(500).send(error);
  }
};

const getUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    reply.send(user);
  } catch (error) {
    reply.code(500).send(error);
  }
};

const createUser = async (req, reply) => {
  try {
    const { username, password, ...rest } = req.body;
    const { file } = req;
    // hash password
    const passwordHash = await argon2.hash(password);
    // cloudinary
    let optsImage = {};
    if (file) {
      const image = await cloudinary.uploader.upload(file.path);
      optsImage = {
        url: image.secure_url,
        cloudinary_id: image.public_id,
      };
    }
    // saved user
    const userSaved = await User.create({
      ...rest,
      username,
      password: passwordHash,
      ...optsImage,
    });
    reply.code(201).send(userSaved);
  } catch (error) {
    reply.code(500).send(error);
  }
};

module.exports = { getUsers, getUser, createUser };

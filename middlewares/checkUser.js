// models
const User = require("./../models/user.model");

const checkUser = async (req, reply) => {
  const { username } = req.body;
  const userFound = await User.findOne({ username });
  if (userFound) {
    reply.code(400).send({ errors: ["This user is already registered"] });
  }
};

module.exports = { checkUser };

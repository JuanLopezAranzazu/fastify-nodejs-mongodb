// controllers
const userController = require("./../controllers/user.controller");
// tools
const uploadImage = require("./../tools/uploadImage");
// middlewares
const { checkUser } = require("./../middlewares/checkUser");

// options
const User = {
  type: "object",
  properties: {
    _id: { type: "string" },
    email: { type: "string" },
    username: { type: "string" },
    password: { type: "string" },
  },
};

const getUsersOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: User,
      },
    },
  },
  handler: userController.getUsers,
};

const getUserOpts = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: userController.getUser,
};

const postUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["email", "username", "password"],
      properties: {
        email: { type: "string" },
        username: { type: "string" },
        password: { type: "string" },
      },
    },
    response: {
      201: User,
    },
  },
  preHandler: [checkUser, uploadImage.single("image")],
  handler: userController.createUser,
};

function userRoutes(fastify, options, done) {
  fastify.get("/users", getUsersOpts);

  fastify.get("/users/:id", getUserOpts);

  fastify.post("/users", postUserOpts);

  done();
}

module.exports = userRoutes;

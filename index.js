const fastify = require("fastify")({
  logger: true,
});
const multer = require("fastify-multer");
fastify.register(multer.contentParser);

// connection mongodb
require("./database");
const { PORT } = require("./config");

// routes
const userRoutes = require("./routes/user.route");

fastify.register(userRoutes);

fastify.listen({ port: PORT }, (err) => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});

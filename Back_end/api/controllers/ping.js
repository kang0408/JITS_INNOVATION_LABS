module.exports = {
  friendlyName: "Ping",

  description: "Ping something.",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // All done.
    return { message: "Pong" };
  },
};

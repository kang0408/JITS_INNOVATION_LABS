module.exports = {
  friendlyName: "Get products",

  description: "Get all products",

  inputs: {},

  exits: {
    notFound: {
      description: "Not found product list",
      responseType: "notFound",
    },
  },

  fn: async function (exits) {
    // All done.
    const products = await Product.find();

    if (!products) return exits.notFound();

    return {
      status: 200,
      message: "Get all products successfully",
      data: products,
    };
  },
};

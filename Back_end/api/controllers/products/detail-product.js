module.exports = {
  friendlyName: "Detail product",

  description: "Get detail of product",

  inputs: {
    id: {
      type: "string",
      description: "Product id in request param",
    },
  },

  exits: {
    notFound: {
      status: {
        defaultTo: 404,
      },
      description: "Product not found",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    const product = await Product.findOne({ id: inputs.id });
    if (!product)
      return exits.notFound({
        message: "Product not found",
      });
    return exits.success({
      status: 200,
      message: "Get detail of product successfully",
      data: product,
    });
  },
};

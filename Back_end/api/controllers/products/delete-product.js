module.exports = {
  friendlyName: "Delete product",

  description: "",

  inputs: {
    id: { type: "string" },
  },

  exits: {
    success: {
      description: "Product updated successfully",
    },
    notFound: {
      description: "Product not found",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    const existed = await Product.findOne({ id: inputs.id });
    if (!existed) return exits.notFound({ message: "Product not found" });

    await Product.destroyOne({ id: existed.id });

    return exits.success({
      status: 200,
      message: "Delete product successfully",
    });
  },
};

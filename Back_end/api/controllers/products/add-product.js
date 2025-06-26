module.exports = {
  friendlyName: "Add product",

  description: "Add new product",

  inputs: {
    title: { type: "string", required: true },
    description: { type: "string" },
    price: { type: "number", required: true, columnType: "FLOAT" },
    discountPercentage: { type: "number", defaultsTo: 0, columnType: "FLOAT" },
    stock: { type: "number", defaultsTo: 0 },
    thumbnail: { type: "string" },
    status: {
      type: "string",
      isIn: ["active", "inactive"],
      defaultsTo: "inactive",
    },
  },

  exits: {
    badRequest: {
      responseType: "badRequest",
      descriptiom: "Not valid or empty field",
    },
  },

  fn: async function (inputs) {
    // All done.
    const newProduct = await Product.create(inputs).fetch();

    return {
      status: 200,
      data: newProduct,
    };
  },
};

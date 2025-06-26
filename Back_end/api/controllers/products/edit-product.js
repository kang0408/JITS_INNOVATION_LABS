module.exports = {
  friendlyName: "Edit product",

  description: "Edit detail product",

  inputs: {
    id: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    price: { type: "number", columnType: "FLOAT" },
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
    if (!existed)
      return exits.notFound({
        message: "Product not found",
      });

    const updateValues = {
      title: inputs.title,
      description: inputs.description,
      price: inputs.price,
      discountPercentage: inputs.discountPercentage,
      stock: inputs.stock,
      thumbnail: inputs.thumbnail,
      status: inputs.status,
    };

    const updatedProduct = await Product.updateOne({ id: existed.id }).set(
      updateValues
    );

    if (!updatedProduct)
      return exits.notFound({ message: "Product can not updated" });

    return exits.success({
      status: 200,
      message: "Updated product successfully",
      data: updatedProduct,
    });
  },
};

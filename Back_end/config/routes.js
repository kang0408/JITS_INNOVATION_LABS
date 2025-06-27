/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // PING
  "GET /api/ping": { action: "ping" },

  // PRODUCTS
  "GET /api/products": { action: "products/get-products" },
  "GET /api/products/:id": { action: "products/detail-product" },
  "POST /api/products/add": { action: "products/add-product" },
  "PATCH /api/product/edit/:id": { action: "products/edit-product" },
  "DELETE /api/product/delete/:id": { action: "products/delete-product" },
};

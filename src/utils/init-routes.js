const express = require('express');

/**
 * @param {string} pathPrefix 
 * @param {express.Express} app
 */
module.exports = (pathPrefix, app) => {
  app.use(pathPrefix, require('../routes/actors.route'));
};

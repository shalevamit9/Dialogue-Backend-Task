const axios = require('../axios-instance');

/**
 * @param {string[]} urls 
 */
module.exports = (urls) => {
  /** @type {Promise[]} */
  const requests = [];

  urls.forEach(url => {
    requests.push(axios.get(url));
  });

  return requests;
};

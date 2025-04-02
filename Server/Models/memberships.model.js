const connection = require('../Config/db');

const getMembershipPlans = (callback) => {
  const query = `SELECT * FROM memberships`;
  connection.query(query, callback);
};

module.exports = {
  getMembershipPlans,
};

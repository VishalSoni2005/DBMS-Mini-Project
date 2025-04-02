const { getMembershipPlans } = require('../Models/memberships.model');

const getMembershipPlan = (req, res) => {
  getMembershipPlans((err, result) => {
    if (err) return res.status(400).json('Interval server Errror');
    res.send(result);
  });
};

module.exports = {
    getMembershipPlan
}
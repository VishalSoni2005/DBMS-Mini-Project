const { getSubscriptedUsers, getSubscription } = require("../Models/subscriptions.model");

const insertInSubscription = (req, res) => {
  const { user_id, membership_id, start_date = new Date() } = req.body;
  getSubscription(user_id, membership_id, start_date, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(500).json({ message: 'Sucess', data: result });
  });
};

const getSubscriptedUsersFromSubscription = (req, res) => {
  getSubscriptedUsers((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
}

module.exports = {
    insertInSubscription,
    getSubscriptedUsersFromSubscription
}
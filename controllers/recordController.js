const { records } = require("../models/Record");

// CREATE
exports.createRecord = (req, res) => {
  const { amount, type, category, date, note } = req.body;

  const record = {
    id: Date.now().toString(),
    userId: req.user.id,
    amount,
    type,
    category,
    date,
    note,
  };

  records.push(record);

  res.json(record);
};

// GET ALL
exports.getRecords = (req, res) => {
  const userRecords = records.filter(r => r.userId === req.user.id);
  res.json(userRecords);
};
exports.getSummary = (req, res) => {
  const userRecords = records.filter(r => r.userId === req.user.id);

  let income = 0;
  let expense = 0;

  userRecords.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
  });
};
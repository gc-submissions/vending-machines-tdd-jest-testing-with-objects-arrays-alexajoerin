const calculateChange = (total, payment) => {
  return Math.round((payment - total) * 100) / 100;
};

const isSufficientPayment = (total, payment) => payment >= total;

const calculateTotal = (array) =>
  Math.round(array.reduce((ac, cv) => ac + cv.price, 0) * 100) / 100;

const addItem = (array, name, price) => array.push({ name, price });

const removeItem = (array, index) => array.splice(index, 1);

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};

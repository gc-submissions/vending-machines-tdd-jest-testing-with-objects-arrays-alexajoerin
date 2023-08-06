const formatCurrency = (amount) => {
  const convertedMoney = Math.round(amount * 100) / 100;
  if (amount < 0) {
    return `-$${Math.abs(convertedMoney).toFixed(2)}`;
  }
  return `$${convertedMoney.toFixed(2)}`;
};

const getCoins = (cents) => {
  const coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  while (cents > 0) {
    if (cents >= 25) {
      coins.quarters++;
      cents -= 25;
    } else if (cents >= 10) {
      coins.dimes++;
      cents -= 10;
    } else if (cents >= 5) {
      coins.nickels++;
      cents -= 5;
    } else {
      coins.pennies++;
      cents -= 1;
    }
  }
  return coins;
};

module.exports = { formatCurrency, getCoins };

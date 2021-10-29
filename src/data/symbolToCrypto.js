//eslint-disable-next-line
const fs = require('fs');
  const json = require('./data.json');
  const symbols = new Set();
  for (const object of json) {
    symbols.add(object.SYMBOL);
  }
  const cryptocurrencies = require('cryptocurrencies');
  const symbolToCrypto = new Map();
  for (const symbol of symbols) {
    symbolToCrypto.set(symbol, cryptocurrencies[symbol]);
  }

export default symbolToCrypto;
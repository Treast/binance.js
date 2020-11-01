require('dotenv').config();
const { Binance } = require('../dist/Binance');

const binance = new Binance.Api(process.env.API_KEY, process.env.SECRET_KEY, false);

binance
  .walletDepositHistory()
  .then((res) => console.log(res))
  .catch((err) => console.log('Error', err));

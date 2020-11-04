require('dotenv').config();
const { Binance } = require('./dist/Binance');

const binance = new Binance.Api(process.env.API_KEY, process.env.SECRET_KEY, false);

binance
  .streamPartialBookDepth({
    symbol: 'BTCUSDT',
    levels: 20,
    updateSpeed: 100,
  })
  .on('message', (message) => {
    console.log(message);
  });

require('dotenv').config();
const { Binance } = require('./dist/Binance');

const binance = new Binance.Api(process.env.TEST_API_KEY, process.env.TEST_SECRET_KEY, true);

binance
  .spotNewOCO({
    symbol: 'BNBUSDT',
    price: 27,
    quantity: 10,
    side: Binance.EOrderSide.BUY,
    stopPrice: 29.5,
    stopLimitPrice: 30,
    stopLimitTimeInForce: Binance.EOrderTimeInForce.GTC,
  })
  .then((res) => console.log(res))
  .catch((err) => console.log('Error', err));

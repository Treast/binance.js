require('dotenv').config();

import { Binance } from '../src/Binance';

// const Binance = require('../dist/Binance');

it('should create an instance', () => {
  const binance = new Binance.Api(process.env.API_KEY, process.env.SECRET_KEY);
  // console.log(binance);
});

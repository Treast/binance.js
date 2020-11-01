require('dotenv').config();

import { Binance } from '../dist/Binance';

it('should create an instance', () => {
  const binance = new Binance(process.env.API_KEY, process.env.SECRET_KEY);
  // console.log(binance);
});

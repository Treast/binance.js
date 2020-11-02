require('dotenv').config();

import { Binance } from '../dist/Binance';

it('should create an instance', () => {
  new Binance.Api(process.env.TEST_API_KEY, process.env.TEST_SECRET_KEY, true);
});

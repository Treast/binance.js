require('dotenv').config();

import { Binance } from '../src/Binance';

describe('test global Binance features', () => {
  it('should create an instance', () => {
    new Binance.Api(process.env.TEST_API_KEY, process.env.TEST_SECRET_KEY, true);
  });

  it('should throw an error on no API KEY', () => {
    expect.assertions(1);

    try {
      new Binance.Api(null, process.env.TEST_SECRET_KEY, true);
    } catch (err) {
      expect(err.message).toEqual('A valid API key is required');
    }
  });

  it('should throw an error on no SECRET KEY', () => {
    expect.assertions(1);

    try {
      new Binance.Api(process.env.TEST_API_KEY, null, true);
    } catch (err) {
      expect(err.message).toEqual('A valid secret key is required');
    }
  });

  it('should throw an error on wrong symbol', async () => {
    expect.assertions(2);

    const binance = new Binance.Api(process.env.TEST_API_KEY, process.env.TEST_SECRET_KEY, true);

    await binance
      .spotNewOrder({
        symbol: 'NONEXISTINGSYMBOL',
        side: Binance.EOrderSide.BUY,
        type: Binance.EOrderType.MARKET,
        quantity: 1,
      })
      .catch((err) => {
        expect(err).toHaveProperty('code', -1121);
        expect(err).toHaveProperty('msg', 'Invalid symbol.');
      });
  });
});

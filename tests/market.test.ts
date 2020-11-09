require('dotenv').config();

import { Binance } from '../src/Binance';

let binance: Binance.Api;

describe('test all Market endpoints', () => {
  beforeAll(() => {
    binance = new Binance.Api(process.env.TEST_API_KEY, process.env.TEST_SECRET_KEY, true);
  });

  it('should GET #TestConnectivity', async () => {
    expect.assertions(1);

    const res = await binance.marketTestConnectivity();

    expect(res).toStrictEqual({});
  });

  it('should GET #CheckServerTime', async () => {
    expect.assertions(2);

    const time = Date.now() - 60;

    const res = await binance.marketCheckServerTime();

    expect(res).toHaveProperty('serverTime');
    expect(res.serverTime).toBeGreaterThan(time);
  });

  it('should GET #ExchangeInformation', async () => {
    expect.assertions(4);

    const res = await binance.marketExchangeInformation();

    expect(res).toHaveProperty('symbols');
    expect(res).toHaveProperty('exchangeFilters');
    expect(res.symbols.length).toBeGreaterThanOrEqual(0);
    expect(res.exchangeFilters.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #OrderBook', async () => {
    expect.assertions(4);

    const res = await binance.marketOrderBook({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('asks');
    expect(res).toHaveProperty('bids');
    expect(res.asks.length).toBeGreaterThanOrEqual(0);
    expect(res.bids.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #RecentTradesList', async () => {
    expect.assertions(1);

    const res = await binance.marketRecentTradesList({
      symbol: 'BTCUSDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #OldTradeLookup', async () => {
    expect.assertions(1);

    const res = await binance.marketOldTradeLookup({
      symbol: 'BTCUSDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #AggregateTradesList', async () => {
    expect.assertions(1);

    const res = await binance.marketAggregateTradesList({
      symbol: 'BTCUSDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #KlineData', async () => {
    expect.assertions(1);

    const res = await binance.marketKlineData({
      symbol: 'BTCUSDT',
      interval: '1m',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #CurrentAveragePrice', async () => {
    expect.assertions(2);

    const res = await binance.marketCurrentAveragePrice({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('price');
    expect(parseFloat(res.price)).toBeGreaterThanOrEqual(0);
  });

  it('should GET #24hrTickerPriceChange', async () => {
    expect.assertions(2);

    const res = await binance.market24hrTickerPriceChange({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('symbol', 'BTCUSDT');
    expect(res).toHaveProperty('priceChange');
  });

  it('should GET #SymbolPriceTicker', async () => {
    expect.assertions(2);

    const res = await binance.marketSymbolPriceTicker({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('symbol', 'BTCUSDT');
    expect(res).toHaveProperty('price');
  });

  it('should GET #SymbolOrderBookTicker', async () => {
    expect.assertions(3);

    const res = await binance.marketSymbolOrderBookTicker({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('symbol', 'BTCUSDT');
    expect(res).toHaveProperty('bidPrice');
    expect(res).toHaveProperty('bidQty');
  });
});

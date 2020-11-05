require('dotenv').config();

import { Binance } from '../src/Binance';

let binance: Binance.Api;
let cache: Record<string, any> = [];

const SYMBOL = 'BTCUSDT';

describe('test all Streams', () => {
  beforeAll(() => {
    binance = new Binance.Api(process.env.TEST_API_KEY, process.env.TEST_SECRET_KEY, true);
  });

  it('should stream #AggregateTrade', (done) => {
    const ws = binance.streamAggregateTrade({
      symbol: SYMBOL,
    });

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('e', 'aggTrade');
      expect(data).toHaveProperty('s', SYMBOL);
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #Trade', (done) => {
    const ws = binance.streamTrade({
      symbol: SYMBOL,
    });

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('e', 'trade');
      expect(data).toHaveProperty('s', SYMBOL);
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #Candlestick', (done) => {
    const ws = binance.streamCandlestick({
      symbol: SYMBOL,
      interval: Binance.EInterval.INTERVAL_1m,
    });

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('e', 'kline');
      expect(data).toHaveProperty('s', SYMBOL);
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #IndividualSymbolMiniTicker', (done) => {
    const ws = binance.streamIndividualSymbolMiniTicker({
      symbol: SYMBOL,
    });

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('e', '24hrMiniTicker');
      expect(data).toHaveProperty('s', SYMBOL);
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #AllMarketMiniTickers', (done) => {
    const ws = binance.streamAllMarketMiniTickers();

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty('e', '24hrMiniTicker');
      expect(data[0]).toHaveProperty('s');
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #IndividualSymbolTicker', (done) => {
    const ws = binance.streamIndividualSymbolTicker({
      symbol: SYMBOL,
    });

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('e', '24hrTicker');
      expect(data).toHaveProperty('s', SYMBOL);
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #AllMarketTickers', (done) => {
    const ws = binance.streamAllMarketTickers();

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty('e', '24hrTicker');
      expect(data[0]).toHaveProperty('s');
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #IndividualSymbolBookTicker', (done) => {
    const ws = binance.streamIndividualSymbolBookTicker({
      symbol: SYMBOL,
    });

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('s', SYMBOL);
      expect(data).toHaveProperty('b');
      expect(data).toHaveProperty('B');
      expect(data).toHaveProperty('a');
      expect(data).toHaveProperty('A');
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #AllBookTickers', (done) => {
    const ws = binance.streamAllBookTickers();

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('s');
      expect(data).toHaveProperty('b');
      expect(data).toHaveProperty('B');
      expect(data).toHaveProperty('a');
      expect(data).toHaveProperty('A');
      ws.close();
    }).on('close', () => done());
  });

  it('should stream #PartialBookDepth', (done) => {
    const ws = binance.streamPartialBookDepth({
      levels: 5,
      symbol: SYMBOL,
    });

    ws.on('message', (message) => {
      const data = JSON.parse(message.toString());
      expect(data).toHaveProperty('lastUpdateId');
      expect(data).toHaveProperty('bids');
      expect(data).toHaveProperty('asks');
      ws.close();
    }).on('close', () => done());
  });
});

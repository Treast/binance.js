require('dotenv').config();

import { Binance } from '../src/Binance';

let binance: Binance.Api;
let cache: Record<string, any> = [];

describe('test all Margin endpoints', () => {
  beforeAll(() => {
    binance = new Binance.Api(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it('should GET #QueryMarginAsset', async () => {
    expect.assertions(2);

    const res = await binance.marginQueryMarginAsset({
      asset: 'BTC',
    });

    expect(res).toHaveProperty('assetFullName', 'Bitcoin');
    expect(res).toHaveProperty('assetName', 'BTC');
  });

  it('should GET #QueryCrossMarginPair', async () => {
    expect.assertions(3);

    const res = await binance.marginQueryCrossMarginPair({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('symbol', 'BTCUSDT');
    expect(res).toHaveProperty('base', 'BTC');
    expect(res).toHaveProperty('quote', 'USDT');
  });

  it('should GET #GetAllCrossMarginAssets', async () => {
    expect.assertions(2);

    const res = await binance.marginGetAllCrossMarginAssets();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0]).toHaveProperty('assetFullName');
  });

  it('should GET #GetAllCrossMarginPairs', async () => {
    expect.assertions(2);

    const res = await binance.marginGetAllCrossMarginPairs();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0]).toHaveProperty('symbol');
  });

  it('should GET #QueryMarginPriceIndex', async () => {
    expect.assertions(2);

    const res = await binance.marginQueryMarginPriceIndex({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('symbol', 'BTCUSDT');
    expect(res).toHaveProperty('price');
  });

  it('should GET #GetCrossMarginTransferHistory', async () => {
    expect.assertions(3);

    const res = await binance.marginGetCrossMarginTransferHistory();

    expect(res).toHaveProperty('rows');
    expect(res).toHaveProperty('total');
    expect(res.rows.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryLoanRecord', async () => {
    expect.assertions(3);

    const res = await binance.marginQueryLoanRecord({
      asset: 'BTC',
      startTime: 0,
    });

    expect(res).toHaveProperty('rows');
    expect(res).toHaveProperty('total');
    expect(res.rows.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryRepayRecord', async () => {
    expect.assertions(3);

    const res = await binance.marginQueryRepayRecord({
      asset: 'BTC',
      startTime: 0,
    });

    expect(res).toHaveProperty('rows');
    expect(res).toHaveProperty('total');
    expect(res.rows.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #GetInterestHistory', async () => {
    expect.assertions(3);

    const res = await binance.marginGetInterestHistory({
      asset: 'BTC',
    });

    expect(res).toHaveProperty('rows');
    expect(res).toHaveProperty('total');
    expect(res.rows.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #GetForceLiquidationHistory', async () => {
    expect.assertions(3);

    const res = await binance.marginGetForceLiquidationHistory();

    expect(res).toHaveProperty('rows');
    expect(res).toHaveProperty('total');
    expect(res.rows.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryCrossMarginAccountDetails', async () => {
    expect.assertions(3);

    const res = await binance.marginQueryCrossMarginAccountDetails();

    expect(res).toHaveProperty('marginLevel');
    expect(res).toHaveProperty('totalAssetOfBtc');
    expect(res).toHaveProperty('totalNetAssetOfBtc');
  });

  it('should GET #QueryMarginAccountOpenOrder', async () => {
    expect.assertions(1);

    const res = await binance.marginQueryMarginAccountOpenOrder({
      symbol: 'BTCUSDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryMarginAccountAllOrder', async () => {
    expect.assertions(1);

    const res = await binance.marginQueryMarginAccountAllOrder({
      symbol: 'BTCUSDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryMarginAccountTradeList', async () => {
    expect.assertions(1);

    const res = await binance.marginQueryMarginAccountTradeList({
      symbol: 'BTCUSDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryMaxBorrow', async () => {
    expect.assertions(2);

    const res = await binance.marginQueryMaxBorrow({
      asset: 'BTC',
    });

    expect(res).toHaveProperty('amount');
    expect(res).toHaveProperty('borrowLimit');
  });

  it('should GET #QueryMaxTransferOutAmount', async () => {
    expect.assertions(1);

    const res = await binance.marginQueryMaxTransferOutAmount({
      asset: 'BTC',
    });

    expect(res).toHaveProperty('amount');
  });

  it('should GET #GetIsolatedMarginTransferHistory', async () => {
    expect.assertions(3);

    const res = await binance.marginGetIsolatedMarginTransferHistory({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('rows');
    expect(res).toHaveProperty('total');
    expect(res.rows.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryIsolatedMarginAccountInfo', async () => {
    expect.assertions(4);

    const res = await binance.marginQueryIsolatedMarginAccountInfo();

    expect(res).toHaveProperty('assets');
    expect(res.assets.length).toBeGreaterThanOrEqual(0);
    expect(res).toHaveProperty('totalAssetOfBtc');
    expect(res).toHaveProperty('totalNetAssetOfBtc');
  });

  it('should GET #QueryIsolatedMarginSymbol', async () => {
    expect.assertions(3);

    const res = await binance.marginQueryIsolatedMarginSymbol({
      symbol: 'BTCUSDT',
    });

    expect(res).toHaveProperty('symbol', 'BTCUSDT');
    expect(res).toHaveProperty('base', 'BTC');
    expect(res).toHaveProperty('quote', 'USDT');
  });

  it('should GET #GetAllIsolatedMarginSymbol', async () => {
    expect.assertions(1);

    const res = await binance.marginGetAllIsolatedMarginSymbol();

    expect(res.length).toBeGreaterThanOrEqual(0);
  });
});

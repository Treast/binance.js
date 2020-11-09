require('dotenv').config();

import { Binance } from '../src/Binance';

let binance: Binance.Api;

describe('test all Wallet endpoints', () => {
  beforeAll(() => {
    binance = new Binance.Api(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it('should GET #DepositHistory', async () => {
    expect.assertions(1);

    const res = await binance.walletDepositHistory();

    expect(res).toHaveProperty('success', true);
  });

  it('should GET #WithdrawHistory', async () => {
    expect.assertions(1);

    const res = await binance.walletWithdrawHistory();

    expect(res).toHaveProperty('success', true);
  });

  it('should GET #DepositAddress', async () => {
    expect.assertions(3);

    const res = await binance.walletDepositAddress({
      asset: 'BTC',
    });

    expect(res).toHaveProperty('success', true);
    expect(res).toHaveProperty('address');
    expect(res).toHaveProperty('asset', 'BTC');
  });

  it('should GET #AccountStatus', async () => {
    expect.assertions(1);

    const res = await binance.walletAccountStatus();

    expect(res).toHaveProperty('success', true);
  });

  it('should GET #SystemStatus', async () => {
    expect.assertions(1);

    const res = await binance.walletSystemStatus();

    expect(res).toHaveProperty('status');
  });

  it('should GET #ApiTradingStatus', async () => {
    expect.assertions(2);

    const res = await binance.walletApiTradingStatus();

    expect(res).toHaveProperty('success', true);
    expect(res).toHaveProperty('status');
  });

  it('should GET #DustLog', async () => {
    expect.assertions(1);

    const res = await binance.walletDustLog();

    expect(res).toHaveProperty('success', true);
  });

  it('should GET #TradeFee', async () => {
    expect.assertions(2);

    const res = await binance.walletTradeFee();

    expect(res).toHaveProperty('success', true);
    expect(res).toHaveProperty('tradeFee');
  });

  it('should GET #TradeFee', async () => {
    expect.assertions(2);

    const res = await binance.walletTradeFee();

    expect(res).toHaveProperty('success', true);
    expect(res).toHaveProperty('tradeFee');
  });

  it('should GET #AssetDetail', async () => {
    expect.assertions(2);

    const res = await binance.walletAssetDetail();

    expect(res).toHaveProperty('success', true);
    expect(res).toHaveProperty('assetDetail');
  });

  it('should GET #AllCoins', async () => {
    expect.assertions(1);

    const res = await binance.walletAllCoins();

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #DailyAccountSnapshot', async () => {
    expect.assertions(3);

    const res = await binance.walletDailyAccountSnapshot({
      type: 'SPOT',
    });

    expect(res).toHaveProperty('snapshotVos');
    expect(res).toHaveProperty('code', 200);
    expect(res.snapshotVos.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #AssetDividend', async () => {
    expect.assertions(3);

    const res = await binance.walletAssetDividend();

    expect(res).toHaveProperty('total');
    expect(res).toHaveProperty('rows');
    expect(res.rows.length).toBeGreaterThanOrEqual(0);
  });
});

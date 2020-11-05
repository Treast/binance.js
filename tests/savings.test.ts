require('dotenv').config();

import { Binance } from '../src/Binance';

let binance: Binance.Api;
let cache: Record<string, any> = [];

describe('test all Savings endpoints', () => {
  beforeAll(() => {
    binance = new Binance.Api(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it('should GET #GetFlexibleProductList', async () => {
    expect.assertions(3);

    const res = await binance.savingsGetFlexibleProductList();

    expect(res.length).toBeGreaterThanOrEqual(0);
    expect(res[0]).toHaveProperty('asset');
    expect(res[0]).toHaveProperty('status');

    cache['productId'] = res[0].productId;
  });

  it('should GET #GetLeftDailyPurchaseQuotaFlexibleProduct', async () => {
    expect.assertions(2);

    const res = await binance.savingsGetLeftDailyPurchaseQuotaFlexibleProduct({
      productId: cache['productId'],
    });

    expect(res).toHaveProperty('asset');
    expect(res).toHaveProperty('leftQuota');
  });

  it('should GET #GetLeftDailyRedemptionQuotaFlexibleProduct', async () => {
    expect.assertions(4);

    const res = await binance.savingsGetLeftDailyRedemptionQuotaFlexibleProduct({
      productId: cache['productId'],
      type: Binance.ESavingsType.NORMAL,
    });

    expect(res).toHaveProperty('asset');
    expect(res).toHaveProperty('leftQuota');
    expect(res).toHaveProperty('dailyQuota');
    expect(res).toHaveProperty('minRedemptionAmount');
  });

  it('should GET #GetFlexibleProductPosition', async () => {
    expect.assertions(1);

    const res = await binance.savingsGetFlexibleProductPosition({
      asset: 'USDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #GetFixedActivityProjectList', async () => {
    expect.assertions(1);

    const res = await binance.savingsGetFixedActivityProjectList({
      type: 'ACTIVITY',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #GetFixedActivityProjectPosition', async () => {
    expect.assertions(1);

    const res = await binance.savingsGetFixedActivityProjectPosition({
      asset: 'USDT',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #LendingAccount', async () => {
    expect.assertions(2);

    const res = await binance.savingsLendingAccount();

    expect(res).toHaveProperty('positionAmountVos');
    expect(res).toHaveProperty('totalAmountInUSDT');
  });

  it('should GET #GetPurchaseRecord', async () => {
    expect.assertions(1);

    const res = await binance.savingsGetPurchaseRecord({
      lendingType: 'DAILY',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #GetRedemptionRecord', async () => {
    expect.assertions(1);

    const res = await binance.savingsGetRedemptionRecord({
      lendingType: 'DAILY',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #GetInterestHistory', async () => {
    expect.assertions(1);

    const res = await binance.savingsGetInterestHistory({
      lendingType: 'DAILY',
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });
});

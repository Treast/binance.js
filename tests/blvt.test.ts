require('dotenv').config();

import { Binance } from '../src/Binance';

let binance: Binance.Api;
let cache: Record<string, any> = [];

describe('test all BLVT endpoints', () => {
  beforeAll(() => {
    binance = new Binance.Api(process.env.API_KEY, process.env.SECRET_KEY, false);
  });

  it('should GET #GetBLVTInfo', async () => {
    expect.assertions(4);

    const res = await binance.blvtGetBLVTInfo();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0]).toHaveProperty('dailyManagementFee');
    expect(res[0]).toHaveProperty('fundingRate');
    expect(res[0]).toHaveProperty('realLeverage');
  });

  it('should GET #QuerySubscriptionRecord', async () => {
    expect.assertions(1);

    const res = await binance.blvtQuerySubscriptionRecord();

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryRedemptionRecord', async () => {
    expect.assertions(1);

    const res = await binance.blvtQueryRedemptionRecord({});

    expect(res.length).toBeGreaterThanOrEqual(0);
  });
});

require('dotenv').config();

import { Binance } from '../src/Binance';

let binance: Binance.Api;
let cache: Record<string, any> = [];

const ASSET_ORDER = 'BTCUSDT';
const ASSET_ORDER_OCO = 'BNBUSDT';

const createOrder = () => {
  return binance.spotNewOrder({
    symbol: ASSET_ORDER,
    side: Binance.EOrderSide.BUY,
    type: Binance.EOrderType.LIMIT,
    quantity: 0.01,
    price: 1000,
    timeInForce: Binance.EOrderTimeInForce.GTC,
  });
};

const createOCOOrder = async () => {
  const bnbRes = await binance.marketCurrentAveragePrice({
    symbol: ASSET_ORDER_OCO,
  });

  const bnbPrice = parseFloat(parseFloat(bnbRes.price).toFixed(2));

  return binance.spotNewOCO({
    symbol: ASSET_ORDER_OCO,
    price: bnbPrice - 1,
    quantity: 10,
    side: Binance.EOrderSide.BUY,
    stopPrice: bnbPrice + 1.5,
    stopLimitPrice: bnbPrice + 2,
    stopLimitTimeInForce: Binance.EOrderTimeInForce.GTC,
  });
};

describe('test all Spot endpoints', () => {
  beforeAll(() => {
    binance = new Binance.Api(process.env.TEST_API_KEY, process.env.TEST_SECRET_KEY, true);
  });

  it('should POST #TestNewOrder', async () => {
    expect.assertions(1);

    const res = await binance.spotTestNewOrder({
      symbol: ASSET_ORDER,
      side: Binance.EOrderSide.SELL,
      type: Binance.EOrderType.MARKET,
      quantity: 0.01,
    });

    expect(res).toStrictEqual({});
  });

  it('should POST #NewOrder', async () => {
    expect.assertions(1);

    const res = await createOrder();

    cache['orderId'] = res.orderId;

    expect(res).toHaveProperty('symbol', ASSET_ORDER);
  });

  it('should GET #QueryOrder', async () => {
    expect.assertions(2);

    const res = await binance.spotQueryOrder({
      symbol: ASSET_ORDER,
      orderId: cache['orderId'],
    });

    expect(res).toHaveProperty('symbol', ASSET_ORDER);
    expect(res).toHaveProperty('orderId', cache['orderId']);
  });

  it('should DELETE #CancelOrder', async () => {
    expect.assertions(1);

    const res = await binance.spotCancelOrder({
      symbol: ASSET_ORDER,
      orderId: cache['orderId'],
    });

    expect(res).toHaveProperty('symbol', ASSET_ORDER);
  });

  it('should DELETE #CancelAllOrderOnSymbol', async () => {
    expect.assertions(1);

    await createOrder();

    const res = await binance.spotCancelAllOrdersOnSymbol({
      symbol: ASSET_ORDER,
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #CurrentOpenOrders', async () => {
    expect.assertions(1);

    await createOrder();

    const res = await binance.spotCurrentOpenOrders({
      symbol: ASSET_ORDER,
    });

    expect(res.length).toEqual(1);
  });

  it('should GET #AllOrders', async () => {
    expect.assertions(1);

    const res = await binance.spotAllOrders({
      symbol: ASSET_ORDER,
    });

    expect(res.length).toBeGreaterThanOrEqual(1);
  });

  it('should POST #NewOCO', async () => {
    expect.assertions(1);

    const res = await createOCOOrder();

    cache['orderListId'] = res.orderListId;

    expect(res).toHaveProperty('symbol', ASSET_ORDER_OCO);
  });

  it('should DELETE #CancelOCO', async () => {
    expect.assertions(1);

    const res = await binance.spotCancelOCO({
      symbol: ASSET_ORDER_OCO,
      orderListId: cache['orderListId'],
    });

    expect(res).toHaveProperty('symbol', ASSET_ORDER_OCO);
  });

  it('should GET #QueryOCO', async () => {
    expect.assertions(1);

    const order = await createOCOOrder();

    const res = await binance.spotQueryOCO({
      orderListId: order.orderListId,
    });

    cache['orderListId'] = order.orderListId;

    expect(res).toHaveProperty('symbol', ASSET_ORDER_OCO);
  });

  it('should GET #QueryAllOCO', async () => {
    expect.assertions(1);

    const res = await binance.spotQueryAllOCO();

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #QueryOpenOCO', async () => {
    expect.assertions(1);

    const res = await binance.spotQueryOpenOCO();

    await binance.spotCancelOCO({
      symbol: ASSET_ORDER_OCO,
      orderListId: cache['orderListId'],
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });

  it('should GET #AccountInformation', async () => {
    expect.assertions(2);

    const res = await binance.spotAccountInformation();

    expect(res).toHaveProperty('accountType');
    expect(res).toHaveProperty('balances');
  });

  it('should GET #AccountTradeList', async () => {
    expect.assertions(1);

    const res = await binance.spotAccountTradeList({
      symbol: ASSET_ORDER,
    });

    expect(res.length).toBeGreaterThanOrEqual(0);
  });
});

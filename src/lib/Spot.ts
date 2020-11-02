import { Binance } from '../Binance';

export class Spot {
  spotTestNewOrder(this: Binance.Api, params: ISpotNewOrderParameters) {
    return this.sendRequest<ISpotNewOrderParameters, Binance.IResponseEmpty>(
      '/api/v3/order/test',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  spotNewOrder(this: Binance.Api, params: ISpotNewOrderParameters) {
    return this.sendRequest<ISpotNewOrderParameters, ISpotNewOrder>(
      '/api/v3/order',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  spotCancelOrder(this: Binance.Api, params: ISpotCancelOrderParameters) {
    return this.sendRequest<ISpotCancelOrderParameters, ISpotCancelOrder>(
      '/api/v3/order',
      params,
      Binance.ERequestMethod.DELETE,
      Binance.ESecurityType.TRADE
    );
  }

  spotCancelAllOrdersOnSymbol(this: Binance.Api, params: ISpotCancelAllOrdersOnSymbolParameters) {
    return this.sendRequest<ISpotCancelAllOrdersOnSymbolParameters, ISpotCancelAllOrdersOnSymbol[]>(
      '/api/v3/openOrders',
      params,
      Binance.ERequestMethod.DELETE,
      Binance.ESecurityType.TRADE
    );
  }

  spotQueryOrder(this: Binance.Api, params: ISpotQueryOrderParameters) {
    return this.sendRequest<ISpotQueryOrderParameters, ISpotQueryOrder>(
      '/api/v3/order',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  spotCurrentOpenOrders(this: Binance.Api, params: ISpotCurrentOpenOrdersParameters) {
    return this.sendRequest<ISpotCurrentOpenOrdersParameters, ISpotCurrentOpenOrders[]>(
      '/api/v3/openOrders',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  spotAllOrders(this: Binance.Api, params: ISpotAllOrdersParameters) {
    return this.sendRequest<ISpotAllOrdersParameters, ISpotAllOrders[]>(
      '/api/v3/allOrders',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  spotNewOCO(this: Binance.Api, params: ISpotNewOCOParameters) {
    return this.sendRequest<ISpotNewOCOParameters, ISpotNewOCO>(
      '/api/v3/order/oco',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  spotCancelOCO(this: Binance.Api, params: ISpotCancelOCOParameters) {
    return this.sendRequest<ISpotCancelOCOParameters, ISpotCancelOCO>(
      '/api/v3/orderList',
      params,
      Binance.ERequestMethod.DELETE,
      Binance.ESecurityType.TRADE
    );
  }

  spotQueryOCO(this: Binance.Api, params: ISpotQueryOCOParameters) {
    return this.sendRequest<ISpotQueryOCOParameters, ISpotQueryOCO>(
      '/api/v3/orderList',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  spotQueryAllOCO(this: Binance.Api, params: ISpotQueryAllOCOParameters) {
    return this.sendRequest<ISpotQueryAllOCOParameters, ISpotQueryAllOCO[]>(
      '/api/v3/allOrderList',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  spotQueryOpenOCO(this: Binance.Api, params: Binance.IRequestParameters = {}) {
    return this.sendRequest<Binance.IRequestParameters, ISpotQueryOrder[]>(
      '/api/v3/openOrderList',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  spotAccountInformation(this: Binance.Api, params: Binance.IRequestParameters = {}) {
    return this.sendRequest<Binance.IRequestParameters, ISpotAccountInformation>(
      '/api/v3/account',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  spotAccountTradeList(this: Binance.Api, params: ISpotAccountTradeListParameters) {
    return this.sendRequest<ISpotAccountTradeListParameters, ISpotAccountTradeList>(
      '/api/v3/myTrades',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }
}

export interface ISpotNewOrderParameters extends Binance.IRequestParameters {
  symbol: string;
  side: Binance.EOrderSide; // Enum
  type: Binance.EOrderType; // Enum
  timeInForce?: Binance.EOrderTimeInForce; // Enum
  quantity?: number;
  quoteOrderQty?: number;
  price?: number;
  newClientOrderId?: string;
  stopPrice?: number;
  icebergQty?: number;
  newOrderRespType?: Binance.EOrderResponseType;
}

export interface ISpotNewOrder {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  transactTime: number;
  price: string;

  origQty?: string;
  executedQty?: string;
  cummulativeQuoteQty?: string;
  status?: Binance.EOrderStatus;
  timeInForce?: Binance.EOrderTimeInForce;
  type?: Binance.EOrderType;
  side?: Binance.EOrderSide;
  fills?: ISpotNewOrderFill[];
}

export interface ISpotNewOrderFill {
  price: string;
  qty: string;
  commission: string;
  commissionAsset: string;
}

export interface ISpotCancelOrderParameters extends Binance.IRequestParameters {
  symbol: string;
  orderId?: number;
  origClientOrderId?: number;
  newClientOrderId?: number;
}

export interface ISpotCancelOrder {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: Binance.EOrderStatus;
  timeInForce: Binance.EOrderTimeInForce;
  type: Binance.EOrderType;
  side: Binance.EOrderSide;
}

export interface ISpotCancelAllOrdersOnSymbolParameters extends Binance.IRequestParameters {
  symbol: string;
}

export interface ISpotCancelAllOrdersOnSymbol extends ISpotCancelOrder {
  contingencyType: string;
  listStatusType: string;
  listOrderType: string;
  listClientOrderId: string;
  transactionTime: number;
  orders: ISpotCancelAllOrdersOnSymbolOrder[];
  orderReports: ISpotCancelAllOrdersOnSymbolOrderReport[];
}

export interface ISpotCancelAllOrdersOnSymbolOrder {
  symbol: string;
  orderId: number;
  clientOrderId: string;
}

export interface ISpotCancelAllOrdersOnSymbolOrderReport {
  symbol: string;
  origClientOrderId: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: Binance.EOrderStatus;
  timeInForce: Binance.EOrderTimeInForce;
  type: Binance.EOrderType;
  side: Binance.EOrderSide;
  stopPrice: string;
  icebergQty: string;
}

export interface ISpotQueryOrderParameters extends Binance.IRequestParameters {
  symbol: string;
  orderId?: number;
  origClientOrderId?: string;
}

export interface ISpotQueryOrder {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: Binance.EOrderStatus;
  timeInForce: Binance.EOrderTimeInForce;
  type: Binance.EOrderType;
  side: Binance.EOrderSide;
  stopPrice: string;
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  origQuoteOrderQty: string;
}

export interface ISpotCurrentOpenOrdersParameters extends Binance.IRequestParameters {
  symbol?: string;
}

export type ISpotCurrentOpenOrders = ISpotQueryOrder;

export interface ISpotAllOrdersParameters extends Binance.IRequestParameters {
  symbol: string;
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export type ISpotAllOrders = ISpotCurrentOpenOrders;

export interface ISpotNewOCOParameters extends Binance.IRequestParameters {
  symbol: string;
  listClientOrderId?: string;
  side: Binance.EOrderSide;
  quantity: number;
  limitClientOrderId?: string;
  price: number;
  limitIcebergQty?: number;
  stopClientOrderId?: string;
  stopPrice: number;
  stopLimitPrice?: number;
  stopIcebergQty?: number;
  stopLimitTimeInForce?: Binance.EOrderTimeInForce;
  newOrderRespType?: Binance.EOrderResponseType;
}

export interface ISpotNewOCO {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderType: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: ISpotNewOCOOrder[];
  orderReports: ISpotNewOCOOrderReport[];
}

export type ISpotNewOCOOrder = ISpotCancelAllOrdersOnSymbolOrder;
export type ISpotNewOCOOrderReport = ISpotCancelAllOrdersOnSymbolOrderReport;

export interface ISpotCancelOCOParameters extends Binance.IRequestParameters {
  symbol: string;
  orderListId?: number;
  listClientorderId?: string;
  newClientOrderId?: string;
}

export type ISpotCancelOCO = ISpotNewOCO;
export type ISpotCancelOCOOrder = ISpotNewOCOOrder;
export type ISpotCancelOCOOrderReport = ISpotNewOCOOrderReport;

export interface ISpotQueryOCOParameters extends Binance.IRequestParameters {
  orderListId?: number;
  origClientOrderId?: string;
}

export interface ISpotQueryOCO {
  orderListId: number;
  contingencyType: string;
  listStatusType: string;
  listOrderType: string;
  listClientOrderId: string;
  transactionTime: number;
  symbol: string;
  orders: ISpotQueryOCOOrder[];
}

export type ISpotQueryOCOOrder = ISpotCancelOCOOrder;

export interface ISpotQueryAllOCOParameters extends Binance.IRequestParameters {
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export type ISpotQueryAllOCO = ISpotQueryOCO;

export type ISpotQueryOpenOCO = ISpotQueryAllOCO;

export interface ISpotAccountInformation {
  makerCommission: number;
  takerCommission: number;
  buyerCommission: number;
  sellerCommission: number;
  canTrade: boolean;
  canWithdraw: boolean;
  canDeposit: boolean;
  updateTime: number;
  accountType: string;
  balances: ISpotAccountInformationBalance[];
  permissions: string[];
}

export interface ISpotAccountInformationBalance {
  asset: string;
  free: string;
  locked: string;
}

export interface ISpotAccountTradeListParameters extends Binance.IRequestParameters {
  symbol: string;
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
}

export interface ISpotAccountTradeList {
  symbol: string;
  id: number;
  orderId: number;
  orderListId: number;
  price: string;
  qty: string;
  quoteQty: string;
  commission: string;
  commissionAsset: string;
  time: number;
  isBuyer: boolean;
  isMaker: boolean;
  isBestMatch: boolean;
}

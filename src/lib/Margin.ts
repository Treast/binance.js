import { Binance } from '../Binance';

export class Margin {
  marginCrossMarginAccountTransfer(this: Binance.Api, params: IMarginCrossMarginAccountTransferParameters) {
    return this.sendRequest<IMarginCrossMarginAccountTransferParameters, IMarginCrossMarginAccountTransfer>(
      '/sapi/v1/margin/transfer',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.MARGIN
    );
  }

  marginAccountBorrow(this: Binance.Api, params: IMarginAccountBorrowParameters) {
    return this.sendRequest<IMarginAccountBorrowParameters, IMarginAccountBorrow>(
      '/sapi/v1/margin/load',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.MARGIN
    );
  }

  marginAccountRepay(this: Binance.Api, params: IMarginAccountRepayParameters) {
    return this.sendRequest<IMarginAccountRepayParameters, IMarginAccountRepay>(
      '/sapi/v1/margin/repay',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.MARGIN
    );
  }

  marginQueryMarginAsset(this: Binance.Api, params: IMarginQueryMarginAssetParameters) {
    return this.sendRequest<IMarginQueryMarginAssetParameters, IMarginQueryMarginAsset>(
      '/sapi/v1/margin/asset',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA
    );
  }

  marginQueryCrossMarginPair(this: Binance.Api, params: IMarginQueryCrossMarginPairParameters) {
    return this.sendRequest<IMarginQueryCrossMarginPairParameters, IMarginQueryCrossMarginPair>(
      '/sapi/v1/margin/pair',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA
    );
  }

  marginGetAllCrossMarginAssets(this: Binance.Api, params: Binance.IResponseEmpty = {}) {
    return this.sendRequest<Binance.IResponseEmpty, IMarginQueryMarginAsset[]>(
      '/sapi/v1/margin/allAssets',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA
    );
  }

  marginGetAllCrossMarginPairs(this: Binance.Api, params: Binance.IResponseEmpty = {}) {
    return this.sendRequest<Binance.IResponseEmpty, IMarginQueryCrossMarginPair[]>(
      '/sapi/v1/margin/allPairs',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA
    );
  }

  marginQueryMarginPriceIndex(this: Binance.Api, params: IMarginQueryMarginPriceIndexParameters) {
    return this.sendRequest<IMarginQueryMarginPriceIndexParameters, IMarginQueryMarginPriceIndex>(
      '/sapi/v1/margin/priceIndex',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA
    );
  }

  marginAccounNewOrder(this: Binance.Api, params: IMarginAccountNewOrderParameters) {
    return this.sendRequest<IMarginAccountNewOrderParameters, IMarginAccountNewOrder>(
      '/sapi/v1/margin/order',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  marginAccounCancelOrder(this: Binance.Api, params: IMarginAccountCancelOrderParameters) {
    return this.sendRequest<IMarginAccountCancelOrderParameters, IMarginAccountCancelOrder>(
      '/sapi/v1/margin/order',
      params,
      Binance.ERequestMethod.DELETE,
      Binance.ESecurityType.TRADE
    );
  }

  marginGetCrossMarginTransferHistory(this: Binance.Api, params: IMarginGetCrossMarginTransferHistoryParameters) {
    return this.sendRequest<IMarginGetCrossMarginTransferHistoryParameters, IMarginGetCrossMarginTransferHistory>(
      '/sapi/v1/margin/transfer',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryLoanRecord(this: Binance.Api, params: IMarginQueryLoanRecordParameters) {
    return this.sendRequest<IMarginQueryLoanRecordParameters, IMarginQueryLoanRecord>(
      '/sapi/v1/margin/loan',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryRepayRecord(this: Binance.Api, params: IMarginQueryRepayRecordParameters) {
    return this.sendRequest<IMarginQueryRepayRecordParameters, IMarginQueryRepayRecord>(
      '/sapi/v1/margin/repay',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginGetInterestHistory(this: Binance.Api, params: IMarginGetInterestHistoryParameters) {
    return this.sendRequest<IMarginGetInterestHistoryParameters, IMarginGetInterestHistory>(
      '/sapi/v1/margin/interestHistory',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginGetForceLiquidationHistory(this: Binance.Api, params: IMarginGetForceLiquidationHistoryParameters) {
    return this.sendRequest<IMarginGetForceLiquidationHistoryParameters, IMarginGetForceLiquidationHistory>(
      '/sapi/v1/margin/forceLiquidationRec',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryCrossMarginAccountDetails(this: Binance.Api, params: IMarginQueryCrossMarginAccountDetailsParameters) {
    return this.sendRequest<IMarginQueryCrossMarginAccountDetailsParameters, IMarginQueryCrossMarginAccountDetails>(
      '/sapi/v1/margin/account',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryMarginAccountOrder(this: Binance.Api, params: IMarginQueryMarginAccountOrderParameters) {
    return this.sendRequest<IMarginQueryMarginAccountOrderParameters, IMarginQueryMarginAccountOrder>(
      '/sapi/v1/margin/order',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryMarginAccountOpenOrder(this: Binance.Api, params: IMarginQueryMarginAccountOpenOrderParameters) {
    return this.sendRequest<IMarginQueryMarginAccountOpenOrderParameters, IMarginQueryMarginAccountOpenOrder[]>(
      '/sapi/v1/margin/openOrders',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryMarginAccountAllOrder(this: Binance.Api, params: IMarginQueryMarginAccountAllOrderParameters) {
    return this.sendRequest<IMarginQueryMarginAccountAllOrderParameters, IMarginQueryMarginAccountAllOrder[]>(
      '/sapi/v1/margin/allOrders',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryMarginAccountTradeList(this: Binance.Api, params: IMarginQueryMarginAccountTradeListParameters) {
    return this.sendRequest<IMarginQueryMarginAccountTradeListParameters, IMarginQueryMarginAccountTradeList[]>(
      '/sapi/v1/margin/myTrades',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryMaxBorrow(this: Binance.Api, params: IMarginQueryMaxBorrowParameters) {
    return this.sendRequest<IMarginQueryMaxBorrowParameters, IMarginQueryMaxBorrow>(
      '/sapi/v1/margin/maxBorrowable',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryMaxTransferOutAmount(this: Binance.Api, params: IMarginQueryMaxTransferOutAmountParameters) {
    return this.sendRequest<IMarginQueryMaxTransferOutAmountParameters, IMarginQueryMaxTransferOutAmount>(
      '/sapi/v1/margin/maxTransferable',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginCreateIsolatedMarginAccount(this: Binance.Api, params: IMarginCreateIsolatedMarginAccountParameters) {
    return this.sendRequest<IMarginCreateIsolatedMarginAccountParameters, IMarginCreateIsolatedMarginAccount>(
      '/sapi/v1/margin/isolated/create',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.MARGIN
    );
  }

  marginIsolatedMarginAccountTransfer(this: Binance.Api, params: IMarginIsolatedMarginAccountTransferParameters) {
    return this.sendRequest<IMarginIsolatedMarginAccountTransferParameters, IMarginIsolatedMarginAccountTransfer>(
      '/sapi/v1/margin/isolated/transfer',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.MARGIN
    );
  }

  marginGetIsolatedMarginTransferHistory(this: Binance.Api, params: IMarginGetIsolatedMarginTransferHistoryParameters) {
    return this.sendRequest<IMarginGetIsolatedMarginTransferHistoryParameters, IMarginGetIsolatedMarginTransferHistory>(
      '/sapi/v1/margin/isolated/transfer',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryIsolatedMarginAccountInfo(this: Binance.Api, params: IMarginQueryIsolatedMarginAccountInfoParameters) {
    return this.sendRequest<IMarginQueryIsolatedMarginAccountInfoParameters, IMarginQueryIsolatedMarginAccountInfo>(
      '/sapi/v1/margin/isolated/account',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginQueryIsolatedMarginSymbol(this: Binance.Api, params: IMarginQueryIsolatedMarginSymbolParameters) {
    return this.sendRequest<IMarginQueryIsolatedMarginSymbolParameters, IMarginQueryIsolatedMarginSymbol>(
      '/sapi/v1/margin/isolated/pair',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  marginGetAllIsolatedMarginSymbol(this: Binance.Api, params: Binance.IResponseEmpty = {}) {
    return this.sendRequest<Binance.IResponseEmpty, IMarginQueryIsolatedMarginSymbol[]>(
      '/sapi/v1/margin/isolated/allPairs',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }
}

export interface IMarginCrossMarginAccountTransferParameters extends Binance.IRequestParameters {
  asset: string;
  amount: number;
  type: 1 | 2;
}

export interface IMarginCrossMarginAccountTransfer {
  tranId: number;
}

export interface IMarginAccountBorrowParameters extends Binance.IRequestParameters {
  asset: string;
  isIsolated?: 'TRUE' | 'FALSE';
  symbol?: string;
  amount: number;
}

export type IMarginAccountBorrow = IMarginCrossMarginAccountTransfer;

export type IMarginAccountRepayParameters = IMarginAccountBorrowParameters;
export type IMarginAccountRepay = IMarginAccountBorrow;

export interface IMarginQueryMarginAssetParameters extends Binance.IRequestParameters {
  asset: string;
}

export interface IMarginQueryMarginAsset {
  assetFullName: string;
  assetName: string;
  isBorrowable: boolean;
  isMortgageable: boolean;
  userMinBorrow: string;
  userMinRepay: string;
}

export type IMarginQueryCrossMarginPairParameters = IMarginQueryMarginAssetParameters;

export interface IMarginQueryCrossMarginPair {
  id: number;
  symbol: string;
  base: string;
  quote: string;
  isMarginTrade: boolean;
  isBuyAllowed: boolean;
  isSellAllowed: boolean;
}

export type IMarginQueryMarginPriceIndexParameters = IMarginQueryCrossMarginPairParameters;

export interface IMarginQueryMarginPriceIndex {
  calcTime: number;
  price: string;
  symbol: string;
}

export interface IMarginAccountNewOrderParameters extends Binance.IRequestParameters {
  symbol: string;
  isIsolated?: 'TRUE' | 'FALSE';
  side: Binance.EOrderSide;
  type: Binance.EOrderType;
  quantity: number;
  price?: number;
  stopPrice?: number;
  newClientOrderId?: string;
  icebergQty?: number;
  newOderRespType?: Binance.EOrderResponseType;
  sideEffectType?: Binance.EOrderSideEffectType;
  timeInForce?: Binance.EOrderTimeInForce;
}

export interface IMarginAccountNewOrder {
  symbol: string;
  orderId: number;
  clientOrderId: string;
  isIsolated: boolean;
  transactTime: number;
  price?: string;
  origQty?: string;
  executedQty?: string;
  cummulativeQuoteQty?: string;
  status?: Binance.EOrderStatus;
  timeInForce?: Binance.EOrderTimeInForce;
  type?: Binance.EOrderType;
  side?: Binance.EOrderSide;
  marginBuyBorrowAmount?: number;
  marginBuyBorrowAsset?: string;
  fills?: IMarginAccountNewOrderFill[];
}

export interface IMarginAccountNewOrderFill {
  price: string;
  qty: string;
  commission: string;
  commissionAsset: string;
}

export interface IMarginAccountCancelOrderParameters extends Binance.IRequestParameters {
  symbol: string;
  isIsolated: 'TRUE' | 'FALSE';
  orderId?: number;
  origClientOrderId?: string;
  newClientOrderId?: string;
}

export interface IMarginAccountCancelOrder {
  symbol: string;
  isIsolated: boolean;
  orderId: number;
  origClientOrderId: string;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: Binance.EOrderStatus;
  timeInForce: Binance.EOrderTimeInForce;
  type: Binance.EOrderType;
  side: Binance.EOrderSide;
}

export interface IMarginGetCrossMarginTransferHistoryParameters extends Binance.IRequestParameters {
  asset?: string;
  type?: 'ROLL_IN' | 'ROLL_OUT';
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  archived?: string;
}

export interface IMarginGetCrossMarginTransferHistory {
  total: number;
  rows: IMarginGetCrossMarginTransferHistoryRow[];
}

export interface IMarginGetCrossMarginTransferHistoryRow {
  amount: string;
  asset: string;
  status: string;
  timestamp: number;
  txId: number;
  type: 'ROLL_IN' | 'ROLL_OUT';
}

export interface IMarginQueryLoanRecordParameters extends Binance.IRequestParameters {
  asset: string;
  isolatedSymbol?: string;
  txId?: number;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface IMarginQueryLoanRecord {
  total: number;
  rows: IMarginQueryLoanRecordRow[];
}

export interface IMarginQueryLoanRecordRow {
  isolatedSymbol: string;
  asset: string;
  principal: string;
  timestamp: number;
  status: string;
}

export type IMarginQueryRepayRecordParameters = IMarginQueryLoanRecordParameters;

export interface IMarginQueryRepayRecord {
  total: number;
  rows: IMarginQueryRepayRecordRow[];
}

export interface IMarginQueryRepayRecordRow {
  isolatedSymbol: string;
  amount: string;
  asset: string;
  interest: string;
  principal: string;
  status: string;
  timestamp: number;
  txId: number;
}

export type IMarginGetInterestHistoryParameters = IMarginQueryRepayRecordParameters;

export interface IMarginGetInterestHistory {
  total: number;
  rows: IMarginGetInterestHistoryRow[];
}

export interface IMarginGetInterestHistoryRow {
  isolatedSymbol: string;
  asset: string;
  interest: string;
  interestAccuredTime: number;
  interestRate: string;
  principal: string;
  type: string;
}

export interface IMarginGetForceLiquidationHistoryParameters extends Binance.IRequestParameters {
  startTime?: number;
  endTime?: number;
  isolatedSymbol?: string;
  current?: number;
  size?: number;
}

export interface IMarginGetForceLiquidationHistory {
  total: number;
  rows: IMarginGetForceLiquidationHistoryRow[];
}

export interface IMarginGetForceLiquidationHistoryRow {
  avgPrice: string;
  executedQty: string;
  orderId: number;
  price: string;
  qty: string;
  side: Binance.EOrderSide;
  symbol: string;
  timeInForce: Binance.EOrderTimeInForce;
  isIsolated: boolean;
  updatedTime: number;
}

/**
 * TODO: Write functions
 */

export type IMarginQueryCrossMarginAccountDetailsParameters = Binance.IRequestParameters;

export interface IMarginQueryCrossMarginAccountDetails {
  borrowEnabled: boolean;
  marginLevel: string;
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
  tradeEnabled: boolean;
  transferEnabled: boolean;
  userAssets: IMarginQueryCrossMarginAccountDetailsUserAsset[];
}

export interface IMarginQueryCrossMarginAccountDetailsUserAsset {
  asset: string;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
}

export interface IMarginQueryMarginAccountOrderParameters extends Binance.IRequestParameters {
  symbol: string;
  isIsolated?: 'TRUE' | 'FALSE';
  orderId?: string;
  origClientOrderId?: string;
}

export interface IMarginQueryMarginAccountOrder {
  clientOrderId: string;
  cummulativeQuoteQty: string;
  executedQty: string;
  icebergQty: boolean;
  isWorking: boolean;
  orderId: number;
  origQty: string;
  price: string;
  side: Binance.EOrderSide;
  status: Binance.EOrderStatus;
  stopPrice: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
  timeInForce: Binance.EOrderTimeInForce;
  type: Binance.EOrderType;
  updateTime: number;
}

export interface IMarginQueryMarginAccountOpenOrderParameters extends Binance.IRequestParameters {
  symbol?: string;
  isIsolated?: 'TRUE' | 'FALSE';
}

export interface IMarginQueryMarginAccountOpenOrder {
  clientOrderId: string;
  cummulativeQuoteQty: string;
  executedQty: string;
  icebergQty: string;
  isWorking: boolean;
  orderId: number;
  origQty: string;
  price: string;
  side: Binance.EOrderSide;
  status: Binance.EOrderStatus;
  stopPrice: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
  timeInForce: Binance.EOrderTimeInForce;
  type: Binance.EOrderType;
  updateTime: number;
}

export interface IMarginQueryMarginAccountAllOrderParameters extends Binance.IRequestParameters {
  symbol: string;
  isIsolated?: 'TRUE' | 'FALSE';
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export type IMarginQueryMarginAccountAllOrder = IMarginQueryMarginAccountOpenOrder;

export interface IMarginQueryMarginAccountTradeListParameters extends Binance.IRequestParameters {
  symbol: string;
  isIsolated?: 'TRUE' | 'FALSE';
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
}

export interface IMarginQueryMarginAccountTradeList {
  commission: string;
  commissionAsset: string;
  id: number;
  isBestMatch: boolean;
  isBuyer: boolean;
  isMaker: boolean;
  orderId: number;
  price: string;
  qty: string;
  symbol: string;
  isIsolated: boolean;
  time: number;
}

export interface IMarginQueryMaxBorrowParameters extends Binance.IRequestParameters {
  asset: string;
  isolatedSymbol?: string;
}

export interface IMarginQueryMaxBorrow {
  amout: string;
  borrowLimit: string;
}

export type IMarginQueryMaxTransferOutAmountParameters = IMarginQueryMaxBorrowParameters;

export interface IMarginQueryMaxTransferOutAmount {
  amount: string;
}

export interface IMarginCreateIsolatedMarginAccountParameters extends Binance.IRequestParameters {
  base: string;
  quote: string;
}

export interface IMarginCreateIsolatedMarginAccount {
  success: boolean;
  symbol: string;
}

export interface IMarginIsolatedMarginAccountTransferParameters extends Binance.IRequestParameters {
  asset: string;
  symbol: string;
  transFrom: 'SPOT' | 'ISOLATED_MARGIN';
  transTo: 'SPOT' | 'ISOLATED_MARGIN';
  amount: number;
}

export interface IMarginIsolatedMarginAccountTransfer {
  tranId: number;
}

export interface IMarginGetIsolatedMarginTransferHistoryParameters extends Binance.IRequestParameters {
  asset?: string;
  symbol: string;
  transFrom?: 'SPOT' | 'ISOLATED_MARGIN';
  transTo?: 'SPOT' | 'ISOLATED_MARGIN';
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface IMarginGetIsolatedMarginTransferHistory {
  total: number;
  rows: IMarginGetIsolatedMarginTransferHistoryRow[];
}

export interface IMarginGetIsolatedMarginTransferHistoryRow {
  amount: string;
  asset: string;
  status: Binance.EOrderStatus;
  timestamp: number;
  txId: number;
  transFrom: 'SPOT' | 'ISOLATED_MARGIN';
  transTo: 'SPOT' | 'ISOLATED_MARGIN';
}

export interface IMarginQueryIsolatedMarginAccountInfoParameters extends Binance.IRequestParameters {
  symbols?: string;
}

export interface IMarginQueryIsolatedMarginAccountInfo {
  assets: IMarginQueryIsolatedMarginAccountInfoAsset[];
  totalAssetOfBtc: string;
  totalLiabilityOfBtc: string;
  totalNetAssetOfBtc: string;
}

export interface IMarginQueryIsolatedMarginAccountInfoAsset {
  baseAsset: IMarginQueryIsolatedMarginAccountInfoAssetDetail;
  quoteAsset: IMarginQueryIsolatedMarginAccountInfoAssetDetail;
  symbol: string;
  isolatedCreated: boolean;
  marginLevel: string;
  marginLevelStatus: 'EXCESSIVE' | 'NORMAL' | 'MARGIN_CALL' | 'PRE_LIQUIDATION' | 'FORCE_LIQUIDATION';
  marginRatio: string;
  indexPrice: string;
  liquidatePrice: string;
  liquidateRate: string;
  tradeEnabled: boolean;
}

export interface IMarginQueryIsolatedMarginAccountInfoAssetDetail {
  asset: string;
  borrowEnabled: boolean;
  borrowed: string;
  free: string;
  interest: string;
  locked: string;
  netAsset: string;
  netAssetOfBtc: string;
  repayEnabled: boolean;
  totalAsset: string;
}

export interface IMarginQueryIsolatedMarginSymbolParameters extends Binance.IRequestParameters {
  symbol: string;
}

export interface IMarginQueryIsolatedMarginSymbol {
  symbol: string;
  base: string;
  quote: string;
  isMarginTrade: boolean;
  isBuyAllowed: boolean;
  isSellAllowed: boolean;
}

import { Binance } from '../Binance';
export declare class Margin {
    marginCrossMarginAccountTransfer(this: Binance.Api, params: IMarginCrossMarginAccountTransferParameters): Promise<IMarginCrossMarginAccountTransfer>;
    marginAccountBorrow(this: Binance.Api, params: IMarginAccountBorrowParameters): Promise<IMarginCrossMarginAccountTransfer>;
    marginAccountRepay(this: Binance.Api, params: IMarginAccountRepayParameters): Promise<IMarginCrossMarginAccountTransfer>;
    marginQueryMarginAsset(this: Binance.Api, params: IMarginQueryMarginAssetParameters): Promise<IMarginQueryMarginAsset>;
    marginQueryCrossMarginPair(this: Binance.Api, params: IMarginQueryCrossMarginPairParameters): Promise<IMarginQueryCrossMarginPair>;
    marginGetAllCrossMarginAssets(this: Binance.Api, params?: Binance.IResponseEmpty): Promise<IMarginQueryMarginAsset[]>;
    marginGetAllCrossMarginPairs(this: Binance.Api, params?: Binance.IResponseEmpty): Promise<IMarginQueryCrossMarginPair[]>;
    marginQueryMarginPriceIndex(this: Binance.Api, params: IMarginQueryMarginPriceIndexParameters): Promise<IMarginQueryMarginPriceIndex>;
    marginAccounNewOrder(this: Binance.Api, params: IMarginAccountNewOrderParameters): Promise<IMarginAccountNewOrder>;
    marginAccounCancelOrder(this: Binance.Api, params: IMarginAccountCancelOrderParameters): Promise<IMarginAccountCancelOrder>;
    marginGetCrossMarginTransferHistory(this: Binance.Api, params: IMarginGetCrossMarginTransferHistoryParameters): Promise<IMarginGetCrossMarginTransferHistory>;
    marginQueryLoanRecord(this: Binance.Api, params: IMarginQueryLoanRecordParameters): Promise<IMarginQueryLoanRecord>;
    marginQueryRepayRecord(this: Binance.Api, params: IMarginQueryRepayRecordParameters): Promise<IMarginQueryRepayRecord>;
    marginGetInterestHistory(this: Binance.Api, params: IMarginGetInterestHistoryParameters): Promise<IMarginGetInterestHistory>;
    marginGetForceLiquidationHistory(this: Binance.Api, params: IMarginGetForceLiquidationHistoryParameters): Promise<IMarginGetForceLiquidationHistory>;
    marginQueryCrossMarginAccountDetails(this: Binance.Api, params: IMarginQueryCrossMarginAccountDetailsParameters): Promise<IMarginQueryCrossMarginAccountDetails>;
    marginQueryMarginAccountOrder(this: Binance.Api, params: IMarginQueryMarginAccountOrderParameters): Promise<IMarginQueryMarginAccountOrder>;
    marginQueryMarginAccountOpenOrder(this: Binance.Api, params: IMarginQueryMarginAccountOpenOrderParameters): Promise<IMarginQueryMarginAccountOpenOrder[]>;
    marginQueryMarginAccountAllOrder(this: Binance.Api, params: IMarginQueryMarginAccountAllOrderParameters): Promise<IMarginQueryMarginAccountOpenOrder[]>;
    marginQueryMarginAccountTradeList(this: Binance.Api, params: IMarginQueryMarginAccountTradeListParameters): Promise<IMarginQueryMarginAccountTradeList[]>;
    marginQueryMaxBorrow(this: Binance.Api, params: IMarginQueryMaxBorrowParameters): Promise<IMarginQueryMaxBorrow>;
    marginQueryMaxTransferOutAmount(this: Binance.Api, params: IMarginQueryMaxTransferOutAmountParameters): Promise<IMarginQueryMaxTransferOutAmount>;
    marginCreateIsolatedMarginAccount(this: Binance.Api, params: IMarginCreateIsolatedMarginAccountParameters): Promise<IMarginCreateIsolatedMarginAccount>;
    marginIsolatedMarginAccountTransfer(this: Binance.Api, params: IMarginIsolatedMarginAccountTransferParameters): Promise<IMarginIsolatedMarginAccountTransfer>;
    marginGetIsolatedMarginTransferHistory(this: Binance.Api, params: IMarginGetIsolatedMarginTransferHistoryParameters): Promise<IMarginGetIsolatedMarginTransferHistory>;
    marginQueryIsolatedMarginAccountInfo(this: Binance.Api, params: IMarginQueryIsolatedMarginAccountInfoParameters): Promise<IMarginQueryIsolatedMarginAccountInfo>;
    marginQueryIsolatedMarginSymbol(this: Binance.Api, params: IMarginQueryIsolatedMarginSymbolParameters): Promise<IMarginQueryIsolatedMarginSymbol>;
    marginGetAllIsolatedMarginSymbol(this: Binance.Api, params?: Binance.IResponseEmpty): Promise<IMarginQueryIsolatedMarginSymbol[]>;
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
export declare type IMarginAccountBorrow = IMarginCrossMarginAccountTransfer;
export declare type IMarginAccountRepayParameters = IMarginAccountBorrowParameters;
export declare type IMarginAccountRepay = IMarginAccountBorrow;
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
export declare type IMarginQueryCrossMarginPairParameters = IMarginQueryMarginAssetParameters;
export interface IMarginQueryCrossMarginPair {
    id: number;
    symbol: string;
    base: string;
    quote: string;
    isMarginTrade: boolean;
    isBuyAllowed: boolean;
    isSellAllowed: boolean;
}
export declare type IMarginQueryMarginPriceIndexParameters = IMarginQueryCrossMarginPairParameters;
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
export declare type IMarginQueryRepayRecordParameters = IMarginQueryLoanRecordParameters;
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
export declare type IMarginGetInterestHistoryParameters = IMarginQueryRepayRecordParameters;
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
export declare type IMarginQueryCrossMarginAccountDetailsParameters = Binance.IRequestParameters;
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
export declare type IMarginQueryMarginAccountAllOrder = IMarginQueryMarginAccountOpenOrder;
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
export declare type IMarginQueryMaxTransferOutAmountParameters = IMarginQueryMaxBorrowParameters;
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

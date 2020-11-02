import { Binance } from '../Binance';
export declare class Spot {
    spotTestNewOrder(this: Binance.Api, params: ISpotNewOrderParameters): Promise<Binance.IResponseEmpty>;
    spotNewOrder(this: Binance.Api, params: ISpotNewOrderParameters): Promise<ISpotNewOrder>;
    spotCancelOrder(this: Binance.Api, params: ISpotCancelOrderParameters): Promise<ISpotCancelOrder>;
    spotCancelAllOrdersOnSymbol(this: Binance.Api, params: ISpotCancelAllOrdersOnSymbolParameters): Promise<ISpotCancelAllOrdersOnSymbol[]>;
    spotQueryOrder(this: Binance.Api, params: ISpotQueryOrderParameters): Promise<ISpotQueryOrder>;
    spotCurrentOpenOrders(this: Binance.Api, params: ISpotCurrentOpenOrdersParameters): Promise<ISpotQueryOrder[]>;
    spotAllOrders(this: Binance.Api, params: ISpotAllOrdersParameters): Promise<ISpotQueryOrder[]>;
    spotNewOCO(this: Binance.Api, params: ISpotNewOCOParameters): Promise<ISpotNewOCO>;
    spotCancelOCO(this: Binance.Api, params: ISpotCancelOCOParameters): Promise<ISpotNewOCO>;
    spotQueryOCO(this: Binance.Api, params: ISpotQueryOCOParameters): Promise<ISpotQueryOCO>;
    spotQueryAllOCO(this: Binance.Api, params?: ISpotQueryAllOCOParameters): Promise<ISpotQueryOCO[]>;
    spotQueryOpenOCO(this: Binance.Api, params?: Binance.IRequestParameters): Promise<ISpotQueryOrder[]>;
    spotAccountInformation(this: Binance.Api, params?: Binance.IRequestParameters): Promise<ISpotAccountInformation>;
    spotAccountTradeList(this: Binance.Api, params: ISpotAccountTradeListParameters): Promise<ISpotAccountTradeList[]>;
}
export interface ISpotNewOrderParameters extends Binance.IRequestParameters {
    symbol: string;
    side: Binance.EOrderSide;
    type: Binance.EOrderType;
    timeInForce?: Binance.EOrderTimeInForce;
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
export declare type ISpotCurrentOpenOrders = ISpotQueryOrder;
export interface ISpotAllOrdersParameters extends Binance.IRequestParameters {
    symbol: string;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export declare type ISpotAllOrders = ISpotCurrentOpenOrders;
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
export declare type ISpotNewOCOOrder = ISpotCancelAllOrdersOnSymbolOrder;
export declare type ISpotNewOCOOrderReport = ISpotCancelAllOrdersOnSymbolOrderReport;
export interface ISpotCancelOCOParameters extends Binance.IRequestParameters {
    symbol: string;
    orderListId?: number;
    listClientorderId?: string;
    newClientOrderId?: string;
}
export declare type ISpotCancelOCO = ISpotNewOCO;
export declare type ISpotCancelOCOOrder = ISpotNewOCOOrder;
export declare type ISpotCancelOCOOrderReport = ISpotNewOCOOrderReport;
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
export declare type ISpotQueryOCOOrder = ISpotCancelOCOOrder;
export interface ISpotQueryAllOCOParameters extends Binance.IRequestParameters {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export declare type ISpotQueryAllOCO = ISpotQueryOCO;
export declare type ISpotQueryOpenOCO = ISpotQueryAllOCO;
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

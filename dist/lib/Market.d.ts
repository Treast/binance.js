import { Binance } from '../Binance';
export declare class Market {
    marketTestConnectivity(this: Binance.Api): Promise<Binance.IResponseEmpty>;
    marketCheckServerTime(this: Binance.Api): Promise<IMarketCheckServerTime>;
    marketExchangeInformation(this: Binance.Api): Promise<IMarketCheckServerTime>;
    marketOrderBook(this: Binance.Api, params: IMarketOrderBookParameters): Promise<IMarketOrderBook>;
    marketRecentTradesList(this: Binance.Api, params: IMarketRecentTradesListParameters): Promise<IMarketRecentTradesList[]>;
    marketOldTradeLookup(this: Binance.Api, params: IMarketOldTradeLookupParameters): Promise<IMarketOldTradeLookup[]>;
    marketAggregateTradesList(this: Binance.Api, params: IMarketAggregateTradesListParameters): Promise<IMarketAggregateTradesList[]>;
    marketKlineData(this: Binance.Api, params: IMarketKlineDataParameters): Promise<(string | number)[][]>;
    marketCurrentAveragePrice(this: Binance.Api, params: IMarketCurrentAveragePriceParameters): Promise<IMarketCurrentAveragePrice>;
    market24hrTickerPriceChange(this: Binance.Api, params?: IMarket24hTickerPriceChangeParameters): Promise<IMarket24hTickerPriceChange | IMarket24hTickerPriceChange[]>;
    marketSymbolPriceTicker(this: Binance.Api, params?: IMarketSymbolPriceTickerParameters): Promise<IMarketSymbolPriceTicker | IMarketSymbolPriceTicker[]>;
    marketSymbolOrderBookTicker(this: Binance.Api, params?: IMarketSymbolOrderBookTickerParameters): Promise<IMarketSymbolOrderBookTicker | IMarketSymbolOrderBookTicker[]>;
}
export interface IMarketCheckServerTime {
    serverTime: number;
}
export interface IMarketExchangeInformation {
    timezone: string;
    serverTime: number;
    rateLimits: [];
    exchangeFilters: [];
    symbols: IMarketExchangeInformationSymbol[];
}
export interface IMarketExchangeInformationSymbol {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    orderTypes: [];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: [];
    permissions: [];
}
export interface IMarketOrderBookParameters {
    symbol: string;
    limit?: 5 | 10 | 20 | 50 | 100 | 500 | 1000 | 5000;
}
export interface IMarketOrderBook {
    lastUpdateId: number;
    bids: number[][];
    asks: number[][];
}
export interface IMarketRecentTradesListParameters {
    symbol: string;
    limit?: number;
}
export interface IMarketRecentTradesList {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}
export interface IMarketOldTradeLookupParameters {
    symbol: string;
    limit?: number;
    fromId?: number;
}
export interface IMarketOldTradeLookup extends IMarketRecentTradesList {
}
export interface IMarketAggregateTradesListParameters {
    symbol: string;
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface IMarketAggregateTradesList {
    a: number;
    p: string;
    q: string;
    f: number;
    l: number;
    T: number;
    m: boolean;
    M: boolean;
}
export interface IMarketKlineDataParameters {
    symbol: string;
    interval: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface IMarketCurrentAveragePriceParameters {
    symbol: string;
}
export interface IMarketCurrentAveragePrice {
    mins: number;
    price: string;
}
export interface IMarket24hTickerPriceChangeParameters {
    symbol?: string;
}
export interface IMarket24hTickerPriceChange {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    prevClosePrice: string;
    lastPrice: string;
    lastQty: string;
    bidPrice: string;
    askPrice: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}
export declare type IMarketSymbolPriceTickerParameters = IMarket24hTickerPriceChangeParameters;
export interface IMarketSymbolPriceTicker {
    symbol: string;
    price: string;
}
export declare type IMarketSymbolOrderBookTickerParameters = IMarket24hTickerPriceChangeParameters;
export interface IMarketSymbolOrderBookTicker {
    symbol: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
}

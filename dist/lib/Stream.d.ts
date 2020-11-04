import { Binance } from '../Binance';
export declare class Stream {
    streamAggregateTrade(this: Binance.Api, params: IStreamAggregateTradeParameters): import("ws") | undefined;
    streamTrade(this: Binance.Api, params: IStreamTradeParameters): import("ws") | undefined;
    streamCandlestick(this: Binance.Api, params: IStreamCandlestickParameters): import("ws") | undefined;
    streamIndividualSymbolMiniTicker(this: Binance.Api, params: IStreamSymbolMiniTicker): import("ws") | undefined;
    streamAllMarketMiniTickers(this: Binance.Api): import("ws") | undefined;
    streamIndividualSymbolTicker(this: Binance.Api, params: IStreamSymbolTicker): import("ws") | undefined;
    streamAllMarketTickers(this: Binance.Api): import("ws") | undefined;
    streamIndividualSymbolBookTicker(this: Binance.Api, params: IStreamSymbolBookTicker): import("ws") | undefined;
    streamAllBookTickers(this: Binance.Api): import("ws") | undefined;
    streamPartialBookDepth(this: Binance.Api, params: IStreamPartialBookDepth): import("ws") | undefined;
}
export interface IStreamAggregateTradeParameters {
    symbol: string;
}
export declare type IStreamTradeParameters = IStreamAggregateTradeParameters;
export interface IStreamCandlestickParameters {
    symbol: string;
    interval: Binance.EInterval;
}
export declare type IStreamSymbolMiniTicker = IStreamAggregateTradeParameters;
export declare type IStreamSymbolTicker = IStreamSymbolMiniTicker;
export declare type IStreamSymbolBookTicker = IStreamSymbolTicker;
export interface IStreamPartialBookDepth {
    symbol: string;
    levels: 5 | 10 | 20;
    updateSpeed?: 100 | 1000;
}

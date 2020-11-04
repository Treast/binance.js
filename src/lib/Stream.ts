import { Binance } from '../Binance';

export class Stream {
  streamAggregateTrade(this: Binance.Api, params: IStreamAggregateTradeParameters) {
    return this.createStream(`/ws/${params.symbol.toLowerCase()}@aggTrade`);
  }

  streamTrade(this: Binance.Api, params: IStreamTradeParameters) {
    return this.createStream(`/ws/${params.symbol.toLowerCase()}@trade`);
  }

  streamCandlestick(this: Binance.Api, params: IStreamCandlestickParameters) {
    return this.createStream(`/ws/${params.symbol.toLowerCase()}@interval_${params.interval}`);
  }

  streamIndividualSymbolMiniTicker(this: Binance.Api, params: IStreamSymbolMiniTicker) {
    return this.createStream(`/ws/${params.symbol.toLowerCase()}@miniTicker`);
  }

  streamAllMarketMiniTickers(this: Binance.Api) {
    return this.createStream(`/ws/!miniTicker@arr`);
  }

  streamIndividualSymbolTicker(this: Binance.Api, params: IStreamSymbolTicker) {
    return this.createStream(`/ws/${params.symbol.toLowerCase()}@ticker`);
  }

  streamAllMarketTickers(this: Binance.Api) {
    return this.createStream(`/ws/!ticker@arr`);
  }

  streamIndividualSymbolBookTicker(this: Binance.Api, params: IStreamSymbolBookTicker) {
    return this.createStream(`/ws/${params.symbol.toLowerCase()}@bookTicker`);
  }

  streamAllBookTickers(this: Binance.Api) {
    return this.createStream(`/ws/$!bookTicker`);
  }

  streamPartialBookDepth(this: Binance.Api, params: IStreamPartialBookDepth) {
    return this.createStream(`/ws/${params.symbol.toLowerCase()}@depth${params.levels}${params.updateSpeed ? `@${params.updateSpeed}ms` : ''}`);
  }
}

export interface IStreamAggregateTradeParameters {
  symbol: string;
}

export type IStreamTradeParameters = IStreamAggregateTradeParameters;

export interface IStreamCandlestickParameters {
  symbol: string;
  interval: Binance.EInterval;
}

export type IStreamSymbolMiniTicker = IStreamAggregateTradeParameters;

export type IStreamSymbolTicker = IStreamSymbolMiniTicker;

export type IStreamSymbolBookTicker = IStreamSymbolTicker;

export interface IStreamPartialBookDepth {
  symbol: string;
  levels: 5 | 10 | 20;
  updateSpeed?: 100 | 1000;
}

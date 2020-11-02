import { Binance } from '../Binance';

export class Market {
  marketTestConnectivity(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, Binance.IResponseEmpty>(
      '/api/v3/ping',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketCheckServerTime(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, IMarketCheckServerTime>(
      '/api/v3/time',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketExchangeInformation(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, IMarketExchangeInformation>(
      '/api/v3/exchangeInfo',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketOrderBook(this: Binance.Api, params: IMarketOrderBookParameters) {
    return this.sendRequest<IMarketOrderBookParameters, IMarketOrderBook>(
      '/api/v3/depth',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketRecentTradesList(this: Binance.Api, params: IMarketRecentTradesListParameters) {
    return this.sendRequest<IMarketRecentTradesListParameters, IMarketRecentTradesList[]>(
      '/api/v3/trades',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketOldTradeLookup(this: Binance.Api, params: IMarketOldTradeLookupParameters) {
    return this.sendRequest<IMarketOldTradeLookupParameters, IMarketOldTradeLookup[]>(
      '/api/v3/historicalTrades',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketAggregateTradesList(this: Binance.Api, params: IMarketAggregateTradesListParameters) {
    return this.sendRequest<IMarketAggregateTradesListParameters, IMarketAggregateTradesList[]>(
      '/api/v3/aggTrades',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketKlineData(this: Binance.Api, params: IMarketKlineDataParameters) {
    return this.sendRequest<IMarketKlineDataParameters, (number | string)[][]>(
      '/api/v3/klines',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketCurrentAveragePrice(this: Binance.Api, params: IMarketCurrentAveragePriceParameters) {
    return this.sendRequest<IMarketCurrentAveragePriceParameters, IMarketCurrentAveragePrice>(
      '/api/v3/avgPrice',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  market24hrTickerPriceChange(this: Binance.Api, params: IMarket24hTickerPriceChangeParameters = {}) {
    return this.sendRequest<IMarket24hTickerPriceChangeParameters, IMarket24hTickerPriceChange | IMarket24hTickerPriceChange[]>(
      '/api/v3/ticker/24hr',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketSymbolPriceTicker(this: Binance.Api, params: IMarketSymbolPriceTickerParameters = {}) {
    return this.sendRequest<IMarketSymbolPriceTickerParameters, IMarketSymbolPriceTicker | IMarketSymbolPriceTicker[]>(
      '/api/v3/ticker/price',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  marketSymbolOrderBookTicker(this: Binance.Api, params: IMarketSymbolOrderBookTickerParameters = {}) {
    return this.sendRequest<IMarketSymbolOrderBookTickerParameters, IMarketSymbolOrderBookTicker | IMarketSymbolOrderBookTicker[]>(
      '/api/v3/ticker/bookTicker',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }
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

export interface IMarketOldTradeLookup extends IMarketRecentTradesList {}

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

export type IMarketSymbolPriceTickerParameters = IMarket24hTickerPriceChangeParameters;

export interface IMarketSymbolPriceTicker {
  symbol: string;
  price: string;
}

export type IMarketSymbolOrderBookTickerParameters = IMarket24hTickerPriceChangeParameters;

export interface IMarketSymbolOrderBookTicker {
  symbol: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
}

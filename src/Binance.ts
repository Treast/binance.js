import fetch = require('node-fetch');
import hmacSHA256 = require('crypto-js/hmac-sha256');

import { Wallet } from './lib/Wallet';
import { Market } from './lib/Market';
import { Spot } from './lib/Spot';

export namespace Binance {
  export class Api {
    private apiKey: string;
    private secretKey: string;
    private testMode: boolean;

    private baseUrlApiLive = 'https://api.binance.com';
    private baseUrlApiTest = 'https://testnet.binance.vision';

    private securityTypeRequiringSignature: ESecurityType[] = [ESecurityType.TRADE, ESecurityType.USER_DATA, ESecurityType.MARGIN];

    constructor(apiKey: string, secretKey: string, testMode: boolean = true) {
      if (!apiKey) throw new Error('A valid API key is required');
      if (!secretKey) throw new Error('A valid secret key is required');

      this.apiKey = apiKey;
      this.secretKey = secretKey;
      this.testMode = testMode;
    }

    protected sendRequest<K, T>(
      url: string,
      params: K,
      method: ERequestMethod,
      securityType: ESecurityType,
      preventTimestamp: boolean = false
    ): Promise<T> {
      const baseUrl = this.testMode ? this.baseUrlApiTest : this.baseUrlApiLive;

      let populatedParams: IRequestPopulatedParameters;

      if (preventTimestamp) {
        populatedParams = {
          ...params,
        };
      } else {
        populatedParams = {
          timestamp: Date.now(),
          ...params,
        };
      }

      let signature = null;

      const headers = this.defineSecurityType(securityType);
      const query = this.generateQuery(populatedParams);

      if (this.securityTypeRequiringSignature.includes(securityType)) {
        signature = hmacSHA256(query, this.secretKey).toString();

        populatedParams = { ...populatedParams, signature };
      }

      return new Promise((resolve, reject) => {
        fetch(`${baseUrl}${url}?${this.generateQuery(populatedParams)}`, {
          method,
          headers,
        })
          .then((res) => {
            if (res.status === 404) throw new Error('Endpoint not found');
            if (res.status === 401) throw new Error('Forbidden access');

            return res.json();
          })
          .then((res: any) => {
            if (res.code && res.code < 0) reject(res);

            resolve(res as T);
          });
      });
    }

    private generateQuery(params: IRequestParameters): string {
      return (
        Object.keys(params)
          //@ts-ignore
          .map((key) => `${key}=${params[key]}`)
          .join('&')
      );
    }

    private defineSecurityType(securityType: ESecurityType): IRequestHeaders {
      let headers: IRequestHeaders = {
        'Content-Type': 'application/json;charset=UTF-8',
      };

      if (securityType !== ESecurityType.NONE) {
        headers['X-MBX-APIKEY'] = this.apiKey;
      }

      return headers;
    }

    /** Wallet endpoints */
    walletDepositHistory = Wallet.prototype.walletDepositHistory;
    walletWithdrawHistory = Wallet.prototype.walletWithdrawHistory;
    walletDepositAddress = Wallet.prototype.walletDepositAddress;
    walletAccountStatus = Wallet.prototype.walletAccountStatus;
    walletSystemStatus = Wallet.prototype.walletSystemStatus;
    walletApiTradingStatus = Wallet.prototype.walletApiTradingStatus;
    walletDustLog = Wallet.prototype.walletDustLog;
    walletDustTransfer = Wallet.prototype.walletDustTransfer;
    walletTradeFee = Wallet.prototype.walletTradeFee;
    walletAssetDetail = Wallet.prototype.walletAssetDetail;
    walletAllCoins = Wallet.prototype.walletAllCoins;
    walletDailyAccountSnapshot = Wallet.prototype.walletDailyAccountSnapshot;
    walletAssetDividend = Wallet.prototype.walletAssetDividend;
    walletWithdraw = Wallet.prototype.walletWithdraw;
    walletDisableFastWithdrawSwitch = Wallet.prototype.walletDisableFastWithdrawSwitch;
    walletEnableFastWithdrawSwitch = Wallet.prototype.walletEnableFastWithdrawSwitch;

    /** Market endpoints */
    marketTestConnectivity = Market.prototype.marketTestConnectivity;
    marketCheckServerTime = Market.prototype.marketCheckServerTime;
    marketExchangeInformation = Market.prototype.marketExchangeInformation;
    marketOrderBook = Market.prototype.marketOrderBook;
    marketRecentTradesList = Market.prototype.marketRecentTradesList;
    marketOldTradeLookup = Market.prototype.marketOldTradeLookup;
    marketAggregateTradesList = Market.prototype.marketAggregateTradesList;
    marketKlineData = Market.prototype.marketKlineData;
    marketCurrentAveragePrice = Market.prototype.marketCurrentAveragePrice;
    market24hrTickerPriceChange = Market.prototype.market24hrTickerPriceChange;
    marketSymbolPriceTicker = Market.prototype.marketSymbolPriceTicker;
    marketSymbolOrderBookTicker = Market.prototype.marketSymbolOrderBookTicker;

    /** Spot endpoints */
    spotTestNewOrder = Spot.prototype.spotTestNewOrder;
    spotNewOrder = Spot.prototype.spotNewOrder;
    spotCancelOrder = Spot.prototype.spotCancelOrder;
    spotCancelAllOrdersOnSymbol = Spot.prototype.spotCancelAllOrdersOnSymbol;
    spotQueryOrder = Spot.prototype.spotQueryOrder;
    spotCurrentOpenOrders = Spot.prototype.spotCurrentOpenOrders;
    spotAllOrders = Spot.prototype.spotAllOrders;
    spotNewOCO = Spot.prototype.spotNewOCO;
    spotCancelOCO = Spot.prototype.spotCancelOCO;
    spotQueryOCO = Spot.prototype.spotQueryOCO;
    spotQueryAllOCO = Spot.prototype.spotQueryAllOCO;
    spotQueryOpenOCO = Spot.prototype.spotQueryOpenOCO;
    spotAccountInformation = Spot.prototype.spotAccountInformation;
    spotAccountTradeList = Spot.prototype.spotAccountTradeList;
  }

  export interface IRequest {
    headers: IRequestHeaders;
    body: IRequestBody;
    urlQuery: string;
  }

  export interface IRequestBody {}
  export interface IRequestParameters {
    recvWindow?: number;
  }

  export interface IResponseEmpty {}

  export interface IRequestPopulatedParameters extends IRequestParameters {
    signature?: string;
    timestamp?: number;
  }

  export type IRequestHeaders = Record<string, string>;

  export enum ERequestMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }

  export enum ESecurityType {
    NONE = 'NONE',
    TRADE = 'TRADE',
    USER_DATA = 'USER_DATA',
    MARGIN = 'MARGIN',
    USER_STREAM = 'USER_STREAM',
    MARKET_DATA = 'MARKET_DATA',
  }

  export enum EOrderType {
    LIMIT = 'LIMIT',
    MARKET = 'MARKET',
    STOP_LOSS = 'STOP_LOSS',
    STOP_LOSS_LIMIT = 'STOP_LOSS_LIMIT',
    TAKE_PROFIT = 'TAKE_PROFIT',
    TAKE_PROFIT_LIMIT = 'TAKE_PROFIT_LIMIT',
    LIMIT_MAKER = 'LIMIT_MAKER',
  }

  export enum EOrderSide {
    BUY = 'BUY',
    SELL = 'SELL',
  }

  export enum EOrderResponseType {
    ACK = 'ACK',
    RESULT = 'RESULT',
    FULL = 'FULL',
  }

  export enum EOrderTimeInForce {
    GTC = 'GTC',
    IOC = 'IOC',
    FOK = 'FOK',
  }

  export enum EOrderStatus {
    NEW = 'NEW',
    PARTIALLY_FILLED = 'PARTIALLY_FILLED',
    FILLED = 'FILLED',
    CANCELED = 'CANCELED',
    PENDING_CANCEL = 'PENDING_CANCEL',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED',
  }

  export enum EOrderSideEffectType {
    NO_SIDE_EFFECT = 'NO_SIDE_EFFECT',
    MARGIN_BUY = 'MARGIN_BUY',
    AUTO_REPAY = 'AUTO_REPAY',
  }
}

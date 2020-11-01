import fetch = require('node-fetch');
import hmacSHA256 = require('crypto-js/hmac-sha256');

import { Wallet } from './lib/Wallet';
import { Market } from './lib/Market';

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

    protected sendRequest<K, T>(url: string, params: K, method: ERequestMethod, securityType: ESecurityType): Promise<T> {
      const baseUrl = this.testMode ? this.baseUrlApiTest : this.baseUrlApiLive;

      let populatedParams: IRequestPopulatedParameters = {
        timestamp: Date.now(),
        ...params,
      };

      let signature = null;

      const headers = this.defineSecurityType(securityType);
      const query = this.generateQuery(populatedParams);

      if (this.securityTypeRequiringSignature.includes(securityType)) {
        signature = hmacSHA256(query, this.secretKey).toString();

        populatedParams = { ...populatedParams, signature };
      }

      if (method === ERequestMethod.GET) {
        url += `?${this.generateQuery(populatedParams)}`;
        populatedParams = {};
      }

      return new Promise((resolve, reject) => {
        fetch(`${baseUrl}${url}`, {
          method,
          headers,
          body: ERequestMethod.GET ? null : JSON.stringify(populatedParams),
        })
          .then((res) => {
            if (res.status === 404) throw new Error('Endpoint not found');
            if (res.status === 401) throw new Error('Forbidden access');

            return res.json();
          })
          .then((res) => {
            resolve(res as T);
          })
          .catch((err) => reject(err));
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
      let headers: IRequestHeaders = {};

      if (securityType !== ESecurityType.NONE) {
        headers['X-MBX-APIKEY'] = this.apiKey;
      }

      return headers;
    }

    walletSystemStatus = Wallet.prototype.walletSystemStatus;
    walletDepositHistory = Wallet.prototype.walletDepositHistory;
    walletAccountStatus = Wallet.prototype.walletAccountStatus;
    walletApiTradingStatus = Wallet.prototype.walletApiTradingStatus;
    walletAssetDetail = Wallet.prototype.walletAssetDetail;
    walletDailyAccountSnapshot = Wallet.prototype.walletDailyAccountSnapshot;
    walletAllCoins = Wallet.prototype.walletAllCoins;

    marketOrderBook = Market.prototype.marketOrderBook;
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
}

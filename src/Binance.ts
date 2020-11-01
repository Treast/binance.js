import fetch from 'node-fetch';
import Wallet from './lib/Wallet';

export class Binance {
  private apiKey: string;
  private secretKey: string;
  private testMode: boolean;

  constructor(apiKey: string, secretKey: string, testMode: boolean = true) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.testMode = testMode;
  }

  protected sendRequest(url: string, params: Binance.IRequestParameters, method: Binance.ERequestMethod) {
    const body = this.generateBody(params);
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }

  private generateBody(params: Binance.IRequestParameters) {
    Object.assign(params, { timestamp: Date.now() });

    return (
      Object.keys(params)
        //@ts-ignore
        .map((key) => `${key}=${params[key]}`)
        .join('&')
    );
  }

  public test() {}

  public getWallet = Wallet.prototype.getWallet;
}

export namespace Binance {
  export interface IRequestParameters {}

  export enum ERequestMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }
}

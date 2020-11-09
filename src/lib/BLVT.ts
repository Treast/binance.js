import { Binance } from '../Binance';

export class BLVT {
  /**
   * Warning: This function hasn't been tested.
   */
  blvtGetBLVTInfo(this: Binance.Api, params: IBLVTGetBLVTInfoParameters = {}) {
    return this.sendRequest<IBLVTGetBLVTInfoParameters, IBLVTGetBLVTInfo[]>(
      '/sapi/v1/blvt/tokenInfo',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  blvtSubscribeBLVT(this: Binance.Api, params: IBLVTSubscribeBLVTParameters) {
    return this.sendRequest<IBLVTSubscribeBLVTParameters, IBLVTSubscribeBLVT>(
      '/sapi/v1/blvt/subscribe',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  blvtQuerySubscriptionRecord(this: Binance.Api, params: IBLVTQuerySubscriptionRecordParameters = {}) {
    return this.sendRequest<IBLVTQuerySubscriptionRecordParameters, IBLVTQuerySubscriptionRecord[]>(
      '/sapi/v1/blvt/subscribe/record',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  blvtRedeemBLVT(this: Binance.Api, params: IBLVTRedeemBLVTParameters) {
    return this.sendRequest<IBLVTRedeemBLVTParameters, IBLVTRedeemBLVT>(
      '/sapi/v1/blvt/redeem',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  blvtQueryRedemptionRecord(this: Binance.Api, params: IBLVTQueryRedemptionRecordParameters) {
    return this.sendRequest<IBLVTQueryRedemptionRecordParameters, IBLVTQueryRedemptionRecord[]>(
      '/sapi/v1/blvt/redeem/record',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }
}

export interface IBLVTGetBLVTInfoParameters extends Binance.IRequestParameters {
  tokenName?: string;
}

export interface IBLVTGetBLVTInfo {
  tokenName: string;
  description: string;
  underlying: string;
  tokenIssued: string;
  basket: string;
  nav: string;
  realLeverage: string;
  fundingRate: string;
  dailyManagementFee: string;
  timestamp: number;
}

export interface IBLVTSubscribeBLVTParameters extends Binance.IRequestParameters {
  tokenName: string;
  cost: number;
}

export interface IBLVTSubscribeBLVT {
  id: number;
  status: string;
  tokenName: string;
  amount: string;
  cost: string;
  timestamp: number;
}

export interface IBLVTQuerySubscriptionRecordParameters extends Binance.IRequestParameters {
  tokenName?: string;
  id?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IBLVTQuerySubscriptionRecord {
  id: number;
  tokenName: string;
  amount: string;
  nav: string;
  fee: string;
  totalCharge: string;
  timestamp: number;
}

export interface IBLVTRedeemBLVTParameters extends Binance.IRequestParameters {
  tokenName: string;
  amount: number;
}

export interface IBLVTRedeemBLVT {
  id: number;
  status: string;
  tokenName: string;
  redeemAmount: string;
  amount: string;
  timestamp: number;
}

export interface IBLVTQueryRedemptionRecordParameters extends Binance.IRequestParameters {
  tokenName?: string;
  id?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IBLVTQueryRedemptionRecord {
  id: number;
  tokenName: string;
  amount: string;
  nav: string;
  fee: string;
  netProceed: string;
  timestamp: number;
}

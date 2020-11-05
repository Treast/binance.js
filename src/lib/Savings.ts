import { Binance } from '../Binance';

export class Savings {
  savingsGetFlexibleProductList(this: Binance.Api, params: ISavingsGetFlexibleProductListParameters) {
    return this.sendRequest<ISavingsGetFlexibleProductListParameters, ISavingsGetFlexibleProductList[]>(
      '/sapi/v1/lending/daily/product/list',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetLeftDailyPurchaseQuotaFlexibleProduct(this: Binance.Api, params: ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters) {
    return this.sendRequest<ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters, ISavingsGetLeftDailyPurchaseQuotaFlexibleProduct>(
      '/sapi/v1/lending/daily/userLeftQuota',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsPurchaseFlexibleProduct(this: Binance.Api, params: ISavingsPurchaseFlexibleProductParameters) {
    return this.sendRequest<ISavingsPurchaseFlexibleProductParameters, ISavingsPurchaseFlexibleProduct>(
      '/sapi/v1/lending/daily/purchase',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetLeftDailyRedemptionQuotaFlexibleProduct(this: Binance.Api, params: ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters) {
    return this.sendRequest<ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters, ISavingsGetLeftDailyRedemptionQuotaFlexibleProduct>(
      '/sapi/v1/lending/daily/userRedemptionQuota',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsRedeemFlexibleProduct(this: Binance.Api, params: ISavingsRedeemFlexibleProductParameters) {
    return this.sendRequest<ISavingsRedeemFlexibleProductParameters, ISavingsRedeemFlexibleProduct>(
      '/sapi/v1/lending/daily/redeem',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetFlexibleProductPosition(this: Binance.Api, params: ISavingsGetFlexibleProductPositionParameters) {
    return this.sendRequest<ISavingsGetFlexibleProductPositionParameters, ISavingsGetFlexibleProductPosition[]>(
      '/sapi/v1/lending/daily/token/position',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetFixedActivityProjectList(this: Binance.Api, params: ISavingsGetFixedActivityProjectListParameters) {
    return this.sendRequest<ISavingsGetFixedActivityProjectListParameters, ISavingsGetFixedActivityProjectList[]>(
      '/sapi/v1/lending/project/list',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsPurchaseFixedActivityProject(this: Binance.Api, params: ISavingsPurchaseFixedActivityProjectParameters) {
    return this.sendRequest<ISavingsPurchaseFixedActivityProjectParameters, ISavingsPurchaseFixedActivityProject>(
      '/sapi/v1/lending/customizedFixed/purchase',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetFixedActivityProjectPosition(this: Binance.Api, params: ISavingsGetFixedActivityProjectPositionParameters) {
    return this.sendRequest<ISavingsGetFixedActivityProjectPositionParameters, ISavingsGetFixedActivityProjectPosition[]>(
      '/sapi/v1/lending/project/position/list',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsLendingAccount(this: Binance.Api, params: ISavingsLendingAccountParameters) {
    return this.sendRequest<ISavingsLendingAccountParameters, ISavingsLendingAccount>(
      '/sapi/v1/lending/union/account',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetPurchaseRecord(this: Binance.Api, params: ISavingsGetPurchaseRecordParameters) {
    return this.sendRequest<ISavingsGetPurchaseRecordParameters, ISavingsGetPurchaseRecord[]>(
      '/sapi/v1/lending/union/purchaseRecord',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetRedemptionRecord(this: Binance.Api, params: ISavingsGetRedemptionRecordParameters) {
    return this.sendRequest<ISavingsGetRedemptionRecordParameters, ISavingsGetRedemptionRecord[]>(
      '/sapi/v1/lending/union/redemptionRecord',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsGetInterestHistory(this: Binance.Api, params: ISavingsGetInterestHistoryParameters) {
    return this.sendRequest<ISavingsGetInterestHistoryParameters, ISavingsGetInterestHistory[]>(
      '/sapi/v1/lending/union/interestHistory',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  savingsChangeFixedActivityPositionToDailyPosition(this: Binance.Api, params: ISavingsChangeFixedActivityPositionToDailyPositionParameters) {
    return this.sendRequest<ISavingsChangeFixedActivityPositionToDailyPositionParameters, ISavingsChangeFixedActivityPositionToDailyPosition>(
      '/sapi/v1/lending/positionChanged',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }
}

export enum ESavingsStatus {
  ALL = 'ALL',
  SUBSCRIBABLE = 'SUBSCRIBABLE',
  UNSUBSCRIBABLE = 'UNSUBSCRIBABLE',
}

export enum ESavingsType {
  FAST = 'FAST',
  NORMAL = 'NORMAL',
}

export enum ESavingsSortBy {
  START_TIME = 'START_TIME',
  LOT_SIZE = 'LOT_SIZE',
  INTEREST_RATE = 'INTEREST_RATE',
  DURATION = 'DURATION',
}

export interface ISavingsGetFlexibleProductListParameters extends Binance.IRequestParameters {
  status?: ESavingsStatus;
  features?: 'ALL' | 'true';
}

export interface ISavingsGetFlexibleProductList {
  asset: string;
  avgAnnualInterestRate: string;
  canPurchase: boolean;
  canRedeem: boolean;
  dailyInterestPerThousand: string;
  featured: boolean;
  minPurchaseAmount: string;
  productId: string;
  purchasedAmount: string;
  status: string;
  upLimit: string;
  upLimitPerUser: string;
}

export interface ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters extends Binance.IRequestParameters {
  productId: string;
}

export interface ISavingsGetLeftDailyPurchaseQuotaFlexibleProduct {
  asset: string;
  leftQuota: string;
}

export interface ISavingsPurchaseFlexibleProductParameters extends Binance.IRequestParameters {
  productId: string;
  amount: number;
}

export interface ISavingsPurchaseFlexibleProduct {
  purchaseId: number;
}

export interface ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters extends Binance.IRequestParameters {
  productId: string;
  type: ESavingsType;
}

export interface ISavingsGetLeftDailyRedemptionQuotaFlexibleProduct {
  asset: string;
  dailyQuota: string;
  leftQuota: string;
  minRedemptionAmount: string;
}

export interface ISavingsRedeemFlexibleProductParameters extends Binance.IRequestParameters {
  productId: string;
  amount: number;
  type: ESavingsType;
}

export interface ISavingsRedeemFlexibleProduct {}

export interface ISavingsGetFlexibleProductPositionParameters extends Binance.IRequestParameters {
  asset: string;
}

export interface ISavingsGetFlexibleProductPosition {
  annualInterestRate: string;
  asset: string;
  avgAnnualInterestRate: string;
  canRedeem: boolean;
  dailyInterestRate: string;
  freeAmount: string;
  freezeAmount: string;
  lockedAmount: string;
  productId: string;
  productName: string;
  redeemingAmount: string;
  todayPurchasedAmount: string;
  totalAmount: string;
  totalInterest: string;
}

export interface ISavingsGetFixedActivityProjectListParameters extends Binance.IRequestParameters {
  asset?: string;
  type: 'ACTIVITY' | 'CUSTOMIZED_FIXED';
  status?: ESavingsStatus;
  isSortAsc?: boolean;
  sortBy?: ESavingsSortBy;
  current?: number;
  size?: number;
}

export interface ISavingsGetFixedActivityProjectList {
  asset: string;
  displayPriority: number;
  duration: number;
  interestPerLot: string;
  interestRate: string;
  lotSize: string;
  lotsLowLimit: number;
  lotsPurchased: number;
  lotsUpLimit: number;
  maxLotsPerUser: number;
  needKyc: boolean;
  projectId: string;
  projectName: string;
  status: string;
  type: string;
  withAreaLimitation: boolean;
}

export interface ISavingsPurchaseFixedActivityProjectParameters extends Binance.IRequestParameters {
  projectId: string;
  lot: number;
}

export interface ISavingsPurchaseFixedActivityProject {
  purchaseId: string;
}

export interface ISavingsGetFixedActivityProjectPositionParameters extends Binance.IRequestParameters {
  asset: string;
  projectId?: string;
  status?: 'HOLDING' | 'REDEEMED';
}

export interface ISavingsGetFixedActivityProjectPosition {
  asset: string;
  canTransfer: boolean;
  createTimestamp: number;
  duration: number;
  endTime: number;
  interest: string;
  interestRate: string;
  lot: number;
  positionId: number;
  principal: string;
  projectId: string;
  projectName: string;
  purchaseTime: number;
  redeemDate: string;
  startTime: number;
  status: string;
  type: string;
}

export interface ISavingsLendingAccountParameters extends Binance.IRequestParameters {}

export interface ISavingsLendingAccount {
  positionAmountVos: ISavingsLendingAccountPosition[];
  totalAmountInBTC: string;
  totalAmountInUSDT: string;
  totalFixedAmountInBTC: string;
  totalFixedAmountInUSDT: string;
  totalFlexibleInBTC: string;
  totalFlexibleInUSDT: string;
}

export interface ISavingsLendingAccountPosition {
  amount: string;
  amountInBTC: string;
  amountInUSDT: string;
  asset: string;
}

export interface ISavingsGetPurchaseRecordParameters extends Binance.IRequestParameters {
  lendingType: 'DAILY' | 'ACTIVITY' | 'CUSTOMIZED_FIXED';
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface ISavingsGetPurchaseRecord {
  amount: string;
  asset: string;
  createTime: number;
  lendingType: string;
  productName: string;
  purchaseId: number;
  status: string;
  lot?: number;
}

export interface ISavingsGetRedemptionRecordParameters extends Binance.IRequestParameters {
  lendingType: 'DAILY' | 'ACTIVITY' | 'CUSTOMIZED_FIXED';
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface ISavingsGetRedemptionRecord {
  amount: string;
  asset: string;
  createTime: number;
  interest?: string;
  principal: string;
  projectId: string;
  projectName: string;
  startTime?: number;
  status: string;
  type?: string;
}

export interface ISavingsGetInterestHistoryParameters extends Binance.IRequestParameters {
  lendingType: 'DAILY' | 'ACTIVITY' | 'CUSTOMIZED_FIXED';
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface ISavingsGetInterestHistory {
  asset: string;
  interest: string;
  lendingType: string;
  productName: string;
  time: number;
}

export interface ISavingsChangeFixedActivityPositionToDailyPositionParameters extends Binance.IRequestParameters {
  projectId: string;
  lot: number;
  positionId?: number;
}

export interface ISavingsChangeFixedActivityPositionToDailyPosition {
  dailyPurchaseId: number;
  success: boolean;
  time: number;
}

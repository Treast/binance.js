import { Binance } from '../Binance';
export declare class Savings {
    savingsGetFlexibleProductList(this: Binance.Api, params: ISavingsGetFlexibleProductListParameters): Promise<ISavingsGetFlexibleProductList>;
    savingsGetLeftDailyPurchaseQuotaFlexibleProduct(this: Binance.Api, params: ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters): Promise<ISavingsGetLeftDailyPurchaseQuotaFlexibleProduct>;
    savingsPurchaseFlexibleProduct(this: Binance.Api, params: ISavingsPurchaseFlexibleProductParameters): Promise<ISavingsPurchaseFlexibleProduct>;
    savingsGetLeftDailyRedemptionQuotaFlexibleProduct(this: Binance.Api, params: ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters): Promise<ISavingsGetLeftDailyRedemptionQuotaFlexibleProduct>;
    savingsRedeemFlexibleProduct(this: Binance.Api, params: ISavingsRedeemFlexibleProductParameters): Promise<ISavingsRedeemFlexibleProduct>;
    savingsGetFlexibleProductPosition(this: Binance.Api, params: ISavingsGetFlexibleProductPositionParameters): Promise<ISavingsGetFlexibleProductPosition>;
    savingsGetFixedActivityProjectList(this: Binance.Api, params: ISavingsGetFixedActivityProjectListParameters): Promise<ISavingsGetFixedActivityProjectList>;
    savingsPurchaseFixedActivityProject(this: Binance.Api, params: ISavingsPurchaseFixedActivityProjectParameters): Promise<ISavingsPurchaseFixedActivityProject>;
    savingsGetFixedActivityProjectPosition(this: Binance.Api, params: ISavingsGetFixedActivityProjectPositionParameters): Promise<ISavingsGetFixedActivityProjectPosition>;
    savingsLendingAccount(this: Binance.Api, params: ISavingsLendingAccountParameters): Promise<ISavingsLendingAccount>;
    savingsGetPurchaseRecord(this: Binance.Api, params: ISavingsGetPurchaseRecordParameters): Promise<ISavingsGetPurchaseRecord>;
    savingsGetRedemptionRecord(this: Binance.Api, params: ISavingsGetRedemptionRecordParameters): Promise<ISavingsGetRedemptionRecord>;
    savingsGetInterestHistory(this: Binance.Api, params: ISavingsGetInterestHistoryParameters): Promise<ISavingsGetInterestHistory>;
    savingsChangeFixedActivityPositionToDailyPosition(this: Binance.Api, params: ISavingsChangeFixedActivityPositionToDailyPositionParameters): Promise<ISavingsChangeFixedActivityPositionToDailyPosition>;
}
export declare enum ESavingsStatus {
    ALL = "ALL",
    SUBSCRIBABLE = "SUBSCRIBABLE",
    UNSUBSCRIBABLE = "UNSUBSCRIBABLE"
}
export declare enum ESavingsType {
    FAST = "FAST",
    NORMAL = "NORMAL"
}
export declare enum ESavingsSortBy {
    START_TIME = "START_TIME",
    LOT_SIZE = "LOT_SIZE",
    INTEREST_RATE = "INTEREST_RATE",
    DURATION = "DURATION"
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
export interface ISavingsRedeemFlexibleProduct {
}
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
export interface ISavingsLendingAccountParameters extends Binance.IRequestParameters {
}
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

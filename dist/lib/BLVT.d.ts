import { Binance } from '../Binance';
export declare class BLVT {
    blvtGetBLVTInfo(this: Binance.Api, params?: IBLVTGetBLVTInfoParameters): Promise<IBLVTGetBLVTInfo[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    blvtSubscribeBLVT(this: Binance.Api, params: IBLVTSubscribeBLVTParameters): Promise<IBLVTSubscribeBLVT>;
    blvtQuerySubscriptionRecord(this: Binance.Api, params?: IBLVTQuerySubscriptionRecordParameters): Promise<IBLVTQuerySubscriptionRecord[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    blvtRedeemBLVT(this: Binance.Api, params: IBLVTRedeemBLVTParameters): Promise<IBLVTRedeemBLVT>;
    blvtQueryRedemptionRecord(this: Binance.Api, params?: IBLVTQueryRedemptionRecordParameters): Promise<IBLVTQueryRedemptionRecord[]>;
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

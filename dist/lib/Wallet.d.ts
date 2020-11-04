import { Binance } from '../Binance';
export declare class Wallet {
    walletDepositHistory(this: Binance.Api, params?: IWalletDepositHistoryParameters): Promise<IWalletDepositHistory>;
    walletWithdrawHistory(this: Binance.Api, params?: IWalletWithdrawHistoryParameters): Promise<IWalletWithdrawHistory>;
    walletDepositAddress(this: Binance.Api, params: IWalletDepositAddressParameters): Promise<IWalletDepositAddress>;
    walletAccountStatus(this: Binance.Api, params?: Binance.IRequestParameters): Promise<IWalletAccountStatus>;
    walletSystemStatus(this: Binance.Api): Promise<IWalletSystemStatus>;
    walletApiTradingStatus(this: Binance.Api, params?: Binance.IRequestParameters): Promise<IWalletApiTradingStatus>;
    walletDustLog(this: Binance.Api, params?: Binance.IRequestParameters): Promise<IWalletDustLog>;
    /**
     * Warning: This function hasn't been tested.
     */
    walletDustTransfer(this: Binance.Api, params: IWalletDustTransferParameters): Promise<IWalletDustTransfer>;
    walletTradeFee(this: Binance.Api, params?: IWalletTradeFeeParameters): Promise<IWalletTradeFee>;
    walletAssetDetail(this: Binance.Api, params?: Binance.IRequestParameters): Promise<IWalletAssetDetail>;
    walletAllCoins(this: Binance.Api, params?: Binance.IRequestParameters): Promise<IWalletAllCoins[]>;
    walletDailyAccountSnapshot(this: Binance.Api, params: IWalletDailyAccountSnapshotParameters): Promise<IWalletDailyAccountSnapshot>;
    walletAssetDividend(this: Binance.Api, params?: IWalletAssetDividendParameters): Promise<IWalletAssetDividend>;
    /**
     * Warning: This function hasn't been tested.
     */
    walletWithdraw(this: Binance.Api, params: IWalletWithdrawParameters): Promise<IWalletWithdraw>;
    /**
     * Warning: This function hasn't been tested.
     */
    walletDisableFastWithdrawSwitch(this: Binance.Api, params: Binance.IRequestParameters): Promise<Binance.IResponseEmpty>;
    /**
     * Warning: This function hasn't been tested.
     */
    walletEnableFastWithdrawSwitch(this: Binance.Api, params: Binance.IRequestParameters): Promise<Binance.IResponseEmpty>;
}
export interface IWalletDepositHistoryParameters extends Binance.IRequestParameters {
    asset?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
}
export interface IWalletDepositHistory {
    success: boolean;
    depositList: IWalletDepositHistoryItem[];
}
export interface IWalletDepositHistoryItem {
    insertTime: number;
    amount: number;
    asset: string;
    address: string;
    txId: string;
    status: number;
}
export interface IWalletWithdrawHistoryParameters extends Binance.IRequestParameters {
    asset?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
}
export interface IWalletWithdrawHistory {
    success: boolean;
    withdrawList: IWalletWithdrawHistoryItem[];
}
export interface IWalletWithdrawHistoryItem {
    id: string;
    amount: number;
    transactionFee: number;
    address: string;
    addressTag: string;
    txId: string;
    asset: string;
    applyTime: number;
    status: number;
}
export interface IWalletDepositAddressParameters extends Binance.IRequestParameters {
    asset: string;
    status?: boolean;
}
export interface IWalletDepositAddress {
    success: boolean;
    address: string;
    addressTag: string;
    asset: string;
}
export interface IWalletAccountStatus {
    success: boolean;
    msg: string;
    objs?: string[];
}
export interface IWalletSystemStatus {
    status: number;
    msg: string;
}
export interface IWalletApiTradingStatus {
    success: boolean;
    status: IWalletApiTradingStatusDetails;
}
export interface IWalletApiTradingStatusDetails {
    isLocked: boolean;
    plannedRecoverTime: number;
    triggerCondition: Record<string, number>;
    indicators: Record<string, IWalletApiTradingStatusDetailsIndicator>;
    updateTime: number;
}
export interface IWalletApiTradingStatusDetailsIndicator {
    i: string;
    c: number;
    v: number;
    t: number;
}
export interface IWalletDustLog {
    success: boolean;
    results: IWalletDustLogResult;
}
export interface IWalletDustTransferParameters extends Binance.IRequestParameters {
    asset: string;
}
export interface IWalletDustTransfer {
    totalServiceCharge: string;
    totalTransfered: string;
    transferResult: IWalletDustTransferResult[];
}
export interface IWalletDustTransferResult {
    amount: string;
    fromAsset: string;
    operateTime: number;
    serviceChargeAmount: string;
    tranId: number;
    transferedAmount: string;
}
export interface IWalletDustLogResult {
    total: number;
    rows: IWalletDustLogResultRow[];
}
export interface IWalletDustLogResultRow {
    transfered_total: string;
    service_charge_total: string;
    tran_id: number;
    logs: IWalletDustLogResultLog[];
    operate_time: string;
}
export interface IWalletDustLogResultLog {
    tranId: number;
    serviceChargeAmount: string;
    uid: string;
    amount: string;
    operateTime: string;
    transferedAmount: string;
    fromAsset: string;
}
export interface IWalletTradeFeeParameters extends Binance.IRequestParameters {
    symbol?: string;
}
export interface IWalletTradeFee {
    success: boolean;
    tradeFee: IWalletTradeFeeDetails[];
}
export interface IWalletTradeFeeDetails {
    symbol: string;
    maker: number;
    taker: number;
}
export interface IWalletAssetDetail {
    success: boolean;
    assetDetail: Record<string, IWalletAssetDetailDetails>;
}
export interface IWalletAssetDetailDetails {
    minWithdrawAmount: string;
    depositStatus: boolean;
    withdrawFee: number;
    withdrawStatus: boolean;
    depositTip?: string;
}
export interface IWalletAllCoins {
    coin: string;
    depositAllEnable: boolean;
    free: string;
    freeze: string;
    ipoable: string;
    ipoing: string;
    isLegalMoney: boolean;
    locked: string;
    name: string;
    networkList: IWalletAllCoinsNetwork[];
    storage: string;
    trading: boolean;
    withdrawAllEnable: boolean;
    withdrawing: string;
}
export interface IWalletAllCoinsNetwork {
    addressRegex: string;
    coin: string;
    depositDesc: string;
    depositEnable: boolean;
    isDefault: boolean;
    memoRegex: string;
    minConfirm: number;
    name: string;
    network: string;
    resetAddressStatus: boolean;
    specialTips: string;
    unLockConfirm: number;
    withdrawDesc: string;
    withdrawEnable: boolean;
    withdrawFee: string;
    withdrawIntegerMultiple: string;
    withdrawMin: string;
}
export interface IWalletDailyAccountSnapshotParameters extends Binance.IRequestParameters {
    type: 'SPOT' | 'MARGIN' | 'FUTURES';
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface IWalletDailyAccountSnapshot {
    code: number;
    msg: string;
    snapshotVos: IWalletDailyAccountSnapshotDetails[];
}
export interface IWalletDailyAccountSnapshotDetails {
    data: IWalletDailyAccountSnapshotDetailsData;
    type: string;
    updateTime: number;
}
export interface IWalletDailyAccountSnapshotDetailsData {
    balances: IWalletDailyAccountSnapshotDetailsDataBalance[];
    totalAssetOfBtc: string;
}
export interface IWalletDailyAccountSnapshotDetailsDataBalance {
    asset: string;
    free: string;
    locked: string;
}
export interface IWalletAssetDividendParameters extends Binance.IRequestParameters {
    asset?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface IWalletAssetDividend {
    total: number;
    rows: IWalletAssetDividendItem[];
}
export interface IWalletAssetDividendItem {
    amount: string;
    asset: string;
    divTime: number;
    endInfo: string;
    tranId: number;
}
export interface IWalletWithdrawParameters extends Binance.IRequestParameters {
    asset: string;
    withdrawOrderId?: string;
    network?: string;
    address: string;
    addressTag?: string;
    amount: number;
    transactionFeeFlag?: boolean;
    name?: string;
}
export interface IWalletWithdraw {
    success: boolean;
    id: string;
    msg: string;
}

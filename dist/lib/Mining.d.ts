import { Binance } from '../Binance';
export declare class Mining {
    miningAcquiringAlgorithm(this: Binance.Api): Promise<IMiningAcquiringAlgorithm>;
    miningAcquiringCoinName(this: Binance.Api): Promise<IMiningAcquiringCoinName>;
    miningRequestDetailMinerList(this: Binance.Api, params: IMiningRequestDetailMinerListParameters): Promise<IMiningRequestDetailMinerList>;
    miningRequestMinerList(this: Binance.Api, params: IMiningRequestMinerListParameters): Promise<IMiningRequestMinerList>;
    miningRevenueList(this: Binance.Api, params: IMiningRevenueListParameters): Promise<IMiningRevenueList>;
    miningStatisticList(this: Binance.Api, params: IMiningStatisticListParameters): Promise<IMiningStatisticList>;
    miningAccountList(this: Binance.Api, params: IMiningAccountListParameters): Promise<IMiningAccountList>;
}
export interface IMiningAcquiringAlgorithm {
    code: number;
    msg: string;
    data: IMiningAcquiringAlgorithmData[];
}
export interface IMiningAcquiringAlgorithmData {
    algoName: string;
    algoId: number;
    poolIndex: number;
    unit: string;
}
export interface IMiningAcquiringCoinName {
    code: number;
    msg: string;
    data: IMiningAcquiringCoinNameData[];
}
export interface IMiningAcquiringCoinNameData {
    coinName: string;
    coinId: number;
    poolIndex: number;
    algoId: number;
    algoName: string;
}
export interface IMiningRequestDetailMinerListParameters {
    algo: string;
    userName: string;
    workerName: string;
}
export interface IMiningRequestDetailMinerList {
    code: number;
    msg: string;
    data: IMiningRequestDetailMinerListData[];
}
export interface IMiningRequestDetailMinerListData {
    workerName: string;
    type: string;
    hashrateDatas: IMiningRequestDetailMinerListDataHashrate[];
}
export interface IMiningRequestDetailMinerListDataHashrate {
    time: number;
    hashrate: string;
    reject: number;
}
export interface IMiningRequestMinerListParameters {
    algo: string;
    userName: string;
    pageIndex?: number;
    sort?: 0 | 1;
    sortColumn?: 0 | 1;
    workerStatus?: 0 | 1 | 2 | 3;
}
export interface IMiningRequestMinerList {
    code: number;
    msg: string;
    data: IMiningRequestMinerListData;
}
export interface IMiningRequestMinerListData {
    workerDatas: IMiningRequestMinerListDataWorker[];
    totalNum: number;
    pageSize: number;
}
export interface IMiningRequestMinerListDataWorker {
    workerId: string;
    workerName: string;
    status: number;
    hashRate: number;
    dayHashRate: number;
    rejectRate: number;
    lastShareTime: number;
}
export interface IMiningRevenueListParameters {
    algo: string;
    userName: string;
    coin?: string;
    startDate?: number;
    endDate?: number;
    pageIndex?: number;
}
export interface IMiningRevenueList {
    code: number;
    msg: string;
    data: IMiningRevenueListData;
}
export interface IMiningRevenueListData {
    accountProfits: IMiningRevenueListDataAccountProfit[];
    totalNum: number;
    pageSize: number;
}
export interface IMiningRevenueListDataAccountProfit {
    time: number;
    dayHashRate: number;
    profitAmount: number;
    coinName: string;
    status: number;
}
export interface IMiningStatisticListParameters {
    algo: string;
    userName: string;
}
export interface IMiningStatisticList {
    code: number;
    msg: string;
    data: IMiningStatisticListData;
}
export interface IMiningStatisticListData {
    fifteenMinHashRate: string;
    dayHashRate: string;
    validNum: number;
    invalidNum: number;
    profitToday: IMiningStatisticListDataProfit;
    profitYesterday: IMiningStatisticListDataProfit;
    userName: string;
    unit: string;
    algo: string;
}
export interface IMiningStatisticListDataProfit {
    BTC: string;
    BSV: string;
    BCH: string;
}
export declare type IMiningAccountListParameters = IMiningStatisticListParameters;
export interface IMiningAccountList {
    code: number;
    msg: string;
    data: IMiningAccountListData;
}
export interface IMiningAccountListData {
    type: string;
    userName: string;
    list: IMiningAccountListDataList[];
}
export declare type IMiningAccountListDataList = IMiningRequestDetailMinerListDataHashrate;

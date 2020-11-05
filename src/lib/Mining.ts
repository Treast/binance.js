import { Binance } from '../Binance';

export class Mining {
  miningAcquiringAlgorithm(this: Binance.Api) {
    return this.sendRequest<Binance.IResponseEmpty, IMiningAcquiringAlgorithm>(
      '/sapi/v1/mining/pub/algoList',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA
    );
  }

  miningAcquiringCoinName(this: Binance.Api) {
    return this.sendRequest<Binance.IResponseEmpty, IMiningAcquiringCoinName>(
      '/sapi/v1/mining/pub/coinList',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA
    );
  }

  miningRequestDetailMinerList(this: Binance.Api, params: IMiningRequestDetailMinerListParameters) {
    return this.sendRequest<IMiningRequestDetailMinerListParameters, IMiningRequestDetailMinerList>(
      '/sapi/v1/mining/worker/detail',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  miningRequestMinerList(this: Binance.Api, params: IMiningRequestMinerListParameters) {
    return this.sendRequest<IMiningRequestMinerListParameters, IMiningRequestMinerList>(
      '/sapi/v1/mining/worker/list',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  miningRevenueList(this: Binance.Api, params: IMiningRevenueListParameters) {
    return this.sendRequest<IMiningRevenueListParameters, IMiningRevenueList>(
      '/sapi/v1/mining/payment/list',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  miningStatisticList(this: Binance.Api, params: IMiningStatisticListParameters) {
    return this.sendRequest<IMiningStatisticListParameters, IMiningStatisticList>(
      '/sapi/v1/mining/statistics/user/status',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  miningAccountList(this: Binance.Api, params: IMiningAccountListParameters) {
    return this.sendRequest<IMiningAccountListParameters, IMiningAccountList>(
      '/sapi/v1/mining/statistics/user/list',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }
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
  workerDatas?: IMiningRequestMinerListDataWorker[];
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
  accountProfits?: IMiningRevenueListDataAccountProfit[];
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

export type IMiningAccountListParameters = IMiningStatisticListParameters;

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

export type IMiningAccountListDataList = IMiningRequestDetailMinerListDataHashrate;

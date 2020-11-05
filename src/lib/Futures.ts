import { Binance } from '../Binance';

export class Futures {
  /**
   * Warning: This function hasn't been tested.
   */
  futuresNewFutureAccountTransfer(this: Binance.Api, params: IFuturesNewFutureAccountTransferParameters) {
    return this.sendRequest<IFuturesNewFutureAccountTransferParameters, IFuturesNewFutureAccountTransfer>(
      '/sapi/v1/futures/transfer',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.FUTURES
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresGetFutureAccountTransactionHistoryList(this: Binance.Api, params: IFuturesGetFutureAccountTransactionHistoryListParameters) {
    return this.sendRequest<IFuturesGetFutureAccountTransactionHistoryListParameters, IFuturesGetFutureAccountTransactionHistoryList>(
      '/sapi/v1/futures/transfer',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresBorrowCrossCollateral(this: Binance.Api, params: IFuturesBorrowCrossCollateralParameters) {
    return this.sendRequest<IFuturesBorrowCrossCollateralParameters, IFuturesBorrowCrossCollateral>(
      '/sapi/v1/futures/loan/borrow',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresCrossCollateralBorrowHistory(this: Binance.Api, params: IFuturesCrossCollateralBorrowHistoryParameters = {}) {
    return this.sendRequest<IFuturesCrossCollateralBorrowHistoryParameters, IFuturesCrossCollateralBorrowHistory>(
      '/sapi/v1/futures/loan/borrow/history',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresRepayCrossCollateral(this: Binance.Api, params: IFuturesRepayCrossCollateralParameters) {
    return this.sendRequest<IFuturesRepayCrossCollateralParameters, IFuturesRepayCrossCollateral>(
      '/sapi/v1/futures/loan/repay',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresCrossCollateralRepaymentHistory(this: Binance.Api, params: IFuturesCrossCollateralRepaymentHistoryParameters = {}) {
    return this.sendRequest<IFuturesCrossCollateralRepaymentHistoryParameters, IFuturesCrossCollateralRepaymentHistory>(
      '/sapi/v1/futures/loan/repay/history',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresCrossCollateralWallet(this: Binance.Api, params: IFuturesCrossCollateralWalletParameters = {}) {
    return this.sendRequest<IFuturesCrossCollateralWalletParameters, IFuturesCrossCollateralWallet>(
      '/sapi/v1/futures/loan/wallet',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresCrossCollateralInformation(this: Binance.Api, params: IFuturesCrossCollateralInformationParameters = {}) {
    return this.sendRequest<IFuturesCrossCollateralInformationParameters, IFuturesCrossCollateralInformation>(
      '/sapi/v1/futures/loan/configs',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresCalculateRateAfterAdjustCrossCollateralLTV(this: Binance.Api, params: IFuturesCalculateRateAfterAdjustCrossCollateralLTVParameters) {
    return this.sendRequest<IFuturesCalculateRateAfterAdjustCrossCollateralLTVParameters, IFuturesCalculateRateAfterAdjustCrossCollateralLTV>(
      '/sapi/v1/futures/loan/calcAdjustLevel',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresGetMaxAmountAdjustCrossCollateralLTV(this: Binance.Api, params: IFuturesGetMaxAmountAdjustCrossCollateralLTVParameters) {
    return this.sendRequest<IFuturesGetMaxAmountAdjustCrossCollateralLTVParameters, IFuturesGetMaxAmountAdjustCrossCollateralLTV>(
      '/sapi/v1/futures/loan/calcMaxAdjustAmount',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresAdjustCrossCollateralLTV(this: Binance.Api, params: IFuturesAdjustCrossCollateralLTVParameters) {
    return this.sendRequest<IFuturesAdjustCrossCollateralLTVParameters, IFuturesAdjustCrossCollateralLTV>(
      '/sapi/v1/futures/loan/adjustCollateral',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresAdjustCrossCollateralLTVHistory(this: Binance.Api, params: IFuturesAdjustCrossCollateralLTVHistoryParameters = {}) {
    return this.sendRequest<IFuturesAdjustCrossCollateralLTVHistoryParameters, IFuturesAdjustCrossCollateralLTVHistory>(
      '/sapi/v1/futures/loan/adjustCollateral/history',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  futuresCrossCollateralLiquidationHistory(this: Binance.Api, params: IFuturesCrossCollateralLiquidationHistoryParameters = {}) {
    return this.sendRequest<IFuturesCrossCollateralLiquidationHistoryParameters, IFuturesCrossCollateralLiquidationHistory>(
      '/sapi/v1/futures/loan/liquidationHistory',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }
}

export interface IFuturesNewFutureAccountTransferParameters extends Binance.IRequestParameters {
  asset: string;
  amount: number;
  type: Binance.EFuturesType;
}

export interface IFuturesNewFutureAccountTransfer {
  tranId: number;
}

export interface IFuturesGetFutureAccountTransactionHistoryListParameters extends Binance.IRequestParameters {
  asset: string;
  startTime: number;
  endTime?: number;
  current?: number;
  size?: number;
}

export interface IFuturesGetFutureAccountTransactionHistoryList {
  rows: IFuturesGetFutureAccountTransactionHistoryListRow[];
  total: number;
}

export interface IFuturesGetFutureAccountTransactionHistoryListRow {
  asset: string;
  tranId: number;
  amount: string;
  type: string;
  timestamp: number;
  status: string;
}

export interface IFuturesBorrowCrossCollateralParameters extends Binance.IRequestParameters {
  coin: string;
  amount?: number;
  collateralCoin?: string;
  collateralAmount?: number;
}

export interface IFuturesBorrowCrossCollateral {
  coin: string;
  amount: string;
  collateralCoin: string;
  collateralAmount: string;
  time: number;
  borrowId: string;
}

export interface IFuturesCrossCollateralBorrowHistoryParameters extends Binance.IRequestParameters {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesCrossCollateralBorrowHistory {
  rows: IFuturesCrossCollateralBorrowHistoryRow[];
  total: number;
}

export interface IFuturesCrossCollateralBorrowHistoryRow {
  confirmedTime: number;
  coin: string;
  collateralRate: string;
  leftTotal: string;
  leftPrincipal: string;
  deadline: number;
  collateralCoin: string;
  collateralAmount: string;
  orderStatus: string;
  borrowId: string;
}

export interface IFuturesRepayCrossCollateralParameters extends Binance.IRequestParameters {
  coin: string;
  collateralCoin: string;
  amount: number;
}

export interface IFuturesRepayCrossCollateral {
  coin: string;
  amount: string;
  collateralCoin: string;
  repayId: string;
}

export interface IFuturesCrossCollateralRepaymentHistoryParameters extends Binance.IRequestParameters {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesCrossCollateralRepaymentHistory {
  rows: IFuturesCrossCollateralRepaymentHistoryRow[];
  total: number;
}

export interface IFuturesCrossCollateralRepaymentHistoryRow {
  coin: string;
  amount: string;
  collateralCoin: string;
  releasedCollateral: string;
  confirmedTime: number;
  updateTime: number;
  status: string;
  repayId: string;
}

export type IFuturesCrossCollateralWalletParameters = Binance.IRequestParameters;

export interface IFuturesCrossCollateralWallet {
  totalCrossCollateral: string;
  totalBorrowed: string;
  asset: string;
  crossCollaterals: IFuturesCrossCollateralWalletCrossCollateral[];
}

export interface IFuturesCrossCollateralWalletCrossCollateral {
  collateralCoin: string;
  locked: string;
  loanAmount: string;
  currentCollateralRate: string;
}

export interface IFuturesCrossCollateralInformationParameters extends Binance.IRequestParameters {
  collateralCoin?: string;
}

export interface IFuturesCrossCollateralInformation {
  collateralCoin: string;
  rate: string;
  marginCallCollateralRate: string;
  liquidationCollateralRate: string;
  currentCollateralRate: string;
}

export interface IFuturesCalculateRateAfterAdjustCrossCollateralLTVParameters extends Binance.IRequestParameters {
  collateralCoin: string;
  amount: number;
  direction: 'ADDITIONAL' | 'REDUCED';
}

export interface IFuturesCalculateRateAfterAdjustCrossCollateralLTV {
  afterCollateralRate: string;
}

export interface IFuturesGetMaxAmountAdjustCrossCollateralLTVParameters extends Binance.IRequestParameters {
  collateralCoin: string;
}

export interface IFuturesGetMaxAmountAdjustCrossCollateralLTV {
  maxInAmount: string;
  maxOutAmount: string;
}

export interface IFuturesAdjustCrossCollateralLTVParameters extends Binance.IRequestParameters {
  collateralCoin: string;
  amount: number;
  direction: 'ADDITIONAL' | 'REDUCED';
}

export interface IFuturesAdjustCrossCollateralLTV {
  collateralCoin: string;
  direction: string;
  amount: string;
  time: number;
}

export interface IFuturesAdjustCrossCollateralLTVHistoryParameters extends Binance.IRequestParameters {
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesAdjustCrossCollateralLTVHistory {
  rows: IFuturesAdjustCrossCollateralLTVHistoryRow[];
  total: number;
}

export interface IFuturesAdjustCrossCollateralLTVHistoryRow {
  amount: string;
  collateralCoin: string;
  coin: string;
  preCollateralRate: string;
  afterCollateralRate: string;
  direction: string;
  status: string;
  adjustTime: number;
}

export interface IFuturesCrossCollateralLiquidationHistoryParameters extends Binance.IRequestParameters {
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IFuturesCrossCollateralLiquidationHistory {
  rows: IFuturesCrossCollateralLiquidationHistoryRow[];
  total: number;
}

export interface IFuturesCrossCollateralLiquidationHistoryRow {
  collateralAmountForLiquidation: string;
  collateralCoin: string;
  forceLiquidationStartTime: number;
  coin: string;
  restCollateralAmountAfterLiquidation: string;
  restLoanAmount: string;
  status: string;
}

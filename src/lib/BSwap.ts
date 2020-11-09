import { Binance } from '../Binance';

export class BSwap {
  bSwapListAllSwapPools(this: Binance.Api) {
    return this.sendRequest<Binance.IResponseEmpty, IBSwapListAllSwapPools[]>(
      '/sapi/v1/bswap/pools',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.MARKET_DATA,
      true
    );
  }

  bSwapGetLiquidityInformationOfPool(this: Binance.Api, params: IBSwapGetLiquidityInformationOfPoolParameters = {}) {
    return this.sendRequest<IBSwapGetLiquidityInformationOfPoolParameters, IBSwapGetLiquidityInformationOfPool[]>(
      '/sapi/v1/bswap/liquidity',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  bSwapAddLiquIBSwapAddLiquidity(this: Binance.Api, params: IBSwapAddLiquidityParameters) {
    return this.sendRequest<IBSwapAddLiquidityParameters, IBSwapAddLiquidity>(
      '/sapi/v1/bswap/liquidityAdd',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  bSwapRemoveLiquidity(this: Binance.Api, params: IBSwapRemoveLiquidityParameters) {
    return this.sendRequest<IBSwapRemoveLiquidityParameters, IBSwapRemoveLiquidity>(
      '/sapi/v1/bswap/liquidityRemove',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  bSwapGetLiquidityOperationRecord(this: Binance.Api, params: IBSwapGetLiquidityOperationRecordParameters = {}) {
    return this.sendRequest<IBSwapGetLiquidityOperationRecordParameters, IBSwapGetLiquidityOperationRecord[]>(
      '/sapi/v1/bswap/liquidityOps',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  bSwapRequestQuote(this: Binance.Api, params: IBSwapRequestQuoteParameters) {
    return this.sendRequest<IBSwapRequestQuoteParameters, IBSwapRequestQuote>(
      '/sapi/v1/bswap/quote',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  bSwapSwap(this: Binance.Api, params: IBSwapSwapParameters) {
    return this.sendRequest<IBSwapSwapParameters, IBSwapSwap>(
      '/sapi/v1/bswap/swap',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.TRADE
    );
  }

  bSwapGetSwapHistory(this: Binance.Api, params: IBSwapGetSwapHistoryParameters = {}) {
    return this.sendRequest<IBSwapGetSwapHistoryParameters, IBSwapGetSwapHistory[]>(
      '/sapi/v1/bswap/swap',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }
}

export interface IBSwapListAllSwapPools {
  poolId: number;
  poolName: number;
  assets: string[];
}

export interface IBSwapGetLiquidityInformationOfPoolParameters extends Binance.IRequestParameters {
  poolId?: number;
}

export interface IBSwapGetLiquidityInformationOfPool {
  poolId: number;
  poolName: string;
  updateTime: number;
  liquidity: Record<string, number>;
  share: IBSwapGetLiquidityInformationOfPoolShare;
}

export interface IBSwapGetLiquidityInformationOfPoolShare {
  shareAmount: number;
  sharePercentage: number;
  asset: Record<string, number>;
}

export interface IBSwapAddLiquidityParameters extends Binance.IRequestParameters {
  poolId: number;
  asset: string;
  quantity: number;
}

export interface IBSwapAddLiquidity {
  operationId: number;
}

export interface IBSwapRemoveLiquidityParameters extends Binance.IRequestParameters {
  poolId: number;
  type: string;
  asset: any[];
  shareAmount: number;
}

export interface IBSwapRemoveLiquidity {
  operationId: number;
}

export interface IBSwapGetLiquidityOperationRecordParameters extends Binance.IRequestParameters {
  operationId?: number;
  poolId?: number;
  operation?: 'ADD' | 'REMOVE';
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface IBSwapGetLiquidityOperationRecord {
  operationId: number;
  poolId: number;
  poolName: string;
  operation: string;
  status: number;
  updateTime: number;
  shareAmount: string;
}

export interface IBSwapRequestQuoteParameters extends Binance.IRequestParameters {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
}

export interface IBSwapRequestQuote {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: string;
  baseQty: string;
  price: string;
  slippage: string;
  fee: string;
}

export interface IBSwapSwapParameters extends Binance.IRequestParameters {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
}

export interface IBSwapSwap {
  swapId: number;
}

export interface IBSwapGetSwapHistoryParameters extends Binance.IRequestParameters {
  swapId?: number;
  startTime?: number;
  endTime?: number;
  status?: 0 | 1 | 2;
  quoteAsset?: string;
  baseAsset?: string;
  limit?: number;
}

export interface IBSwapGetSwapHistory {
  swapId: number;
  swapTime: number;
  status: number;
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
  baseQty: number;
  price: number;
  fee: number;
}

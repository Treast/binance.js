import { Binance } from '../Binance';
export declare class BSwap {
    bSwapListAllSwapPools(this: Binance.Api): Promise<IBSwapListAllSwapPools[]>;
    bSwapGetLiquidityInformationOfPool(this: Binance.Api, params?: IBSwapGetLiquidityInformationOfPoolParameters): Promise<IBSwapGetLiquidityInformationOfPool[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapAddLiquIBSwapAddLiquidity(this: Binance.Api, params: IBSwapAddLiquidityParameters): Promise<IBSwapAddLiquidity>;
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapRemoveLiquidity(this: Binance.Api, params: IBSwapRemoveLiquidityParameters): Promise<IBSwapRemoveLiquidity>;
    bSwapGetLiquidityOperationRecord(this: Binance.Api, params?: IBSwapGetLiquidityOperationRecordParameters): Promise<IBSwapGetLiquidityOperationRecord[]>;
    bSwapRequestQuote(this: Binance.Api, params: IBSwapRequestQuoteParameters): Promise<IBSwapRequestQuote>;
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapSwap(this: Binance.Api, params: IBSwapSwapParameters): Promise<IBSwapSwap>;
    bSwapGetSwapHistory(this: Binance.Api, params?: IBSwapGetSwapHistoryParameters): Promise<IBSwapGetSwapHistory[]>;
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

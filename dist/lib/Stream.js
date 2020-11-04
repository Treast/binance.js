"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
class Stream {
    streamAggregateTrade(params) {
        return this.createStream(`/ws/${params.symbol.toLowerCase()}@aggTrade`);
    }
    streamTrade(params) {
        return this.createStream(`/ws/${params.symbol.toLowerCase()}@trade`);
    }
    streamCandlestick(params) {
        return this.createStream(`/ws/${params.symbol.toLowerCase()}@interval_${params.interval}`);
    }
    streamIndividualSymbolMiniTicker(params) {
        return this.createStream(`/ws/${params.symbol.toLowerCase()}@miniTicker`);
    }
    streamAllMarketMiniTickers() {
        return this.createStream(`/ws/!miniTicker@arr`);
    }
    streamIndividualSymbolTicker(params) {
        return this.createStream(`/ws/${params.symbol.toLowerCase()}@ticker`);
    }
    streamAllMarketTickers() {
        return this.createStream(`/ws/!ticker@arr`);
    }
    streamIndividualSymbolBookTicker(params) {
        return this.createStream(`/ws/${params.symbol.toLowerCase()}@bookTicker`);
    }
    streamAllBookTickers() {
        return this.createStream(`/ws/$!bookTicker`);
    }
    streamPartialBookDepth(params) {
        return this.createStream(`/ws/${params.symbol.toLowerCase()}@depth${params.levels}${params.updateSpeed ? `@${params.updateSpeed}ms` : ''}`);
    }
}
exports.Stream = Stream;
//# sourceMappingURL=Stream.js.map
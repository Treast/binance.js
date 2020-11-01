declare class Binance {
    private apiKey;
    private secretKey;
    private testMode;
    constructor(apiKey: string, secretKey: string, testMode?: boolean);
    protected sendRequest(url: string, params: Binance.IRequestParameters, method: Binance.ERequestMethod): Promise<unknown>;
    private generateBody;
    test(): void;
    test2(): void;
    getWallet: (this: Binance, s: string) => void;
}
declare namespace Binance {
    interface IRequestParameters {
    }
    enum ERequestMethod {
        POST = "POST",
        GET = "GET",
        PUT = "PUT",
        DELETE = "DELETE"
    }
}
export = Binance;

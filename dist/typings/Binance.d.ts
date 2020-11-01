export declare class Binance {
    private apiKey;
    private secretKey;
    private testMode;
    constructor(apiKey: string, secretKey: string, testMode?: boolean);
    protected sendRequest(url: string, params: Binance.IRequestParameters, method: Binance.ERequestMethod): Promise<unknown>;
    private generateBody;
    test(): void;
    getWallet: (this: Binance, s: string) => void;
}
export declare namespace Binance {
    interface IRequestParameters {
    }
    enum ERequestMethod {
        POST = "POST",
        GET = "GET",
        PUT = "PUT",
        DELETE = "DELETE"
    }
}

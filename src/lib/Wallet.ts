import { Binance } from '../Binance';

class Wallet {
  getWallet(this: Binance, s: string) {
    console.log('getWallet', s);
  }
}

export default Wallet;

![Logo Binance](./docs/logo_binance.png)

# binance.js

An API wrapper for Binance. Build your application faster !

## Benefits

-  Built with Typescript (autocomplete on request/response)
-  Use native Promises
-  Updated with the latest version

## Disclaimer

**This library is being written. Some features may be changed as updates are made. Be careful.**

## Installation

	npm install binance-js --save

## Usage

### Node
```js
const { Binance } = require('binance-js');

const binance = new Binance.Api(API_KEY, TEST_SECRET_KEY,  true); // 3rd parameter is testMode. Set explicitly to false if you want to use Live API.

binance
.spotAllOrders({
   	symbol:  'BTCUSDT',
})
.then((res)  =>  {
	console.log(res);
});
```

### Browser
   
```js
import { Binance } from 'binance-js';

const binance = new Binance.Api(API_KEY, TEST_SECRET_KEY,  true); // 3rd parameter is testMode. Set explicitly to false if you want to use Live API.

binance
.spotNewOrder({
	symbol:  'BTCUSDT',
	side: Binance.EOrderSide.BUY,
	type: Binance.EOrderType.LIMIT,
	quantity:  0.01,
	price:  1000,
	timeInForce: Binance.EOrderTimeInForce.GTC,
.then((res)  =>  {
	console.log(res);
});
```

## Progress

 - [x] API Structure
 - [x] Wallet endpoints
 - [x] Market endpoints
 - [x] Spot endpoints
 - [ ] Margin endpoints
 - [ ] Sub-accounts endpoints
 - [ ] Streams
 - [ ] Saving endpoints
 - [ ] Mining endpoints
 - [ ] Futures endpoints
 - [ ] BLVT endpoints
 - [ ] BSwap endpoints
 - [ ] Better error handling

## License

[MIT License](LICENSE)
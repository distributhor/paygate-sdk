# PayGate SDK

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)
[![Total alerts][lgtm-alerts]](link-lgtm-alerts)
[![Language grade: JavaScript][lgtm-code-quality]](lgtm-code-quality-link)

This project contains a few parts which can be used seperately or in combination, to aid with integration to the payment provider PayGate (https://www.paygate.co.za).

The main components are:

- Standalone Typescript/Javascript client to interface with the PayGate API, usable in any Typescript or NodeJS project
- ExpressJS middleware which can be used to easily configure endpoints for payment processing
- A utility which can help with common PayGate tasks, such as generating payload checksum easily, or extracting a friendly transaction summary message from a payment status response
- Browser script of the utility functions, allowing them to be imported via a `<script>` tag straight into HTML

These components can be used in isolation, or in combination, so you only have to pick what you need in order to help with your specific integration requirements. For example, if you are already using ExpressJS and want to easily enable endpoints that can handle payment processing, then it's likely that the only thing you need from this project is the ExpressJS middleware functions. Or perhaps you want to use the TS/JS client in a Node based project so that you don't have to deal directly with the PayGate HTTP API.

Currently this project is in development, but already quite usable. Reference documentation (currently a work in progress) can be found at https://distributhor.github.io/paygate-sdk/, and more detailed usage info will be made available in this README shortly.

## Typescript Typings

To follow

## API Client Usage

To follow

## ExpressJS Middleware Usage

To follow

## General Utility Functions

In progress ...

```javascript
generatePayGateChecksum();
getTransactionDescription();
getTestCards();
toCentAmount();
redirectBrowser();
PayGateLocale;
PayGateEndpoints;
PayGateErrorCodes;
PaymentMethod;
TransactionCode;
TransactionStatus;
TransactionResultCodes;
PayGateTestCards;
```

## Reference Implementation

In addition to the above, there is also a reference implementation available under the `impl` folder. It consists of an ExpressJS backend that exposes endpoints via the middleware functions (which in turn uses the TS/JS API client), and a very simple frontend with which to test payments. It should demonstrate how to use these components in your own project. The reference implementation can run in your local development environment in only a few easy steps.

### Ngrok Token

In order to run the reference implementation locally, you will need to have an account with Ngrok https://ngrok.com/. A basic account is free and quick to set up. Ngrok, if you don't already know, is a service that can make your local development server available on a public URL via a secure tunnel. This is needed because PayGate needs to return to a URL that is publically available, after processing a payment. So we use Ngrok to expose the frontend app to the web.

Once you have an Ngrok authentication token, copy the file `impl/proxy/.env.sample` to `impl/proxy/.env` and replace the fake value with your authentication token. This is all that will be required to configure the tunelling environment.

### PayGate Credentials

The backend server implementation needs to know which PayGate credentials to use for testing. Copy the file `impl/server/.env.sample` to `impl/server.env`. It is already configured with the default PayGate test credentials, so no further action is needed. But if you wanted to test with different credentials, you may update them in this file.

### Running the reference implementation locally

If you have an Ngrok auth token and PayGate credentials configured, then you can simply run `yarn install` and `yarn develop` in each of the folders `impl/proxy`, `impl/server` and `impl/app`, and the proxy needs to be the first one to run. This (the fact that 3 different instance are running in 3 consoles) may be improved later to allow for a somewhat better development experience.

Once they are all up and running, navigate to http://localhost:8000 to test payments.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[ico-release]: https://img.shields.io/github/tag/distributhor/paygate-sdk.svg
[link-github-release]: https://github.com/distributhor/paygate-sdk/releases
[lgtm-alerts]: https://img.shields.io/lgtm/alerts/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[link-lgtm-alerts]: https://lgtm.com/projects/g/distributhor/paygate-sdk/alerts/
[lgtm-code-quality]: https://img.shields.io/lgtm/grade/javascript/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[lgtm-code-quality-link]: https://lgtm.com/projects/g/distributhor/paygate-sdk/context:javascript

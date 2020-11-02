# PayGate SDK

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)
[![Total alerts][lgtm-alerts]][link-lgtm-alerts]
[![Language grade: JavaScript][lgtm-code-quality]][link-lgtm-code-quality]

## Introduction

**This documentation is currently in the process of being written and refined, and is not in a final state.**

This project is made up of a few parts which can be used seperately or in combination, to aid with building an integration to the South African payment provider [PayGate](https://www.paygate.co.za).

The main components are:

- A standalone Typescript and Javascript (NodeJS) client to interface with the PayGate API
- ExpressJS middleware which can be used to rapidly create endpoints for payment processing
- A utility module, also available in a browser friendly version, which can help with common PayGate tasks, such as generating a payload checksum, or extracting a transaction summary message from a payment status response

Only pick what you need in order to help with your specific integration requirements. For example, if you are already using ExpressJS and want to easily enable endpoints that can handle payment processing, then it's likely that the only thing you need from this project is the ExpressJS middleware functions. Or, perhaps more likely, you want to use the TS/JS client in a Node based project so that you don't have to deal directly with the PayGate HTTP API. In this case the utility module and typings may also be helpful.

Important links:

- The official [PayGate Documentation](https://docs.paygate.co.za/?shell#payweb-3)
- The Typescript [API reference](https://distributhor.github.io/paygate-sdk/) for this SDK

## Table Of Contents

- [Quick Start](#quick-start)
- [Reference Implementation](#reference-implementation)
- [Process Flow](#process-flow)
- [Configuration](#configuration)
- [API Client](#api-client)
- [Middleware](#expressjs-middleware)
- [Utils](#common-utility-functions)
- [Types](#types)

#include "md/quickstart.md"

[Back to top](#table-of-contents)

#include "md/reference-impl.md"

[Back to top](#table-of-contents)

#include "md/process.md"

[Back to top](#table-of-contents)

#include "md/config.md"

[Back to top](#table-of-contents)

#include "md/client.md"

[Back to top](#table-of-contents)

#include "md/middleware.md"

[Back to top](#table-of-contents)

#include "md/utils.md"

[Back to top](#table-of-contents)

#include "md/types.md"

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[ico-release]: https://img.shields.io/github/tag/distributhor/paygate-sdk.svg
[link-github-release]: https://github.com/distributhor/paygate-sdk/releases
[lgtm-alerts]: https://img.shields.io/lgtm/alerts/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[link-lgtm-alerts]: https://lgtm.com/projects/g/distributhor/paygate-sdk/alerts/
[lgtm-code-quality]: https://img.shields.io/lgtm/grade/javascript/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[link-lgtm-code-quality]: https://lgtm.com/projects/g/distributhor/paygate-sdk/context:javascript

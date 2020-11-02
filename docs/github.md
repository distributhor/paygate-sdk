# PayGate SDK

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)
[![Total alerts][lgtm-alerts]][link-lgtm-alerts]
[![Language grade: JavaScript][lgtm-code-quality]][link-lgtm-code-quality]

## Introduction

**Please note, this documentation is currently in the process of being written and refined. It is not in a final state yet.**

This project is made up of a few parts which can be used seperately or in combination, to aid with building an integration to the South African payment provider [PayGate](https://www.paygate.co.za).

Reference documentation can be found at https://distributhor.github.io/paygate-sdk/

The main components are:

- A standalone Typescript and Javascript client to interface with the PayGate API, usable in Typescript or NodeJS projects. There are also Typescript typings available for the PayGate data types.
- ExpressJS middleware which can be used to configure custom endpoints for payment processing
- A utility module which can help with common PayGate tasks, such as generating a payload checksum, or extracting a friendly transaction summary messages from a PayGate payment status response. This module is also available a plain JS file which can be included in HTML via a `<script>` tag.

Only pick what you need in order to help with your specific integration requirements. For example, if you are already using ExpressJS and want to easily enable endpoints that can handle payment processing, then it's likely that the only thing you need from this project is the ExpressJS middleware functions. Or, perhaps more likely, you want to use the TS/JS client in a Node based project so that you don't have to deal directly with the PayGate HTTP API. In this case the utility module and typings may also be helpful.

Features to be worked on next:

- Locales
- Support for custom payment reference ID generation

#include "docs/main.md"

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[ico-release]: https://img.shields.io/github/tag/distributhor/paygate-sdk.svg
[link-github-release]: https://github.com/distributhor/paygate-sdk/releases
[lgtm-alerts]: https://img.shields.io/lgtm/alerts/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[link-lgtm-alerts]: https://lgtm.com/projects/g/distributhor/paygate-sdk/alerts/
[lgtm-code-quality]: https://img.shields.io/lgtm/grade/javascript/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[link-lgtm-code-quality]: https://lgtm.com/projects/g/distributhor/paygate-sdk/context:javascript

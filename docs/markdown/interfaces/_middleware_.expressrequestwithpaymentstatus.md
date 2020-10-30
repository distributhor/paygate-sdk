**[SDK Reference Docs](../README.md)**

> [Globals](../README.md) / ["middleware"](../modules/_middleware_.md) / ExpressRequestWithPaymentStatus

# Interface: ExpressRequestWithPaymentStatus\<P, ResBody, ReqBody, ReqQuery>

## Type parameters

| Name       | Default          |
| ---------- | ---------------- |
| `P`        | ParamsDictionary |
| `ResBody`  | any              |
| `ReqBody`  | any              |
| `ReqQuery` | core.Query       |

## Hierarchy

- Request

  ↳ **ExpressRequestWithPaymentStatus**

## Implements

- ReadableStream

## Index

### Constructors

- [constructor](_middleware_.expressrequestwithpaymentstatus.md#constructor)

### Properties

- [aborted](_middleware_.expressrequestwithpaymentstatus.md#aborted)
- [accepted](_middleware_.expressrequestwithpaymentstatus.md#accepted)
- [app](_middleware_.expressrequestwithpaymentstatus.md#app)
- [baseUrl](_middleware_.expressrequestwithpaymentstatus.md#baseurl)
- [body](_middleware_.expressrequestwithpaymentstatus.md#body)
- [complete](_middleware_.expressrequestwithpaymentstatus.md#complete)
- [connection](_middleware_.expressrequestwithpaymentstatus.md#connection)
- [cookies](_middleware_.expressrequestwithpaymentstatus.md#cookies)
- [destroyed](_middleware_.expressrequestwithpaymentstatus.md#destroyed)
- [fresh](_middleware_.expressrequestwithpaymentstatus.md#fresh)
- [headers](_middleware_.expressrequestwithpaymentstatus.md#headers)
- [host](_middleware_.expressrequestwithpaymentstatus.md#host)
- [hostname](_middleware_.expressrequestwithpaymentstatus.md#hostname)
- [httpVersion](_middleware_.expressrequestwithpaymentstatus.md#httpversion)
- [httpVersionMajor](_middleware_.expressrequestwithpaymentstatus.md#httpversionmajor)
- [httpVersionMinor](_middleware_.expressrequestwithpaymentstatus.md#httpversionminor)
- [ip](_middleware_.expressrequestwithpaymentstatus.md#ip)
- [ips](_middleware_.expressrequestwithpaymentstatus.md#ips)
- [method](_middleware_.expressrequestwithpaymentstatus.md#method)
- [next](_middleware_.expressrequestwithpaymentstatus.md#next)
- [originalUrl](_middleware_.expressrequestwithpaymentstatus.md#originalurl)
- [params](_middleware_.expressrequestwithpaymentstatus.md#params)
- [path](_middleware_.expressrequestwithpaymentstatus.md#path)
- [paygate](_middleware_.expressrequestwithpaymentstatus.md#paygate)
- [protocol](_middleware_.expressrequestwithpaymentstatus.md#protocol)
- [query](_middleware_.expressrequestwithpaymentstatus.md#query)
- [rawHeaders](_middleware_.expressrequestwithpaymentstatus.md#rawheaders)
- [rawTrailers](_middleware_.expressrequestwithpaymentstatus.md#rawtrailers)
- [readable](_middleware_.expressrequestwithpaymentstatus.md#readable)
- [readableEncoding](_middleware_.expressrequestwithpaymentstatus.md#readableencoding)
- [readableEnded](_middleware_.expressrequestwithpaymentstatus.md#readableended)
- [readableFlowing](_middleware_.expressrequestwithpaymentstatus.md#readableflowing)
- [readableHighWaterMark](_middleware_.expressrequestwithpaymentstatus.md#readablehighwatermark)
- [readableLength](_middleware_.expressrequestwithpaymentstatus.md#readablelength)
- [readableObjectMode](_middleware_.expressrequestwithpaymentstatus.md#readableobjectmode)
- [res](_middleware_.expressrequestwithpaymentstatus.md#res)
- [route](_middleware_.expressrequestwithpaymentstatus.md#route)
- [secure](_middleware_.expressrequestwithpaymentstatus.md#secure)
- [signedCookies](_middleware_.expressrequestwithpaymentstatus.md#signedcookies)
- [socket](_middleware_.expressrequestwithpaymentstatus.md#socket)
- [stale](_middleware_.expressrequestwithpaymentstatus.md#stale)
- [statusCode](_middleware_.expressrequestwithpaymentstatus.md#statuscode)
- [statusMessage](_middleware_.expressrequestwithpaymentstatus.md#statusmessage)
- [subdomains](_middleware_.expressrequestwithpaymentstatus.md#subdomains)
- [trailers](_middleware_.expressrequestwithpaymentstatus.md#trailers)
- [url](_middleware_.expressrequestwithpaymentstatus.md#url)
- [xhr](_middleware_.expressrequestwithpaymentstatus.md#xhr)

### Methods

- [[Symbol.asyncIterator]](_middleware_.expressrequestwithpaymentstatus.md#[symbol.asynciterator])
- [\_destroy](_middleware_.expressrequestwithpaymentstatus.md#_destroy)
- [\_read](_middleware_.expressrequestwithpaymentstatus.md#_read)
- [accepts](_middleware_.expressrequestwithpaymentstatus.md#accepts)
- [acceptsCharsets](_middleware_.expressrequestwithpaymentstatus.md#acceptscharsets)
- [acceptsEncodings](_middleware_.expressrequestwithpaymentstatus.md#acceptsencodings)
- [acceptsLanguages](_middleware_.expressrequestwithpaymentstatus.md#acceptslanguages)
- [addListener](_middleware_.expressrequestwithpaymentstatus.md#addlistener)
- [destroy](_middleware_.expressrequestwithpaymentstatus.md#destroy)
- [emit](_middleware_.expressrequestwithpaymentstatus.md#emit)
- [eventNames](_middleware_.expressrequestwithpaymentstatus.md#eventnames)
- [get](_middleware_.expressrequestwithpaymentstatus.md#get)
- [getMaxListeners](_middleware_.expressrequestwithpaymentstatus.md#getmaxlisteners)
- [header](_middleware_.expressrequestwithpaymentstatus.md#header)
- [is](_middleware_.expressrequestwithpaymentstatus.md#is)
- [isPaused](_middleware_.expressrequestwithpaymentstatus.md#ispaused)
- [listenerCount](_middleware_.expressrequestwithpaymentstatus.md#listenercount)
- [listeners](_middleware_.expressrequestwithpaymentstatus.md#listeners)
- [off](_middleware_.expressrequestwithpaymentstatus.md#off)
- [on](_middleware_.expressrequestwithpaymentstatus.md#on)
- [once](_middleware_.expressrequestwithpaymentstatus.md#once)
- [param](_middleware_.expressrequestwithpaymentstatus.md#param)
- [pause](_middleware_.expressrequestwithpaymentstatus.md#pause)
- [pipe](_middleware_.expressrequestwithpaymentstatus.md#pipe)
- [prependListener](_middleware_.expressrequestwithpaymentstatus.md#prependlistener)
- [prependOnceListener](_middleware_.expressrequestwithpaymentstatus.md#prependoncelistener)
- [push](_middleware_.expressrequestwithpaymentstatus.md#push)
- [range](_middleware_.expressrequestwithpaymentstatus.md#range)
- [rawListeners](_middleware_.expressrequestwithpaymentstatus.md#rawlisteners)
- [read](_middleware_.expressrequestwithpaymentstatus.md#read)
- [removeAllListeners](_middleware_.expressrequestwithpaymentstatus.md#removealllisteners)
- [removeListener](_middleware_.expressrequestwithpaymentstatus.md#removelistener)
- [resume](_middleware_.expressrequestwithpaymentstatus.md#resume)
- [setEncoding](_middleware_.expressrequestwithpaymentstatus.md#setencoding)
- [setMaxListeners](_middleware_.expressrequestwithpaymentstatus.md#setmaxlisteners)
- [setTimeout](_middleware_.expressrequestwithpaymentstatus.md#settimeout)
- [unpipe](_middleware_.expressrequestwithpaymentstatus.md#unpipe)
- [unshift](_middleware_.expressrequestwithpaymentstatus.md#unshift)
- [wrap](_middleware_.expressrequestwithpaymentstatus.md#wrap)
- [from](_middleware_.expressrequestwithpaymentstatus.md#from)

## Constructors

### constructor

\+ **new ExpressRequestWithPaymentStatus**(`socket`: Socket): [ExpressRequestWithPaymentStatus](_middleware_.expressrequestwithpaymentstatus.md)

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[constructor](_middleware_.expressrequestwithpaymentresult.md#constructor)_

_Overrides void_

_Defined in node_modules/@types/node/http.d.ts:310_

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `socket` | Socket |

**Returns:** [ExpressRequestWithPaymentStatus](_middleware_.expressrequestwithpaymentstatus.md)

## Properties

### aborted

• **aborted**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[aborted](_middleware_.expressrequestwithpaymentresult.md#aborted)_

_Defined in node_modules/@types/node/http.d.ts:313_

---

### accepted

• **accepted**: MediaType[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[accepted](_middleware_.expressrequestwithpaymentresult.md#accepted)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:342_

Return an array of Accepted media types
ordered from highest quality to lowest.

---

### app

• **app**: Application

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[app](_middleware_.expressrequestwithpaymentresult.md#app)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:485_

---

### baseUrl

• **baseUrl**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[baseUrl](_middleware_.expressrequestwithpaymentresult.md#baseurl)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:483_

---

### body

• **body**: ReqBody

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[body](_middleware_.expressrequestwithpaymentresult.md#body)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:464_

---

### complete

• **complete**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[complete](_middleware_.expressrequestwithpaymentresult.md#complete)_

_Defined in node_modules/@types/node/http.d.ts:317_

---

### connection

• **connection**: Socket

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[connection](_middleware_.expressrequestwithpaymentresult.md#connection)_

_Defined in node_modules/@types/node/http.d.ts:321_

**`deprecate`** Use `socket` instead.

---

### cookies

• **cookies**: any

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[cookies](_middleware_.expressrequestwithpaymentresult.md#cookies)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:467_

---

### destroyed

• **destroyed**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[destroyed](_middleware_.expressrequestwithpaymentresult.md#destroyed)_

_Defined in node_modules/@types/node/stream.d.ts:35_

---

### fresh

• **fresh**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[fresh](_middleware_.expressrequestwithpaymentresult.md#fresh)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:449_

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

---

### headers

• **headers**: IncomingHttpHeaders

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[headers](_middleware_.expressrequestwithpaymentresult.md#headers)_

_Defined in node_modules/@types/node/http.d.ts:323_

---

### host

• **host**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[host](_middleware_.expressrequestwithpaymentresult.md#host)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:442_

**`deprecated`** Use hostname instead.

---

### hostname

• **hostname**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[hostname](_middleware_.expressrequestwithpaymentresult.md#hostname)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:437_

Parse the "Host" header field hostname.

---

### httpVersion

• **httpVersion**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[httpVersion](_middleware_.expressrequestwithpaymentresult.md#httpversion)_

_Defined in node_modules/@types/node/http.d.ts:314_

---

### httpVersionMajor

• **httpVersionMajor**: number

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[httpVersionMajor](_middleware_.expressrequestwithpaymentresult.md#httpversionmajor)_

_Defined in node_modules/@types/node/http.d.ts:315_

---

### httpVersionMinor

• **httpVersionMinor**: number

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[httpVersionMinor](_middleware_.expressrequestwithpaymentresult.md#httpversionminor)_

_Defined in node_modules/@types/node/http.d.ts:316_

---

### ip

• **ip**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[ip](_middleware_.expressrequestwithpaymentresult.md#ip)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:404_

Return the remote address, or when
"trust proxy" is `true` return
the upstream addr.

---

### ips

• **ips**: string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[ips](_middleware_.expressrequestwithpaymentresult.md#ips)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:414_

When "trust proxy" is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

---

### method

• **method**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[method](_middleware_.expressrequestwithpaymentresult.md#method)_

_Overrides void_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:469_

---

### next

• `Optional` **next**: NextFunction

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[next](_middleware_.expressrequestwithpaymentresult.md#next)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:492_

---

### originalUrl

• **originalUrl**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[originalUrl](_middleware_.expressrequestwithpaymentresult.md#originalurl)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:479_

---

### params

• **params**: P

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[params](_middleware_.expressrequestwithpaymentresult.md#params)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:471_

---

### path

• **path**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[path](_middleware_.expressrequestwithpaymentresult.md#path)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:432_

Short-hand for `url.parse(req.url).pathname`.

---

### paygate

• **paygate**: [PayGateMiddlewarePaymentStatus](_middleware_.paygatemiddlewarepaymentstatus.md)

_Defined in [src/middleware.ts:33](https://github.com/distributhor/paygate-sdk/blob/836401c/src/middleware.ts#L33)_

---

### protocol

• **protocol**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[protocol](_middleware_.expressrequestwithpaymentresult.md#protocol)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:390_

Return the protocol string "http" or "https"
when requested with TLS. When the "trust proxy"
setting is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

---

### query

• **query**: ReqQuery

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[query](_middleware_.expressrequestwithpaymentresult.md#query)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:473_

---

### rawHeaders

• **rawHeaders**: string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[rawHeaders](_middleware_.expressrequestwithpaymentresult.md#rawheaders)_

_Defined in node_modules/@types/node/http.d.ts:324_

---

### rawTrailers

• **rawTrailers**: string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[rawTrailers](_middleware_.expressrequestwithpaymentresult.md#rawtrailers)_

_Defined in node_modules/@types/node/http.d.ts:326_

---

### readable

• **readable**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[readable](_middleware_.expressrequestwithpaymentresult.md#readable)_

_Defined in node_modules/@types/node/stream.d.ts:28_

---

### readableEncoding

• `Readonly` **readableEncoding**: BufferEncoding \| null

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[readableEncoding](_middleware_.expressrequestwithpaymentresult.md#readableencoding)_

_Defined in node_modules/@types/node/stream.d.ts:29_

---

### readableEnded

• `Readonly` **readableEnded**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[readableEnded](_middleware_.expressrequestwithpaymentresult.md#readableended)_

_Defined in node_modules/@types/node/stream.d.ts:30_

---

### readableFlowing

• `Readonly` **readableFlowing**: boolean \| null

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[readableFlowing](_middleware_.expressrequestwithpaymentresult.md#readableflowing)_

_Defined in node_modules/@types/node/stream.d.ts:31_

---

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: number

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[readableHighWaterMark](_middleware_.expressrequestwithpaymentresult.md#readablehighwatermark)_

_Defined in node_modules/@types/node/stream.d.ts:32_

---

### readableLength

• `Readonly` **readableLength**: number

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[readableLength](_middleware_.expressrequestwithpaymentresult.md#readablelength)_

_Defined in node_modules/@types/node/stream.d.ts:33_

---

### readableObjectMode

• `Readonly` **readableObjectMode**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[readableObjectMode](_middleware_.expressrequestwithpaymentresult.md#readableobjectmode)_

_Defined in node_modules/@types/node/stream.d.ts:34_

---

### res

• `Optional` **res**: Response\<ResBody>

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[res](_middleware_.expressrequestwithpaymentresult.md#res)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:491_

After middleware.init executed, Request will contain res and next properties
See: express/lib/middleware/init.js

---

### route

• **route**: any

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[route](_middleware_.expressrequestwithpaymentresult.md#route)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:475_

---

### secure

• **secure**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[secure](_middleware_.expressrequestwithpaymentresult.md#secure)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:397_

Short-hand for:

req.protocol == 'https'

---

### signedCookies

• **signedCookies**: any

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[signedCookies](_middleware_.expressrequestwithpaymentresult.md#signedcookies)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:477_

---

### socket

• **socket**: Socket

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[socket](_middleware_.expressrequestwithpaymentresult.md#socket)_

_Defined in node_modules/@types/node/http.d.ts:322_

---

### stale

• **stale**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[stale](_middleware_.expressrequestwithpaymentresult.md#stale)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:456_

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

---

### statusCode

• `Optional` **statusCode**: number

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[statusCode](_middleware_.expressrequestwithpaymentresult.md#statuscode)_

_Defined in node_modules/@types/node/http.d.ts:339_

Only valid for response obtained from http.ClientRequest.

---

### statusMessage

• `Optional` **statusMessage**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[statusMessage](_middleware_.expressrequestwithpaymentresult.md#statusmessage)_

_Defined in node_modules/@types/node/http.d.ts:343_

Only valid for response obtained from http.ClientRequest.

---

### subdomains

• **subdomains**: string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[subdomains](_middleware_.expressrequestwithpaymentresult.md#subdomains)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:427_

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain of
the app. By default, the domain of the app is assumed to be the last two
parts of the host. This can be changed by setting "subdomain offset".

For example, if the domain is "tobi.ferrets.example.com":
If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
If "subdomain offset" is 3, req.subdomains is `["tobi"]`.

---

### trailers

• **trailers**: Dict\<string>

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[trailers](_middleware_.expressrequestwithpaymentresult.md#trailers)_

_Defined in node_modules/@types/node/http.d.ts:325_

---

### url

• **url**: string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[url](_middleware_.expressrequestwithpaymentresult.md#url)_

_Overrides void_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:481_

---

### xhr

• **xhr**: boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[xhr](_middleware_.expressrequestwithpaymentresult.md#xhr)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:461_

Check if the request was an _XMLHttpRequest_.

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): AsyncIterableIterator\<any>

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[[Symbol.asyncIterator]](_middleware_.expressrequestwithpaymentresult.md#[symbol.asynciterator])_

_Defined in node_modules/@types/node/stream.d.ts:124_

**Returns:** AsyncIterableIterator\<any>

---

### \_destroy

▸ **\_destroy**(`error`: [Error](../classes/_client_.paygateerror.md#error) \| null, `callback`: (error?: [Error](../classes/_client_.paygateerror.md#error) \| null) => void): void

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[\_destroy](_middleware_.expressrequestwithpaymentresult.md#_destroy)_

_Defined in node_modules/@types/node/stream.d.ts:47_

#### Parameters:

| Name       | Type                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| `error`    | [Error](../classes/_client_.paygateerror.md#error) \| null                   |
| `callback` | (error?: [Error](../classes/_client_.paygateerror.md#error) \| null) => void |

**Returns:** void

---

### \_read

▸ **\_read**(`size`: number): void

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[\_read](_middleware_.expressrequestwithpaymentresult.md#_read)_

_Defined in node_modules/@types/node/stream.d.ts:37_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `size` | number |

**Returns:** void

---

### accepts

▸ **accepts**(): string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[accepts](_middleware_.expressrequestwithpaymentresult.md#accepts)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:282_

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimted list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    req.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    req.accepts('html');
    // => "html"
    req.accepts('text/html');
    // => "text/html"
    req.accepts('json, text');
    // => "json"
    req.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    req.accepts('html, json');
    // => "json"

**Returns:** string[]

▸ **accepts**(`type`: string): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[accepts](_middleware_.expressrequestwithpaymentresult.md#accepts)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:283_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `type` | string |

**Returns:** string \| false

▸ **accepts**(`type`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[accepts](_middleware_.expressrequestwithpaymentresult.md#accepts)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:284_

#### Parameters:

| Name   | Type     |
| ------ | -------- |
| `type` | string[] |

**Returns:** string \| false

▸ **accepts**(...`type`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[accepts](_middleware_.expressrequestwithpaymentresult.md#accepts)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:285_

#### Parameters:

| Name      | Type     |
| --------- | -------- |
| `...type` | string[] |

**Returns:** string \| false

---

### acceptsCharsets

▸ **acceptsCharsets**(): string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsCharsets](_middleware_.expressrequestwithpaymentresult.md#acceptscharsets)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:294_

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

**Returns:** string[]

▸ **acceptsCharsets**(`charset`: string): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsCharsets](_middleware_.expressrequestwithpaymentresult.md#acceptscharsets)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:295_

#### Parameters:

| Name      | Type   |
| --------- | ------ |
| `charset` | string |

**Returns:** string \| false

▸ **acceptsCharsets**(`charset`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsCharsets](_middleware_.expressrequestwithpaymentresult.md#acceptscharsets)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:296_

#### Parameters:

| Name      | Type     |
| --------- | -------- |
| `charset` | string[] |

**Returns:** string \| false

▸ **acceptsCharsets**(...`charset`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsCharsets](_middleware_.expressrequestwithpaymentresult.md#acceptscharsets)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:297_

#### Parameters:

| Name         | Type     |
| ------------ | -------- |
| `...charset` | string[] |

**Returns:** string \| false

---

### acceptsEncodings

▸ **acceptsEncodings**(): string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsEncodings](_middleware_.expressrequestwithpaymentresult.md#acceptsencodings)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:306_

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

**Returns:** string[]

▸ **acceptsEncodings**(`encoding`: string): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsEncodings](_middleware_.expressrequestwithpaymentresult.md#acceptsencodings)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:307_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `encoding` | string |

**Returns:** string \| false

▸ **acceptsEncodings**(`encoding`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsEncodings](_middleware_.expressrequestwithpaymentresult.md#acceptsencodings)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:308_

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `encoding` | string[] |

**Returns:** string \| false

▸ **acceptsEncodings**(...`encoding`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsEncodings](_middleware_.expressrequestwithpaymentresult.md#acceptsencodings)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:309_

#### Parameters:

| Name          | Type     |
| ------------- | -------- |
| `...encoding` | string[] |

**Returns:** string \| false

---

### acceptsLanguages

▸ **acceptsLanguages**(): string[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsLanguages](_middleware_.expressrequestwithpaymentresult.md#acceptslanguages)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:318_

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

**Returns:** string[]

▸ **acceptsLanguages**(`lang`: string): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsLanguages](_middleware_.expressrequestwithpaymentresult.md#acceptslanguages)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:319_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `lang` | string |

**Returns:** string \| false

▸ **acceptsLanguages**(`lang`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsLanguages](_middleware_.expressrequestwithpaymentresult.md#acceptslanguages)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:320_

#### Parameters:

| Name   | Type     |
| ------ | -------- |
| `lang` | string[] |

**Returns:** string \| false

▸ **acceptsLanguages**(...`lang`: string[]): string \| false

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[acceptsLanguages](_middleware_.expressrequestwithpaymentresult.md#acceptslanguages)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:321_

#### Parameters:

| Name      | Type     |
| --------- | -------- |
| `...lang` | string[] |

**Returns:** string \| false

---

### addListener

▸ **addListener**(`event`: \"close\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:61_

Event emitter
The defined events on documents including:

1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"close\"  |
| `listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:62_

#### Parameters:

| Name       | Type                 |
| ---------- | -------------------- |
| `event`    | \"data\"             |
| `listener` | (chunk: any) => void |

**Returns:** this

▸ **addListener**(`event`: \"end\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:63_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"end\"    |
| `listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"error\", `listener`: (err: [Error](../classes/_client_.paygateerror.md#error)) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:64_

#### Parameters:

| Name       | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `event`    | \"error\"                                                         |
| `listener` | (err: [Error](../classes/_client_.paygateerror.md#error)) => void |

**Returns:** this

▸ **addListener**(`event`: \"pause\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:65_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"pause\"  |
| `listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"readable\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:66_

#### Parameters:

| Name       | Type         |
| ---------- | ------------ |
| `event`    | \"readable\" |
| `listener` | () => void   |

**Returns:** this

▸ **addListener**(`event`: \"resume\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:67_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"resume\" |
| `listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[addListener](_middleware_.expressrequestwithpaymentresult.md#addlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:68_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### destroy

▸ **destroy**(`error?`: [Error](../classes/_client_.paygateerror.md#error)): void

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[destroy](_middleware_.expressrequestwithpaymentresult.md#destroy)_

_Overrides void_

_Defined in node_modules/@types/node/http.d.ts:344_

#### Parameters:

| Name     | Type                                               |
| -------- | -------------------------------------------------- |
| `error?` | [Error](../classes/_client_.paygateerror.md#error) |

**Returns:** void

---

### emit

▸ **emit**(`event`: \"close\"): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:70_

#### Parameters:

| Name    | Type      |
| ------- | --------- |
| `event` | \"close\" |

**Returns:** boolean

▸ **emit**(`event`: \"data\", `chunk`: any): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:71_

#### Parameters:

| Name    | Type     |
| ------- | -------- |
| `event` | \"data\" |
| `chunk` | any      |

**Returns:** boolean

▸ **emit**(`event`: \"end\"): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:72_

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| `event` | \"end\" |

**Returns:** boolean

▸ **emit**(`event`: \"error\", `err`: [Error](../classes/_client_.paygateerror.md#error)): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:73_

#### Parameters:

| Name    | Type                                               |
| ------- | -------------------------------------------------- |
| `event` | \"error\"                                          |
| `err`   | [Error](../classes/_client_.paygateerror.md#error) |

**Returns:** boolean

▸ **emit**(`event`: \"pause\"): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:74_

#### Parameters:

| Name    | Type      |
| ------- | --------- |
| `event` | \"pause\" |

**Returns:** boolean

▸ **emit**(`event`: \"readable\"): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:75_

#### Parameters:

| Name    | Type         |
| ------- | ------------ |
| `event` | \"readable\" |

**Returns:** boolean

▸ **emit**(`event`: \"resume\"): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:76_

#### Parameters:

| Name    | Type       |
| ------- | ---------- |
| `event` | \"resume\" |

**Returns:** boolean

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[emit](_middleware_.expressrequestwithpaymentresult.md#emit)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:77_

#### Parameters:

| Name      | Type             |
| --------- | ---------------- |
| `event`   | string \| symbol |
| `...args` | any[]            |

**Returns:** boolean

---

### eventNames

▸ **eventNames**(): Array\<string \| symbol>

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[eventNames](_middleware_.expressrequestwithpaymentresult.md#eventnames)_

_Defined in node_modules/@types/node/events.d.ts:77_

**Returns:** Array\<string \| symbol>

---

### get

▸ **get**(`name`: \"set-cookie\"): string[] \| undefined

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[get](_middleware_.expressrequestwithpaymentresult.md#get)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:239_

Return request header.

The `Referrer` header field is special-cased,
both `Referrer` and `Referer` are interchangeable.

Examples:

    req.get('Content-Type');
    // => "text/plain"

    req.get('content-type');
    // => "text/plain"

    req.get('Something');
    // => undefined

Aliased as `req.header()`.

#### Parameters:

| Name   | Type           |
| ------ | -------------- |
| `name` | \"set-cookie\" |

**Returns:** string[] \| undefined

▸ **get**(`name`: string): string \| undefined

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[get](_middleware_.expressrequestwithpaymentresult.md#get)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:240_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `name` | string |

**Returns:** string \| undefined

---

### getMaxListeners

▸ **getMaxListeners**(): number

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[getMaxListeners](_middleware_.expressrequestwithpaymentresult.md#getmaxlisteners)_

_Defined in node_modules/@types/node/events.d.ts:69_

**Returns:** number

---

### header

▸ **header**(`name`: \"set-cookie\"): string[] \| undefined

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[header](_middleware_.expressrequestwithpaymentresult.md#header)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:242_

#### Parameters:

| Name   | Type           |
| ------ | -------------- |
| `name` | \"set-cookie\" |

**Returns:** string[] \| undefined

▸ **header**(`name`: string): string \| undefined

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[header](_middleware_.expressrequestwithpaymentresult.md#header)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:243_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `name` | string |

**Returns:** string \| undefined

---

### is

▸ **is**(`type`: string \| string[]): string \| false \| null

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[is](_middleware_.expressrequestwithpaymentresult.md#is)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:380_

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:

     // With Content-Type: text/html; charset=utf-8
     req.is('html');
     req.is('text/html');
     req.is('text/*');
     // => true

     // When Content-Type is application/json
     req.is('json');
     req.is('application/json');
     req.is('application/*');
     // => true

     req.is('html');
     // => false

#### Parameters:

| Name   | Type               |
| ------ | ------------------ |
| `type` | string \| string[] |

**Returns:** string \| false \| null

---

### isPaused

▸ **isPaused**(): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[isPaused](_middleware_.expressrequestwithpaymentresult.md#ispaused)_

_Defined in node_modules/@types/node/stream.d.ts:42_

**Returns:** boolean

---

### listenerCount

▸ **listenerCount**(`event`: string \| symbol): number

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[listenerCount](_middleware_.expressrequestwithpaymentresult.md#listenercount)_

_Defined in node_modules/@types/node/events.d.ts:73_

#### Parameters:

| Name    | Type             |
| ------- | ---------------- |
| `event` | string \| symbol |

**Returns:** number

---

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[listeners](_middleware_.expressrequestwithpaymentresult.md#listeners)_

_Defined in node_modules/@types/node/events.d.ts:70_

#### Parameters:

| Name    | Type             |
| ------- | ---------------- |
| `event` | string \| symbol |

**Returns:** Function[]

---

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[off](_middleware_.expressrequestwithpaymentresult.md#off)_

_Defined in node_modules/@types/node/events.d.ts:66_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### on

▸ **on**(`event`: \"close\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:79_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"close\"  |
| `listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"data\", `listener`: (chunk: any) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:80_

#### Parameters:

| Name       | Type                 |
| ---------- | -------------------- |
| `event`    | \"data\"             |
| `listener` | (chunk: any) => void |

**Returns:** this

▸ **on**(`event`: \"end\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:81_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"end\"    |
| `listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"error\", `listener`: (err: [Error](../classes/_client_.paygateerror.md#error)) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:82_

#### Parameters:

| Name       | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `event`    | \"error\"                                                         |
| `listener` | (err: [Error](../classes/_client_.paygateerror.md#error)) => void |

**Returns:** this

▸ **on**(`event`: \"pause\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:83_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"pause\"  |
| `listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"readable\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:84_

#### Parameters:

| Name       | Type         |
| ---------- | ------------ |
| `event`    | \"readable\" |
| `listener` | () => void   |

**Returns:** this

▸ **on**(`event`: \"resume\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:85_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"resume\" |
| `listener` | () => void |

**Returns:** this

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[on](_middleware_.expressrequestwithpaymentresult.md#on)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:86_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### once

▸ **once**(`event`: \"close\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:88_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"close\"  |
| `listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"data\", `listener`: (chunk: any) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:89_

#### Parameters:

| Name       | Type                 |
| ---------- | -------------------- |
| `event`    | \"data\"             |
| `listener` | (chunk: any) => void |

**Returns:** this

▸ **once**(`event`: \"end\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:90_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"end\"    |
| `listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"error\", `listener`: (err: [Error](../classes/_client_.paygateerror.md#error)) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:91_

#### Parameters:

| Name       | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `event`    | \"error\"                                                         |
| `listener` | (err: [Error](../classes/_client_.paygateerror.md#error)) => void |

**Returns:** this

▸ **once**(`event`: \"pause\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:92_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"pause\"  |
| `listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"readable\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:93_

#### Parameters:

| Name       | Type         |
| ---------- | ------------ |
| `event`    | \"readable\" |
| `listener` | () => void   |

**Returns:** this

▸ **once**(`event`: \"resume\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:94_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"resume\" |
| `listener` | () => void |

**Returns:** this

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[once](_middleware_.expressrequestwithpaymentresult.md#once)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:95_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### param

▸ **param**(`name`: string, `defaultValue?`: any): string

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[param](_middleware_.expressrequestwithpaymentresult.md#param)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:357_

**`deprecated`** since 4.11 Use either req.params, req.body or req.query, as applicable.

Return the value of param `name` when present or `defaultValue`.

- Checks route placeholders, ex: _/user/:id_
- Checks body params, ex: id=12, {"id":12}
- Checks query string params, ex: ?id=12

To utilize request bodies, `req.body`
should be an object. This can be done by using
the `connect.bodyParser()` middleware.

#### Parameters:

| Name            | Type   |
| --------------- | ------ |
| `name`          | string |
| `defaultValue?` | any    |

**Returns:** string

---

### pause

▸ **pause**(): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[pause](_middleware_.expressrequestwithpaymentresult.md#pause)_

_Defined in node_modules/@types/node/stream.d.ts:40_

**Returns:** this

---

### pipe

▸ **pipe**\<T>(`destination`: T, `options?`: { end?: boolean }): T

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[pipe](_middleware_.expressrequestwithpaymentresult.md#pipe)_

_Defined in node_modules/@types/node/stream.d.ts:5_

#### Type parameters:

| Name | Type           |
| ---- | -------------- |
| `T`  | WritableStream |

#### Parameters:

| Name          | Type              |
| ------------- | ----------------- |
| `destination` | T                 |
| `options?`    | { end?: boolean } |

**Returns:** T

---

### prependListener

▸ **prependListener**(`event`: \"close\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:97_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"close\"  |
| `listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:98_

#### Parameters:

| Name       | Type                 |
| ---------- | -------------------- |
| `event`    | \"data\"             |
| `listener` | (chunk: any) => void |

**Returns:** this

▸ **prependListener**(`event`: \"end\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:99_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"end\"    |
| `listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"error\", `listener`: (err: [Error](../classes/_client_.paygateerror.md#error)) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:100_

#### Parameters:

| Name       | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `event`    | \"error\"                                                         |
| `listener` | (err: [Error](../classes/_client_.paygateerror.md#error)) => void |

**Returns:** this

▸ **prependListener**(`event`: \"pause\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:101_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"pause\"  |
| `listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"readable\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:102_

#### Parameters:

| Name       | Type         |
| ---------- | ------------ |
| `event`    | \"readable\" |
| `listener` | () => void   |

**Returns:** this

▸ **prependListener**(`event`: \"resume\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:103_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"resume\" |
| `listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependListener](_middleware_.expressrequestwithpaymentresult.md#prependlistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:104_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### prependOnceListener

▸ **prependOnceListener**(`event`: \"close\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:106_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"close\"  |
| `listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:107_

#### Parameters:

| Name       | Type                 |
| ---------- | -------------------- |
| `event`    | \"data\"             |
| `listener` | (chunk: any) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"end\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:108_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"end\"    |
| `listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"error\", `listener`: (err: [Error](../classes/_client_.paygateerror.md#error)) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:109_

#### Parameters:

| Name       | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `event`    | \"error\"                                                         |
| `listener` | (err: [Error](../classes/_client_.paygateerror.md#error)) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"pause\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:110_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"pause\"  |
| `listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"readable\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:111_

#### Parameters:

| Name       | Type         |
| ---------- | ------------ |
| `event`    | \"readable\" |
| `listener` | () => void   |

**Returns:** this

▸ **prependOnceListener**(`event`: \"resume\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:112_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"resume\" |
| `listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[prependOnceListener](_middleware_.expressrequestwithpaymentresult.md#prependoncelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:113_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### push

▸ **push**(`chunk`: any, `encoding?`: BufferEncoding): boolean

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[push](_middleware_.expressrequestwithpaymentresult.md#push)_

_Defined in node_modules/@types/node/stream.d.ts:46_

#### Parameters:

| Name        | Type           |
| ----------- | -------------- |
| `chunk`     | any            |
| `encoding?` | BufferEncoding |

**Returns:** boolean

---

### range

▸ **range**(`size`: number, `options?`: RangeParserOptions): RangeParserRanges \| RangeParserResult \| undefined

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[range](_middleware_.expressrequestwithpaymentresult.md#range)_

_Defined in node_modules/@types/express-serve-static-core/index.d.ts:336_

Parse Range header field, capping to the given `size`.

Unspecified ranges such as "0-" require knowledge of your resource length. In
the case of a byte range this is of course the total number of bytes.
If the Range header field is not given `undefined` is returned.
If the Range header field is given, return value is a result of range-parser.
See more ./types/range-parser/index.d.ts

NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
should respond with 4 users when available, not 3.

#### Parameters:

| Name       | Type               |
| ---------- | ------------------ |
| `size`     | number             |
| `options?` | RangeParserOptions |

**Returns:** RangeParserRanges \| RangeParserResult \| undefined

---

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[rawListeners](_middleware_.expressrequestwithpaymentresult.md#rawlisteners)_

_Defined in node_modules/@types/node/events.d.ts:71_

#### Parameters:

| Name    | Type             |
| ------- | ---------------- |
| `event` | string \| symbol |

**Returns:** Function[]

---

### read

▸ **read**(`size?`: number): any

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[read](_middleware_.expressrequestwithpaymentresult.md#read)_

_Defined in node_modules/@types/node/stream.d.ts:38_

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| `size?` | number |

**Returns:** any

---

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeAllListeners](_middleware_.expressrequestwithpaymentresult.md#removealllisteners)_

_Defined in node_modules/@types/node/events.d.ts:67_

#### Parameters:

| Name     | Type             |
| -------- | ---------------- |
| `event?` | string \| symbol |

**Returns:** this

---

### removeListener

▸ **removeListener**(`event`: \"close\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:115_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"close\"  |
| `listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:116_

#### Parameters:

| Name       | Type                 |
| ---------- | -------------------- |
| `event`    | \"data\"             |
| `listener` | (chunk: any) => void |

**Returns:** this

▸ **removeListener**(`event`: \"end\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:117_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"end\"    |
| `listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"error\", `listener`: (err: [Error](../classes/_client_.paygateerror.md#error)) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:118_

#### Parameters:

| Name       | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `event`    | \"error\"                                                         |
| `listener` | (err: [Error](../classes/_client_.paygateerror.md#error)) => void |

**Returns:** this

▸ **removeListener**(`event`: \"pause\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:119_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"pause\"  |
| `listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"readable\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:120_

#### Parameters:

| Name       | Type         |
| ---------- | ------------ |
| `event`    | \"readable\" |
| `listener` | () => void   |

**Returns:** this

▸ **removeListener**(`event`: \"resume\", `listener`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:121_

#### Parameters:

| Name       | Type       |
| ---------- | ---------- |
| `event`    | \"resume\" |
| `listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[removeListener](_middleware_.expressrequestwithpaymentresult.md#removelistener)_

_Overrides void_

_Defined in node_modules/@types/node/stream.d.ts:122_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### resume

▸ **resume**(): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[resume](_middleware_.expressrequestwithpaymentresult.md#resume)_

_Defined in node_modules/@types/node/stream.d.ts:41_

**Returns:** this

---

### setEncoding

▸ **setEncoding**(`encoding`: BufferEncoding): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[setEncoding](_middleware_.expressrequestwithpaymentresult.md#setencoding)_

_Defined in node_modules/@types/node/stream.d.ts:39_

#### Parameters:

| Name       | Type           |
| ---------- | -------------- |
| `encoding` | BufferEncoding |

**Returns:** this

---

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[setMaxListeners](_middleware_.expressrequestwithpaymentresult.md#setmaxlisteners)_

_Defined in node_modules/@types/node/events.d.ts:68_

#### Parameters:

| Name | Type   |
| ---- | ------ |
| `n`  | number |

**Returns:** this

---

### setTimeout

▸ **setTimeout**(`msecs`: number, `callback?`: () => void): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[setTimeout](_middleware_.expressrequestwithpaymentresult.md#settimeout)_

_Defined in node_modules/@types/node/http.d.ts:327_

#### Parameters:

| Name        | Type       |
| ----------- | ---------- |
| `msecs`     | number     |
| `callback?` | () => void |

**Returns:** this

---

### unpipe

▸ **unpipe**(`destination?`: WritableStream): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[unpipe](_middleware_.expressrequestwithpaymentresult.md#unpipe)_

_Defined in node_modules/@types/node/stream.d.ts:43_

#### Parameters:

| Name           | Type           |
| -------------- | -------------- |
| `destination?` | WritableStream |

**Returns:** this

---

### unshift

▸ **unshift**(`chunk`: any, `encoding?`: BufferEncoding): void

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[unshift](_middleware_.expressrequestwithpaymentresult.md#unshift)_

_Defined in node_modules/@types/node/stream.d.ts:44_

#### Parameters:

| Name        | Type           |
| ----------- | -------------- |
| `chunk`     | any            |
| `encoding?` | BufferEncoding |

**Returns:** void

---

### wrap

▸ **wrap**(`oldStream`: ReadableStream): this

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[wrap](_middleware_.expressrequestwithpaymentresult.md#wrap)_

_Defined in node_modules/@types/node/stream.d.ts:45_

#### Parameters:

| Name        | Type           |
| ----------- | -------------- |
| `oldStream` | ReadableStream |

**Returns:** this

---

### from

▸ `Static`**from**(`iterable`: Iterable\<any> \| AsyncIterable\<any>, `options?`: ReadableOptions): Readable

_Inherited from [ExpressRequestWithPaymentResult](_middleware_.expressrequestwithpaymentresult.md).[from](_middleware_.expressrequestwithpaymentresult.md#from)_

_Defined in node_modules/@types/node/stream.d.ts:26_

A utility method for creating Readable Streams out of iterators.

#### Parameters:

| Name       | Type                                  |
| ---------- | ------------------------------------- |
| `iterable` | Iterable\<any> \| AsyncIterable\<any> |
| `options?` | ReadableOptions                       |

**Returns:** Readable

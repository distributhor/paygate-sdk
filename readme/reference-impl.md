In addition to the above, there is also a reference implementation available under the `impl` folder. It consists of an ExpressJS backend that exposes endpoints via the middleware functions (which in turn uses the TS/JS API client), and a very simple frontend with which to test payments. It should demonstrate how to use these components in your own project. The reference implementation can run in your local development environment in only a few easy steps.

### Ngrok Token

In order to run the reference implementation locally, you will need to have an account with Ngrok https://ngrok.com/. A basic account is free and quick to set up. Ngrok, if you don't already know, is a service that can make your local development server available on a public URL via a secure tunnel. This is needed because PayGate needs to return to a URL that is publically available, after processing a payment. So we use Ngrok to expose the frontend app to the web.

Once you have an Ngrok authentication token, copy the file `impl/proxy/.env.sample` to `impl/proxy/.env` and replace the fake value with your authentication token. This is all that will be required to configure the tunelling environment.

### PayGate Credentials

The backend server implementation needs to know which PayGate credentials to use for testing. Copy the file `impl/server/.env.sample` to `impl/server.env`. It is already configured with the default PayGate test credentials, so no further action is needed. But if you wanted to test with different credentials, you may update them in this file.

### Running the reference implementation locally

If you have an Ngrok auth token and PayGate credentials configured, then you can simply run `yarn install` and `yarn develop` in each of the folders `impl/proxy`, `impl/server` and `impl/app`, and the proxy needs to be the first one to run. This (the fact that 3 different instance are running in 3 consoles) may be improved later to allow for a somewhat better development experience.

Once they are all up and running, navigate to http://localhost:8000 to test payments.

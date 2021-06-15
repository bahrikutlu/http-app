import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";
import App from "../App";

function init() {
    Sentry.init({
      dsn: "https://77789bf564fe4735bb1cf0382d4c10c9@o851782.ingest.sentry.io/5818630",
      release: "http-app@1.00",
      integrations: [new Integrations.BrowserTracing()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
    Sentry.withErrorBoundary(App, { fallback: "an error has occurred" });
}

function log(error) {
    Sentry.captureException(error)
}

export default {
    init, log
}
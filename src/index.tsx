import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store.ts";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Auth0Provider
        domain={`${process.env.VITE_APP_DOMAIN}`}
        clientId={`${process.env.VITE_APP_CLIENTID}`}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/callback`,
          audience: process.env.VITE_APP_AUDIENCE,
          scope: process.env.VITE_APP_SCOPE
        }}
      >
        <App />
      </Auth0Provider>
    </PersistGate>
  </Provider>
);

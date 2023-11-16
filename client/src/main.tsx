import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store/store";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/global.scss";
import "./assets/styles/normalize.scss";
import "./assets/styles/nullstyles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

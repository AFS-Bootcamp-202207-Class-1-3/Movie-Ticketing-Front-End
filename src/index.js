import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./public/store";
import GlobalRoutes from "./routes/GlobalRoutes";
import { Provider } from "react-redux";
import storageUtils from './utils/storageUtils'
import memoryUtils from  './utils/memoryUtils'

const user = storageUtils.getUser();
memoryUtils.user = user;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalRoutes />
  </Provider>
);

reportWebVitals();

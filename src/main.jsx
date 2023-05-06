import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
// import { ThemeConfig } from "./themes/themeConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ConfigProvider theme={ThemeConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ConfigProvider>
);
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme.ts";
import GlobalFont from "./styles/GlobalFont.ts";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu.tsx";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalFont />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
          <Menu />
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  </>
);

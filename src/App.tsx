import { AppRoutes } from "./routes/AppRoutes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/theme/DefaultTheme";
import { store } from "./store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack"; //npm install notistack

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <AppRoutes />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

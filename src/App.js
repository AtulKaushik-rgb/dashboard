import { lazy, Suspense } from "react";
import AppBar from "./components/appbar";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
const Body = lazy(() => import("./components/body"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Suspense fallback={<div></div>}>
        <Body/>
        </Suspense>
    </ThemeProvider>
  );
}

export default App;

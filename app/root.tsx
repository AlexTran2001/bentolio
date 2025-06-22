import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import '@fontsource/playfair-display';
import '@fontsource/lato';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import ErrorPage from "./error/error";
import LayoutComponent from "./components/layout";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (<ThemeProvider theme={theme}>
    <CssBaseline />
    <LayoutComponent />
    <Outlet />
  </ThemeProvider>);
}

export function ErrorBoundary() {


  return (
    <>
      <Layout>
        <ErrorPage />
      </Layout>
    </>
  );
}

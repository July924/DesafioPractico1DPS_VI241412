"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="es">
        <body>{children}</body>
      </html>
    </Provider>
  );
}

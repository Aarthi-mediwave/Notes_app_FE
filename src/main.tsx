import React from "react";
import ReactDOM from "react-dom/client";
import { AppNavigator } from "./AppNavigation/Navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppNavigator />
  </React.StrictMode>
);

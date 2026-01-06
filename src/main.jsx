import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./pages/AppRoutes";
import store from "./store";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="mx-auto container">
        <AppRoutes />
        <Toaster />
      </div>
    </Provider>
  </StrictMode>
);

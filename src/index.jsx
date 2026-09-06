import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient({
  // defaultOptions : {
  //   queries : {
      
  //     staleTime : 3000,
  //     gcTime : 5000,
  //     retry : true

  //   }
  // }
})
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-

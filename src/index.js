import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";

import RecoveryPage from "./routes/RecoveryPage";
import CloudPage from "./routes/CloudPage";
import ContactPage from "./routes/ContactPage";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Recovery" element={<RecoveryPage />} />
      <Route path="/Cloud" element={<CloudPage />} />
      <Route path="/Contact" element={<ContactPage />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);

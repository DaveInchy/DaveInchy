import React from "react";
import WebVitals from "./vitals";
import { createRoot } from "react-dom/client";

export const mountApp = (Component) => createRoot(document.querySelector(`main#container`)).render(<Component/>);
export const mountComponent = (Component, QuerySelector) => createRoot(document.querySelector(`${QuerySelector}`)).render(<Component/>);
export const reportWebVitals = () => WebVitals();
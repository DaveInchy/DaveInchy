import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import WebVitals from "./vitals";

export function mountRoot(Component)
{
    ReactDOM.createRoot(document.querySelector(`main#container`)).render(<Component/>);
    return;
}

export function mountComponent(Component, Selector = `main#container`)
{
    ReactDOM.createRoot(document.querySelector(`${Selector}`)).render(<Component/>);
    return;
}

export const reportWebVitals = () => WebVitals();
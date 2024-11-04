import ReactDOM from "react-dom/client";
import App, { AppProps } from "./App"
import { normalizeAttribute } from "./utils";
import React from "react";
class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes<AppProps>();
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<React.StrictMode><App {...props} /></React.StrictMode>);
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }
    console.log(props);
    return props as T;
  }
}

export default WebComponent;
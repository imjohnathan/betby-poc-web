import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ReactDOM from "react-dom/client";
import App, { AppProps } from "./App"
import React from "react";
import indexStyles from "@/index.scss?inline";
import appStyles from "@/App.scss?inline";

@customElement("betby-component")
export class BetbyComponent extends LitElement {
    static styles = [css`
    :host {
      display: inline-block;
      min-width: 4em;
      text-align: center;
      padding: 0.2em;
      margin: 0.2em 0.1em;
    }
    `, unsafeCSS(indexStyles), unsafeCSS(appStyles)];

    @property() username?: string = '';
    @property({ attribute: 'should-display-mentions', type: Boolean }) shouldDisplayMentions?: boolean = false;

    render() {
        const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
        const props: AppProps = {
            username: this.username ?? "",
            shouldDisplayMentions: this.shouldDisplayMentions
        }
        return root.render(<React.StrictMode><App {...props} /></React.StrictMode>);
    }

}

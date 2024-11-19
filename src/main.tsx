import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ReactDOM from "react-dom/client";
import App, { AppProps } from "./App"
import React from "react";
import mainCSS from "./index.css?inline";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

@customElement("betby-component")
export class BetbyComponent extends LitElement {
    static styles = [css`
    :host {
      display: inline-block;
      min-width: 4em;
      text-align: center;
      padding: 0.2em;
      margin: 0.2em 0.1em;
    }`, unsafeCSS(mainCSS)];

    @property() username?: string = '';
    @property({ attribute: 'should-display-mentions', type: Boolean }) shouldDisplayMentions?: boolean = false;

    render() {
        const cache = createCache({
            key: 'css',
            prepend: true,
            container: this.shadowRoot as ShadowRoot,
        });
        const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
        const props: AppProps = {
            username: this.username ?? "",
            shouldDisplayMentions: this.shouldDisplayMentions
        }
        return root.render(<React.StrictMode>
            <CacheProvider value={cache}>
                <App {...props} />
            </CacheProvider>
        </React.StrictMode>);
    }

}

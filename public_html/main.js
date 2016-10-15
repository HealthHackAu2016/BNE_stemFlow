
import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.js';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>
    , document.getElementById('main')
)

if (module.hot) {
// 1) module.hot = true when hot-reload is used
    module.hot.accept('./app.js', () => {
    // 2) module.hot.accept monitors changes to 'root' component
        const NextApp = require('./app.js').default;
        // 3) Reload component as prior component is a cached copy
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>
            , document.getElementById('main')
            // 4) Rerender root component wrapped in <AppContainer/>
        )
    })
}

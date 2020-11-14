import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import TodoProvider from "./infrastructure/store/TodoStore";
import reportWebVitals from "./reportWebVitals";
import { TodoStoreProvider } from "./stores/Todo";

ReactDOM.render(
    <React.StrictMode>
        <TodoStoreProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </TodoStoreProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();

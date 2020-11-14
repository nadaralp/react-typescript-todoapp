import { observer } from "mobx-react";
import React from "react";
import TestProvider from "../../infrastructure/store/TestStore";
import Todo from "../Todo/Todo";
import "./App.scss";

const App = observer(() => {
    return (
        <TestProvider>
            <div style={{ paddingTop: "10%" }} className="App">
                <Todo />
            </div>
        </TestProvider>
    );
})

export default App;

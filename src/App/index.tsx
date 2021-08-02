import React, { FC } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BatchState from "../pages/BatchState";
const App: FC = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/batchstate">BatchState</Link>
                </li>
            </ul>
            <Route path="/batchstate" component={BatchState} />
        </Router>
    );
};

export default App;

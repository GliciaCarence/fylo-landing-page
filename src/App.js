import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import ReviewPage from "./components/reviewPage";
import Header from "./components/header/";
import LoginForm from "./components/authentication/loginForm";
import PrivateRoute from "./components/authentication/privateRoute";

const Router = (props) => {
    return (
        <BrowserRouter>
            <div className="jumbotron">
                <Header />
                <div className="container-fluid">
                <Switch>
                    <PrivateRoute path="/points/:point_id" component={ReviewPage} />
                    <Route path="/login" component={LoginForm} />  {/* New route */}
                    <Route exact path="/" component={App} />
                    <Redirect from="*" to="/" />
                </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<Router />, document.getElementById("root"));

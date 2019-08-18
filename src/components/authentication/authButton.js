import Authentication from "../../util/authentication";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const AuthButton = props => {
    const { history } = props;
    return Authentication.isAuthenticated ? (
        <Fragment>
            {`${Authentication.username} `}
            <button
                onClick={() => {
                    Authentication.signout(() => history.push("/"));
                }}
            >
                Sign out
            </button>
        </Fragment>
    ) : (
        <button
            onClick={() => {
                history.push("/login");
            }}
        >
            Login
        </button>
    );
};

export default withRouter(AuthButton);
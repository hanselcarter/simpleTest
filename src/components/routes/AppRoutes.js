import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import App from "Components/App";
import PropTypes from "prop-types";

const AppRouter = ({ history }) => (
  <>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </>
);

AppRouter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AppRouter;

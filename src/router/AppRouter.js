import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { useDispatch } from "react-redux";
import { startChecking } from "../actions/auth";
import { useSelector } from "react-redux";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(startChecking());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startChecking]);
  if (checking) {
    return <h5>Loading...</h5>;
  }
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={!!uid}
        />
        <PrivateRoute
          exact
          path="/"
          component={CalendarScreen}
          isAuthenticated={!!uid}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

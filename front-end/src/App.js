import "./App.css";
import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import User from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import UpdatePlace from "./places/pages/UpdatePlace";
import "./shared/components/Navigation/MainHeader.css";
import UserPlaces from "./places/pages/UserPlaces";
import Auth from "./user/pages/Auth";

import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = useCallback(() => {
    setisLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setisLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <User />
            </Route>
            <Route path="/:userId/places">
              <UserPlaces />
            </Route>
            <Route path="/places/new">
              <NewPlace />
            </Route>
            <Route path="/places/:placeId">
              <UpdatePlace />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            {/* <Redirect to="/" /> */}
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

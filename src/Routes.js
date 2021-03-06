import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import NewNote from "./containers/NewNote/NewNote";
import Notes from "./containers/Notes/Notes";
import Settings from "./containers/Settings/Settings";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      <Route exct path="/notes/new">
        <NewNote />
      </Route>
      <Route exact path="/notes/:id">
        <Notes />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

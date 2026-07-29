import { Route, Switch } from "wouter";

import { Login } from "@/features/auth/components/Login/Login";

export const Router = () => (
  <Switch>
    <Route path="/">
      <Login />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Switch>
);

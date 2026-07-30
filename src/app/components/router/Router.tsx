import { Route, Switch } from 'wouter'

import { Login } from '@/features/auth/components/Login/Login'
import { Home } from '@/features/auth/components/Home/Home'
export const Router = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Switch>
)

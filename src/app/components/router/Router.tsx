import { Route, Switch } from 'wouter'

import { Home } from '@/features/auth/components/Home/Home'
export const Router = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)

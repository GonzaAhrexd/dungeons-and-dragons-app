import { Redirect, Route, Switch } from 'wouter'

import { Home } from '@/features/auth/components/Home/Home'
import { Dashboard } from '@/features/dashboard/components/Dashboard/Dashboard'
import { IsAuthenticated } from '../guards/IsAuthenticated/IsAuthenticated'
import { MainLayout } from '@/shared/ui/MainLayout/MainLayout'
import { Campaigns } from '@/features/campaigns/components/Campaigns/Campaigns'
import { Profile } from '@/features/profile/components'
import { DashboardPlayer } from '@/features/dashboard/components/DashboardPlayer/components/DashboardPlayer'

export const Router = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/dashboard">
      <IsAuthenticated>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </IsAuthenticated>
    </Route>
    <Route path="/campaigns">
      <IsAuthenticated>
        <MainLayout>
          <Campaigns />
        </MainLayout>
      </IsAuthenticated>
    </Route>

    <Route path="/characters">
      <IsAuthenticated>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </IsAuthenticated>
    </Route>
    <Route path="/dashboardplayer">
      <IsAuthenticated>
        <MainLayout>
          <DashboardPlayer />
        </MainLayout>
      </IsAuthenticated>
    </Route>

    <Route path="/profile">
      <IsAuthenticated>
        <MainLayout>
          <Profile />
        </MainLayout>
      </IsAuthenticated>
    </Route>
    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
)

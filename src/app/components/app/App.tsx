import './App.css'
import { Router } from '../router/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="cmp-app">
        <Router />
      </div>
    </QueryClientProvider>
  )
}

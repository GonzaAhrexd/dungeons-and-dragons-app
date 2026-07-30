import type { ReactNode } from 'react'
import { Navbar } from '../Navbar/Navbar'
import './MainLayout.css'
interface MainLayoutProps {
  children: ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="cmp-main-layout">
      <Navbar />
      <main className="main-content">{children}</main>
    </div>
  )
}

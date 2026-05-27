import { Outlet } from 'react-router'
import { Navigation } from './Navigation'

export function Root() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navigation />
      <Outlet />
    </div>
  )
}

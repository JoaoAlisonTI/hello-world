import { Banner } from '../Banner'
import { Outlet } from 'react-router-dom'

export function DefaultPage() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  )
}
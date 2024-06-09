import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration getKey={location => location.pathname} />
    </>
  )
}

export default Layout

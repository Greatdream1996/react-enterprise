import { Navigate } from 'react-router-dom'
import React from 'react'
const Login = React.lazy(() => import('../views/login'))
const Layout = React.lazy(() => import('../views/layout'))
const routes = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/layout',
    element: <Layout />
  }
]
export default routes

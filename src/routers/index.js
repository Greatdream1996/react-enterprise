import { Navigate } from 'react-router-dom'
import React from 'react'
const Login = React.lazy(() => import('../views/login'))
const Layout = React.lazy(() => import('../views/layout'))
const Redux = React.lazy(() => import('../views/redux'))
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
    element: <Layout />,
    children: [
      {
        path: '/layout/redux',
        element: <Redux />
      }
    ]
  }
]
export default routes

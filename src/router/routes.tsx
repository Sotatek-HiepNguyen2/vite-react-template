import { type RouteObject } from 'react-router-dom'
import { LoginPage } from './pages'

/**
 * Define the paths for the app
 */
export const PATHS = {
  login: '/',
}

/**
 * Define the routes for the app
 */
export const ROUTES: RouteObject[] = [
  {
    path: PATHS.login,
    element: <LoginPage />,
  },
]

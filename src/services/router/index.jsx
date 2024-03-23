import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.jsx';
import { lazy } from 'react';
import ProtectedRoute from '../../auth/protectedRoute.jsx';
const DashboardViews = lazy(() => import('../../views/DashboardViews.jsx'));
const LoginViews = lazy(() => import('../../views/LoginViews.jsx'));
const routes = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <DashboardViews />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginViews />,
  },
];
const router = createBrowserRouter(routes, {
  basename: '/',
  future: {
    v7_normalizeFormMethod: true,
  },
});

export default router;

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/useAuthListener';

import ProtectedRoute from './helpers/ProtectedRoute';

const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>

          <Switch>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>

            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />

            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.NOT_FOUND} component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App;

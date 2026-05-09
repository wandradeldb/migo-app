import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import MigoHelp from './pages/MigoHelp';
import MigoMarket from './pages/MigoMarket';
import MigoJobs from './pages/MigoJobs';
import MigoStay from './pages/MigoStay';

function RequireOnboarding({ children }) {
  const onboarded = localStorage.getItem('migo_onboarded');
  if (!onboarded) return <Navigate to="/onboarding" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/home"
          element={
            <RequireOnboarding>
              <Home />
            </RequireOnboarding>
          }
        />
        <Route
          path="/help"
          element={
            <RequireOnboarding>
              <MigoHelp />
            </RequireOnboarding>
          }
        />
        <Route
          path="/help/:id"
          element={
            <RequireOnboarding>
              <MigoHelp />
            </RequireOnboarding>
          }
        />
        <Route
          path="/market"
          element={
            <RequireOnboarding>
              <MigoMarket />
            </RequireOnboarding>
          }
        />
        <Route
          path="/market/:id"
          element={
            <RequireOnboarding>
              <MigoMarket />
            </RequireOnboarding>
          }
        />
        <Route
          path="/jobs"
          element={
            <RequireOnboarding>
              <MigoJobs />
            </RequireOnboarding>
          }
        />
        <Route
          path="/stay"
          element={
            <RequireOnboarding>
              <MigoStay />
            </RequireOnboarding>
          }
        />
        <Route
          path="/stay/:id"
          element={
            <RequireOnboarding>
              <MigoStay />
            </RequireOnboarding>
          }
        />
        {/* Default — redirect to onboarding or home */}
        <Route
          path="*"
          element={
            localStorage.getItem('migo_onboarded')
              ? <Navigate to="/home" replace />
              : <Navigate to="/onboarding" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

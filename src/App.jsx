import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import ProblemsPage from './pages/Problems';
import DashboardHome from './features/dashboard home/DashboardHome';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="problems" element={<ProblemsPage />} />
      </Route>
    </Routes>
  );
};

export default App;

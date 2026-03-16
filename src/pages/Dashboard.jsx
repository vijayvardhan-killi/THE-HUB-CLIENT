import Shell from '@/components/common/dashboard/Shell';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '@/components/common/dashboard/layout';
import ProblemsPage from './Problems';

const Dashboard = () => {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
};

export default Dashboard;

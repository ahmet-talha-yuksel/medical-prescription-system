import { Outlet } from 'react-router';
import Header from '../common/Header.jsx';
import Sidebar from '../common/Sidebar.jsx';

// All links are visible during setup. Role-based navigation is future work.
const navigationItems = [
  { path: '/admin', label: 'Admin dashboard' },
  { path: '/admin/users', label: 'User management' },
  { path: '/doctor', label: 'Doctor dashboard' },
  { path: '/doctor/patients', label: 'Patients' },
  { path: '/doctor/prescriptions', label: 'Prescriptions' },
  { path: '/doctor/prescriptions/create', label: 'Create prescription' },
  { path: '/pharmacist', label: 'Pharmacist dashboard' },
  { path: '/pharmacist/inventory', label: 'Medicine inventory' },
  { path: '/pharmacist/fulfillment', label: 'Prescription fulfillment' },
];

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <div className="dashboard-layout">
        <Sidebar items={navigationItems} />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

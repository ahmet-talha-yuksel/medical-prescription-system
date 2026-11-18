import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import Login from '../pages/auth/Login.jsx';
import Register from '../pages/auth/Register.jsx';
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import UserManagement from '../pages/admin/UserManagement.jsx';
import DoctorDashboard from '../pages/doctor/DoctorDashboard.jsx';
import PatientList from '../pages/doctor/PatientList.jsx';
import PrescriptionList from '../pages/doctor/PrescriptionList.jsx';
import CreatePrescription from '../pages/doctor/CreatePrescription.jsx';
import PharmacistDashboard from '../pages/pharmacist/PharmacistDashboard.jsx';
import MedicineInventory from '../pages/pharmacist/MedicineInventory.jsx';
import PrescriptionFulfillment from '../pages/pharmacist/PrescriptionFulfillment.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/doctor/patients" element={<PatientList />} />
            <Route path="/doctor/prescriptions" element={<PrescriptionList />} />
            <Route path="/doctor/prescriptions/create" element={<CreatePrescription />} />
            <Route path="/pharmacist" element={<PharmacistDashboard />} />
            <Route path="/pharmacist/inventory" element={<MedicineInventory />} />
            <Route path="/pharmacist/fulfillment" element={<PrescriptionFulfillment />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

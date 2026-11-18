import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">Medical Prescription System</Link>
      <nav className="header-links" aria-label="Main navigation">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/doctor">Doctor</Link>
        <Link to="/pharmacist">Pharmacist</Link>
      </nav>
    </header>
  );
}

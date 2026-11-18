import { Link } from 'react-router';
import Header from '../../components/common/Header.jsx';
import '../../styles/auth.css';

export default function Register() {
  return (
    <>
      <Header />
      <main className="auth-page">
        <h1>Register</h1>
        <p>Registration page placeholder.</p>
        <Link to="/login">Go to login</Link>
      </main>
    </>
  );
}

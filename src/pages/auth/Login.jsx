import { Link } from 'react-router';
import Header from '../../components/common/Header.jsx';
import '../../styles/auth.css';

export default function Login() {
  return (
    <>
      <Header />
      <main className="auth-page">
        <h1>Login</h1>
        <p>Login page placeholder. Authentication will be added later.</p>
        <Link to="/register">Go to registration</Link>
      </main>
    </>
  );
}

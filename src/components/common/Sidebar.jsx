import { NavLink } from 'react-router';

export default function Sidebar({ items = [] }) {
  return (
    <aside className="sidebar">
      <nav aria-label="Dashboard navigation">
        <ul>
          {items.map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path} end>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

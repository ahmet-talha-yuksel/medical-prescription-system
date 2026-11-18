export default function LoadingSpinner({ label = 'Loading...' }) {
  return <p className="loading-spinner" role="status">{label}</p>;
}

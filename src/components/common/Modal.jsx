// Placeholder only; dialog interaction will be added when a feature needs it.
export default function Modal({ isOpen = false, title = 'Modal', children }) {
  if (!isOpen) return null;

  return (
    <dialog open className="modal" aria-label={title}>
      <h2>{title}</h2>
      {children}
    </dialog>
  );
}

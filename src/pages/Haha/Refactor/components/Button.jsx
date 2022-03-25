export default function Button({ onClick, text }) {
  return <button onClick={onClick}>{text || 'add'}</button>;
}

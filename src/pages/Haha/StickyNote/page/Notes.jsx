import Note from '../components/Note';

export default function Notes({ notes }) {
  return (
    <>
      {notes.map((task) => (
        <Note />
      ))}
    </>
  );
}

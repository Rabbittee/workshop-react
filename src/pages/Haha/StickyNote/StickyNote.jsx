import NoteProvider from './model/NoteProvider';

export default function StickyNote() {
  return (
    <NoteProvider className="my-20 flex justify-center">
      <button className="space-x-10relative space-x-2 rounded-2xl border-2 py-5 px-2 shadow-md">
        <label>2</label>
        <span>New note</span>
      </button>
    </NoteProvider>
  );
}

export function List({ children }) {
  return (
    <div className="container mx-auto flex w-full max-w-lg flex-col items-center justify-center">
      <ul className="flex w-full flex-col">{children}</ul>
    </div>
  );
}

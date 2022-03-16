const DrawerGroup = ({ group, showGroupName, childs }) => {
  return (
    <div className="border-b py-3 pr-3 last:border-0">
      {showGroupName ? (
        <div className="mt-2 mb-4 w-full pl-5 text-xs text-gray-500">{group}</div>
      ) : (
        ''
      )}
      {childs.map((child) => {
        return (
          <label
            for="groupItem"
            className="block"
            key={`${group}-${child.name}`}
          >
            <div className="rounded-[0px_10px_10px_0px] p-3 pl-5 hover:bg-gray-100">
              <input type="radio" name="groupItem" className="sr-only" />
              {child.name}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default DrawerGroup;

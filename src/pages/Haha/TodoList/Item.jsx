        <button onClick={toggleDialog} className={`${basicClass} col-span-1 bg-red-400`}>
          <Icon logo="trash" size="25" />
          <label className="mx-2 text-white ">delete</label>
        </button>
        <Dialog show={showDialog} cancel={toggleDialog} confirm={handleDelete} />

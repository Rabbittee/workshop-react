function Button() {
  return (
    <button
      onClick={() => updateDataList(id, toggleTarget)}
      type={type}
      disabled={isDone}
    >
      {text}
    </button>
  )
}

export default Button;
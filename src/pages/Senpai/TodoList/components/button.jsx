function Button({text, method}) {
  return (
    <button onClick={() => method()}>{text}</button>
  )
}

export default Button;
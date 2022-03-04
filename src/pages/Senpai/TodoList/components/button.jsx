import clsx from "clsx";

export const Button = ({fn, message, customStyle,  ...args}) => {    
  return ( 
      <>
        <button
          type="submit"
          className={clsx(
            customStyle,
            'rounded-md min-h-min px-2 w-20',
            'border border-solid text-white bg-cyan-700'
          )}
          onClick={() => fn(...Object.values({...args}))}>
          {message}
        </button>
      </>
  )
}

export default Button;
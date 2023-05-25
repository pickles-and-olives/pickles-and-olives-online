export function PinkButton({ buttonText, action, disabled }) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className='m-1 whitespace-nowrap rounded-md border-2 border-themePink p-2 text-themePink ring-themePink/50 transition duration-500 ease-in-out hover:ring-2'
    >
      {buttonText}
    </button>
  );
}

export function YellowButton({ buttonText, action, disabled }) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className='m-1 w-1/2 whitespace-nowrap rounded-md border-2 border-themeYellow p-2 text-themeYellow ring-themeYellow/50 transition duration-500 ease-in-out hover:ring-2'
    >
      {buttonText}
    </button>
  );
}

export function GreenButton({ buttonText, action, disabled }) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className='m-1 w-1/2 whitespace-nowrap rounded-md border-2 border-themeGreen p-2 text-themeGreen ring-themeGreen/50 transition duration-500 ease-in-out hover:ring-2'
    >
      {buttonText}
    </button>
  );
}

export function BlueButton({ buttonText, action, disabled }) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className='m-1 whitespace-nowrap rounded-md border-2 border-themeBlue p-2 text-themeBlue ring-themeBlue/50 transition duration-500 ease-in-out hover:ring-2'
    >
      {buttonText}
    </button>
  );
}

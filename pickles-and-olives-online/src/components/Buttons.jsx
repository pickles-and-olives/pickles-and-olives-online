export function PinkButton({ buttonText, action, disabled }) {
    return (
      <button
        onClick={action}
        disabled={disabled}
        className='p-2 m-1 border-2 whitespace-nowrap w-1/2 rounded-md border-themePink text-themePink hover:ring-2 ring-themePink/50 transition duration-500 ease-in-out'
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
        className='p-2 m-1 border-2 whitespace-nowrap w-1/2 rounded-md border-themeYellow text-themeYellow hover:ring-2 ring-themeYellow/50 transition duration-500 ease-in-out'
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
        className='p-2 m-1 border-2 w-1/2 whitespace-nowrap rounded-md border-themeGreen text-themeGreen hover:ring-2 ring-themeGreen/50 transition duration-500 ease-in-out'
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
        className='p-2 m-1 border-2 whitespace-nowrap w-1/2 rounded-md border-themeBlue text-themeBlue hover:ring-2 ring-themeBlue/50 transition duration-500 ease-in-out'
      >
        {buttonText}
      </button>
    );
  }
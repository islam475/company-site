import './button.css'

function Button({text, onClick ,className=""}) {
  return (
    <>
    <button

    type='text' className={`btn ${className}`} onClick={onClick}
    >
        {text}
    </button>
    </>
)
}

export default Button
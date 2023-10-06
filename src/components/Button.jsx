import React from 'react'

const Button = (props) => {
  return (
    <div onClick={props.onClick} className="cursor-pointer flex items-center px-6 mr-2 h-12 textGrad border border-[#d2e353] rounded-full font-semibold tracking-wide transition duration-300 bg-[#53e3b3]  hover:bg-green-400">
      {props.text}
    </div>
  )
}

export default Button


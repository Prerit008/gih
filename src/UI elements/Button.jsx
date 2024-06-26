import React from 'react'

const Button = ({ title, styles }) => {
  return (
    <div className={`text-center glassmorphism font-extrabold text-[25px] font-mono cursor-pointer ${title === 'Resume' ? 'py-2' : null} flex p-4 items-center border-[1px] border-primary text-off_white rounded-md  max-w-fit hover:-translate-x-1 hover:-translate-y-1 duration-200 btn_hover_shadow sm:text-[25px] ${styles}`}>{title}</div>
  )
}

export default Button
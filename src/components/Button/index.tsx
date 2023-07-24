


import React from 'react'

type Props = {
    type:"primary" | "danger" | "success",
    primary?:boolean,
    danger?:boolean,
    success?:boolean,
    icon?:React.ReactNode,
    children?:React.ReactNode,
    onClick?:()=>void
}

const Button = ({type,primary,danger,success,icon,children,onClick}: Props) => {
    // Định nghĩa các màu tương ứng cho type
  const colorClass = type === 'primary' ? 'primary' :
  type === 'danger' ? 'danger' :
  type === 'success' ? 'success' : '';

  return <button
  onClick={onClick}
  className={`py-2 px-4 rounded ${colorClass}`}
  >
    {icon&&icon}
    {children}
  </button>
}

export default Button
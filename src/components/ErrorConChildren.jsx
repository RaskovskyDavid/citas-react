import React from 'react'

const ErrorConChildren = ({children}) => {
  return (
    <div className="bg-red-800 text-white font-bold mb-3 rounded-md">
            <p>{children}</p>
          </div>
  )
}

export default ErrorConChildren

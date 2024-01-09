import React from 'react'

const Button = ({ handleSubmission, title, color, backgroundColor, border }) => {
  return (
    <div className='button'>
        <button style={{color: `${color}`, backgroundColor: `${backgroundColor}`, border: `${border}`}} onClick={handleSubmission} type="button">{title}</button>
    </div>
  )
}

export default Button
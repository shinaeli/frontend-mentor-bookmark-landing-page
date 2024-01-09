import React from 'react'
import Button from './utilities/Button';

const Flexed = ({ flexHeader }) => {
  const { imgLocation, description, title, content, downButtons } = flexHeader;
  
  return (
    <div className="flex-content">
        <div className="content-img">
            <img className="img" src={imgLocation} alt={description} />
            <div className="fixed-bg"></div>
        </div>
        <div className="content">
            <h2>{title}</h2>
            <p>{content}</p>
            {downButtons.map(item => {
                    const { id, title, color, backgroundColor, border } = item;
                    return <Button key={id} title={title} color={color} backgroundColor={backgroundColor} border={border} />
            })}
        </div>
    </div>
  )
}

export default Flexed
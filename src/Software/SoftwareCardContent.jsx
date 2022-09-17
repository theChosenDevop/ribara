import React from 'react'

const SoftwareCardContent = ({icon,title,description}) => {
  return (
    <div className="swc-content">
        <h4>{icon}</h4>
        <div className="swc-ContentTitle">
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default SoftwareCardContent
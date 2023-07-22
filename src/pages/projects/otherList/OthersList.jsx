import React from 'react'
import "./othersList.scss"

function OthersList({id,title,active,setSelected}) {
  return (
    <li className={active ? "othersList active" : "othersList"} 
        onClick={() => setSelected(id)}>
            {title}
    </li>
  )
}

export default OthersList

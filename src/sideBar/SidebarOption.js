import React from 'react'
import "../styles/SidebarOption.css"
// stateless component #6

function SidebarOption({ active, text, Icon } ) {
  console.log("Hello from SidebarOption.js")

  return (

    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption


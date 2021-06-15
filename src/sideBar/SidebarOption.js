import React from 'react'
import "./SidebarOption.css"



function SidebarOption({ active, text, Icon, src} ) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      <Icon />
      {src}
      <h2>{text}</h2>
    </div>
  )
}
export default SidebarOption
import React from "react"
import { Link } from "gatsby"
import "./header1.css"

const Navigation = ({ MenuItems }) => {
  const menus = MenuItems.map(MenuItem => (
    <Link
      to={MenuItem.link}
      key={MenuItem.link}
      className="linkovi"
      activeStyle={{ color: "white" }}
    >
      {MenuItem.text}
    </Link>
  ))
  return (
    <div className="linksinheader">
      {menus}

      <button type="button" className="myButton2">
        PRIJAVA
      </button>
    </div>
  )
}

export default Navigation

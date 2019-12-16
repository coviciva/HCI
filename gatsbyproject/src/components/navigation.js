import React from "react"
import { Link } from "gatsby"
import "./header1.css"

const Navigation = ({MenuItems}) => {
    const menus = MenuItems.map(MenuItem => (
        
        <Link to={MenuItem.link} key={MenuItem.link} className="linkovi">{MenuItem.text}</Link>
        
    ))
    return <div className="linksinheader">{menus}</div>
}

export default Navigation
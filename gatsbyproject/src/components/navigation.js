import React from "react"
import { Link } from "gatsby"


const Navigation = ({MenuItems}) => {
    const menus = MenuItems.map(MenuItem => (
        
        <div className="linksinheader">
            <Link to={MenuItem.link} key={MenuItem.link}>{MenuItem.text}</Link>
        </div>
        
    ))
    return <div className="polozajelemenata">{menus}</div>
}

export default Navigation
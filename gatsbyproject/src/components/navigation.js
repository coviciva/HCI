import React from "react"
import { Link } from "gatsby"


const Navigation = ({MenuItems}) => {
    const menus = MenuItems.map(MenuItem => (
        <li key={MenuItem.link}>
            <Link to={MenuItem.link}>{MenuItem.text}</Link>
            
        </li>
    ))
    return <ul> {menus} </ul>
}

export default Navigation
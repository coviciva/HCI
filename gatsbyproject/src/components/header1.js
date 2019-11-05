import React from "react"
import Navigation from "../components/navigation"
import "./header1.css"

const MenuItems = [
    {
        text: "Naslovnica",
        link: "/"
    },
    {
        text: "Raspored",
        link: "/raspored"
    },
    {
        text: "Rezultati",
        link: "/rezultati"
    },
    {
        text: "Blog",
        link: "/blog"
    },
    {
        text: "O nama",
        link: "/about"
    }
]

const Header1 = props => {
    console.log(props)
    return (
        <div className="header">
            <Navigation MenuItems = {MenuItems}/>
            {props.children}
        </div>
    )
}

export default Header1
import React from "react"
import Navigation from "../components/navigation"
import "./header1.css"
import { useStaticQuery, graphql } from "gatsby"



const Header1 = props => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          MenuItems {
            link
            text
          }
        }
      }
    }
  `)

  //const {MenuItems} = data.site.siteMetadata, doli se u viticaste doda MenuItems

    console.log(props)
    return (
        <div className="header">
            <Navigation MenuItems = {data.site.siteMetadata.MenuItems}/>
            {props.children}
        </div>
    )
}

export default Header1
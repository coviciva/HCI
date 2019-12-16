import React from "react"
import Navigation from "../components/navigation"
import "./header1.css"
import { useStaticQuery, graphql } from "gatsby"
import LogoLink from "../components/logo"


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
        
        <LogoLink/>
        
        <div className="header-right">          
            <Navigation MenuItems = {data.site.siteMetadata.MenuItems}/>
            <button type="button" className="myButton">SIGN IN</button>
            <div className="hamburger">III</div>
        </div>
      </div>
      
      
        
    )
}

export default Header1
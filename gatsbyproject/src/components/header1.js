import React, { Component, useState } from "react"
import Navigation from "../components/navigation"
import "./header1.css"
import { useStaticQuery, graphql } from "gatsby"
import LogoLink from "../components/logo"
import IdentityModal from "react-netlify-identity-widget"
import {
  useIdentityContext,
  IdentityContextProvider,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import { Link } from "gatsby"

/* export function initNetlifyIdentity() {
  console.log("initNetlify called.")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true

  document.body.appendChild(script)
}
 */
/* function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) netlifyIdentity.open()
  else console.log("netlifyIdentity not defined")
} */

/* class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity()
  }

  render() {
    return <div></div>
  }
} */

const navSlider = () => {
  const nav = document.querySelector(".linksinheader")
  const burger = document.querySelector(".hamburger")

  nav.classList.toggle("linksinheader-active")
  burger.classList.toggle("toggle")
  //animate links
}

const Header1 = props => {
  const url = "https://sharp-shannon-7a933d.netlify.com/"
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
  const [showDialog, setShowDialog] = useState(false)
  return (
    <div className="header">
      <IdentityContextProvider url={url}>
        <LogoLink />

        {/* <NetlifyIdentity /> */}
        <div className="header-right">
          <Navigation MenuItems={data.site.siteMetadata.MenuItems} />

          <button
            type="button"
            className="myButton"
            onClick={() => setShowDialog(true)}

            /* onClick={() => {
            openNetlifyModal()
          }} */
          >
            PRIJAVA
          </button>
          <IdentityModal
            showDialog={showDialog}
            onCloseDialog={() => setShowDialog(false)}
          />
        </div>
        <div className="hamburger" onClick={() => navSlider()}>
          {/* <button className="menu-btn">MENU</button> */}
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </IdentityContextProvider>
    </div>
  )
}

export default Header1

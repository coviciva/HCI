import React, { Component } from "react"
import Navigation from "../components/navigation"
import "./header1.css"
import { useStaticQuery, graphql } from "gatsby"
import LogoLink from "../components/logo"

export function initNetlifyIdentity() {
  console.log("initNetlify called.")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true

  document.body.appendChild(script)
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) netlifyIdentity.open()
  else console.log("netlifyIdentity not defined")
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity()
  }

  render() {
    return <div></div>
  }
}

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
      <NetlifyIdentity />
      <LogoLink />

      <div className="header-right">
        <Navigation MenuItems={data.site.siteMetadata.MenuItems} />
        <button
          type="button"
          className="myButton"
          onClick={() => {
            openNetlifyModal()
          }}
        >
          LOG IN
        </button>
        <div className="hamburger">III</div>
      </div>
    </div>
  )
}

export default Header1

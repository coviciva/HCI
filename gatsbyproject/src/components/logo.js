import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.svg"

const LogoLink = () => (
    <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
      <img className="logoicon"
        alt ="logo"
        src={logo}
        sx={{
          height: "logo",
          width: "auto",
          
        }}
      />
    </Link>
  )

  export default LogoLink
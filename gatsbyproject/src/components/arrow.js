import React from "react"
import { Link } from "gatsby"
import arrow from "../assets/arrownew1.png"

const ArrowLink = () => (
  <Link to="/blog">
    <div>
      <img className="arrowicon" alt="arrow" src={arrow} />
    </div>
  </Link>
)

export default ArrowLink

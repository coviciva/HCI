import React from "react"
import { Link } from "gatsby"
import arrow from "../assets/arrow.svg"

const ArrowLink = () => (
  <Link to="/blog">
    <div>
      <img className="arrowicon" alt="arrow" src={arrow} />
    </div>
  </Link>
)

export default ArrowLink

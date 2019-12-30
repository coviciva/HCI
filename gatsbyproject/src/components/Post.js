import React from "react"
import { Link } from "gatsby"
import "./posts.css"
import Img from "gatsby-image"

const Post = ({ title, author, path, date, body, fluid }) => {
  return (
    <div className="Cards">
      <div className="CardBody">
        <Img className="card-image" fluid={fluid} />
        <div className="text-on-card">
          <div className="CardTitle">
            <Link to={path}>{title}</Link>
          </div>

          {body}
          <Link to={path} className="CardMore">
            Saznaj vise
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post

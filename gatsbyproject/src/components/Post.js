import React from "react"
import { Link } from "gatsby"
import "./posts.css"

const Post = ({ title, author, path, date, body }) => {
  return (
    <div className="Cards">
      <div className="CardBody">
        <div className="CardTitle">
          <Link to={path}>{title}</Link>
        </div>
        <div className="CardInfo">
          by {author}, {date}
        </div>
        {body}
        <Link to={path} className="CardMore">
          Saznaj vise
        </Link>
      </div>
    </div>
  )
}

export default Post

import React from "react"
import { Link } from "gatsby"
import "./posts.css"
import Img from "gatsby-image"

const slugify = function(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}

const Post = ({ title, author, slug, date, body, fluid, postimage, tags }) => {
  return (
    <div className="Cards">
      <div className="CardBody">
        <Img className="card-image" fluid={fluid} />
        <div className="text-on-card">
          <div className="CardTitle">
            <Link to={slug}>{title}</Link>
          </div>

          {body}
          <Link to={slug} className="CardMore">
            Saznaj više
          </Link>
          {/*}
          <ul className="tags">
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tags/${slugify(tag)}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
            */}
        </div>
      </div>
    </div>
  )
}

export default Post

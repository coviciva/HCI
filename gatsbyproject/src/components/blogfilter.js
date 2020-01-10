import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import dropdown from "../assets/dropdown.png"
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

const Filter = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  console.log(data.allMarkdownRemark.group.fieldValue)
  data.allMarkdownRemark.group.map(tag => console.log(tag.fieldValue))
  return (
    <div>
      <div className="dropdown">
        <div className="filtericona">
          <div className="dropbtn">Filtriraj objave:</div>
          <img src={dropdown} className="dropdownicon" />
        </div>

        <div className="dropdown-content">
          {data.allMarkdownRemark.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${slugify(tag.fieldValue)}`}>
                {tag.fieldValue}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Filter

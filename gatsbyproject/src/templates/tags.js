import React from "react"

import { Link } from "gatsby"
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
const Tags = ({ pageContext }) => {
  const { tags, totalCount } = pageContext
  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${slugify(tag)}`}>
              {tag}, {totalCount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags

import React from "react"

import { graphql } from "gatsby"
import Header1 from "../components/header1"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <Header1></Header1>
      <div className="blog-post">
        <h2>{frontmatter.title}</h2>
        <div className="datum">
          <span>{frontmatter.date}</span>
        </div>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="autor">
          <span>{frontmatter.author}</span>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MM DD YYYY")
        path
        title
      }
    }
  }
`

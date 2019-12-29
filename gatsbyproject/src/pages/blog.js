import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import Post from "../components/Post"

const Blog = () => (
  <div>
    <Header1>
      <SEO title="Blog" />
    </Header1>
    <h2>Blog</h2>
    <StaticQuery
      query={PagesQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.frontmatter.body}
              />
            ))}
          </div>
        )
      }}
    ></StaticQuery>
  </div>
)

const PagesQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM DD YYYY")
            author
            path
          }
        }
      }
    }
  }
`
export default Blog

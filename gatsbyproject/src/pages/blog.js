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

    <StaticQuery
      query={PagesQuery}
      render={data => {
        return (
          <div className="svi-postovi">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.frontmatter.body}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
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
            date(formatString: "YYYY MM DD")
            author
            path
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
export default Blog

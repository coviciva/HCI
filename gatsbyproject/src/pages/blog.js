import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import Post from "../components/Post"
import { Link } from "gatsby"

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
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.frontmatter.body}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                postfluid={node.frontmatter.postimage.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        )
      }}
    ></StaticQuery>
    <div className="ostale-stranice">
      <Link to="/blog">1</Link>
      <Link to="/blog/pages/2">2</Link>
      <Link to="/blog/pages/3">3</Link>
    </div>
  </div>
)

const PagesQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM YYYY")
            author

            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            postimage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default Blog

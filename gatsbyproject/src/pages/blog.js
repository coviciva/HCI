import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import Post from "../components/Post"
import PaginationLinks from "../components/pagination-links"
import Filter from "../components/blogfilter"
import Footer2 from "../components/footer2"

const Blog = () => {
  const postsPerPage = 6
  let numberOfPages

  return (
    <div>
      <Header1>
        <SEO title="Blog" />
      </Header1>
      <Filter />

      <StaticQuery
        query={PagesQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
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
      <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
      <Footer2></Footer2>
    </div>
  )
}

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

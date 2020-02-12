import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Post from "../components/Post"
import Header1 from "../components/header1"
import Footer2 from "../components/footer2"

const concatarray = function(array) {
  return array.join("+")
}

const Filter = ({ data, pageContext }) => {
  const { taglist } = pageContext
  console.log(taglist)
  return (
    <div>
      <Header1>
        <SEO title="Blog" />
      </Header1>
      <h3>TEMA:</h3>
      <h3>{concatarray(taglist)}</h3>
      {/*<Link to={concatarray(taglist)}>Link</Link>*/}
      <div className="svi-postovi">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            body={node.frontmatter.body}
            tags={node.frontmatter.tags}
            fluid={node.frontmatter.image.childImageSharp.fluid}
          />
        ))}
      </div>

      <Footer2></Footer2>
    </div>
  )
}
export const tagQuery = graphql`
  query($taglist: [String]) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $taglist } } }
    ) {
      totalCount
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
          excerpt
        }
      }
    }
  }
`

export default Filter

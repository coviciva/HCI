import React from "react"
import { Link } from "gatsby"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const firstpage = "/blog"
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1
      ? "/blog"
      : "/blog/pages/" + (currentPage - 1).toString()

  const nextPage = "/blog/pages/" + (currentPage + 1).toString()

  return (
    <div className="ostale-stranice">
      {isFirst ? (
        <div className="paginationlinks">
          <Link to="" className="isdisabled">
            {" "}
            prethodna
          </Link>
          <Link to={firstpage} activeStyle={{ textDecoration: "underline" }}>
            1
          </Link>
          <Link to={nextPage} activeStyle={{ textDecoration: "underline" }}>
            2
          </Link>
          <Link
            to="/blog/pages/3"
            activeStyle={{ textDecoration: "underline" }}
          >
            3
          </Link>
          <Link
            to="/blog/pages/4"
            activeStyle={{ textDecoration: "underline" }}
          >
            4
          </Link>
          <Link to={nextPage}>sljedeća</Link>
        </div>
      ) : isLast ? (
        <div className="paginationlinks">
          <Link to={previousPage}> prethodna</Link>
          <Link to={firstpage} activeStyle={{ textDecoration: "underline" }}>
            1
          </Link>
          <Link
            to="/blog/pages/2"
            activeStyle={{ textDecoration: "underline" }}
          >
            2
          </Link>
          <Link
            to="/blog/pages/3"
            activeStyle={{ textDecoration: "underline" }}
          >
            3
          </Link>
          <Link
            to="/blog/pages/4"
            activeStyle={{ textDecoration: "underline" }}
          >
            4
          </Link>
          <Link className="isdisabled">sljedeća</Link>
        </div>
      ) : (
        <div className="paginationlinks">
          <Link to={previousPage}> prethodna</Link>
          <Link to={firstpage} activeStyle={{ textDecoration: "underline" }}>
            1
          </Link>
          <Link
            to="/blog/pages/2"
            activeStyle={{ textDecoration: "underline" }}
          >
            2
          </Link>
          <Link
            to="/blog/pages/3"
            activeStyle={{ textDecoration: "underline" }}
          >
            3
          </Link>
          <Link
            to="/blog/pages/4"
            activeStyle={{ textDecoration: "underline" }}
          >
            4
          </Link>
          <Link to={nextPage}>sljedeća</Link>
        </div>
      )}
    </div>
  )
}
export default PaginationLinks

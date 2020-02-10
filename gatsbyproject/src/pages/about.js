import React from "react"
import SEO from "../components/seo"
import Header1 from "../components/header1"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Footer2 from "../components/footer2"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "//content/images/odbor/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Header1>
        <SEO title="O nama" />
      </Header1>

      <div className="onama">
        <h1>PUB QUIZ SPLIT</h1>
        <p>
          {" "}
          Pub Quiz Split je krovna organizacija svih kvizaša iz Splitsko -
          dalmatinske županije koju su 2013. godine kao neprofitnu udrugu
          osnovali kviz entuzijasti i dugogodišnji pub kvizaši s ciljem
          promoviranja kulture kvizova i povezivanja hrvatskih kvizaša s
          međunarodnom scenom. PQS redovno organizira: Svjetsko kviz prvenstvo,
          Ekipno državno prvenstvo, Prvenstvo Hrvatske u parovima, Juniorsko
          svjetsko prvenstvo i Specijalizirane tematske kvizove. Uz ove
          službene, PQS organizira brojne humanitarne i pub kvizove, od kojih je
          poseban onaj u Studentskom centru koji služi kao platforma za mlade
          kvizaše.
        </p>

        <h3 className="naslovciljevi">CILJEVI</h3>
        <div className="ciljevi1">
          <div className="ciljevi">
            <li>Promoviranje i poticanje kulture kvizova u svim inačicama</li>
            <li>
              Promoviranje i poticanje općenito kulture stjecanja širokih
              područja znanja i opće svakodnevne informiranosti
            </li>
            <li>
              Promoviranje i poticanje kritičkog načina razmišljanja i
              vrednovanja primljenih informacija
            </li>
            <li>
              Promoviranje i poticanje ravnopravnosti spolova u kviz kulturi
            </li>
            <li>
              Promoviranje i poticanje kritičkog načina razmišljanja i
              vrednovanja primljenih informacija
            </li>
            <li>Promoviranje i poticanje kozmopolitskog načina razmišljanja</li>
            <li>Promoviranje i poticanje kulture kvizova u svim inačicama</li>
          </div>
        </div>

        <h3 className="uon">UPRAVNI ODBOR</h3>

        <div className="upravniodbor">
          <div div className="osoba">
            <p className="uloga">PREDSJEDNIK</p>
            <Img
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              className="slikaosobe"
            />
            <p className="ime">Dean Kotiga</p>

            <p className="mail">kotiga@gmail.com</p>
          </div>
          <div div className="osoba">
            <p className="uloga">POTPREDSJEDNICA</p>
            <Img
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              className="slikaosobe"
            />
            <p className="ime">Morana Zibar</p>

            <p className="mail">morana@gmail.com</p>
          </div>

          <div div className="osoba">
            <p className="uloga">TAJNIK</p>
            <Img
              fluid={data.allFile.edges[2].node.childImageSharp.fluid}
              className="slikaosobe"
            />
            <p className="ime">Tarik Filipović</p>

            <p className="mail">tarik@outlook.com</p>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  )
}
export default AboutPage

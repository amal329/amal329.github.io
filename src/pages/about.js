import React from 'react'
import { graphql, StaticQuery, useStaticQuery} from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function About() {

    const data = useStaticQuery(graphql`
    query Avatar {
      file(relativePath: {eq: "avatar.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }  
    `);

    return (
        <section className="about">
            <div className="display">   
            <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Avatar" />
            </div>
            <div className="description">
                <h1>Hola, I'm Amal</h1>
                <ul className="custom-list">
                    <li>I'm a software engineer based out of Bangalore, India.</li>
                    <li>Dabbling into the world of open source.</li>
                    <li>I try to keep plants alive.</li>
                    <li>Been thinking of climbing a mountain ever since I read <a>this.</a></li>
                </ul>
                <br/>
                <p>I'm passionate about creative software, good stories and new places. Always open to new book and music recommendations.</p>

                <h3>Wanna collaborate on something cool? Hit me up on <a>LinkedIn</a></h3>
            </div>
        </section>
    )
}

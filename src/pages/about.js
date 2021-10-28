import React from 'react'
import { graphql, useStaticQuery} from 'gatsby';
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
      <div>
        <section id="about" className="about">
            <div className="display">   
            <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} alt="Avatar" />
            </div>
            <div className="description">
                <h1>Hola, I'm Amal</h1>
                <ul className="custom-list">
                    <li>I'm a software engineer based out of Trivandrum, India.</li>
                    <li>Dabbling into the world of open source.</li>
                    <li>I try to keep plants alive.</li>
                    <li>Been thinking of climbing a mountain ever since I read <a href="https://www.goodreads.com/book/show/1898.Into_Thin_Air" target = "_blank" rel="noreferrer">this.</a></li>
                </ul>
                <br/>
                <p>I'm passionate about creative software, good stories and new places. Always open to new book and music recommendations.</p>

                <h3>Wanna collaborate on something cool? Hit me up on LinkedIn or Twitter.</h3>
            </div>
        </section>
        <section id="work" className="work">
          <div>
            <h1>Work 👨‍💼</h1>
            <h4>Some of the projects I've worked on, in and out of college.</h4>
          </div>
          <div className="projects">
            <div className="project">
            <a href="https://amal329.github.io/pong-game-js/" target = "_blank" rel="noreferrer">
              <h4>Pong - Browser game</h4>
              <p>A humble attempt at recreating the classic Pong game, written in vanilla JavaScript along with some HTML and CSS. Also contains a compelling opponent.</p>
            </a>
            </div>
            <div className="project">
              <h4>Flashcard based revision system</h4>
              <p>A flashcard-based revision system that makes use of spaced repetition to aid in revising topics, built using React and Firebase.</p>
            </div>
            <div className="project">
              <h4>BST Visualizer</h4>
              <p>A BST visualizer written in JavaScript using the D3 visualization library that simulates all operations on a binary search tree.</p>
            </div>
          </div>
        </section>
        <section id="skills" className="skill-sec">
          <div>
            <h1>Skills 👨‍🔧</h1>
            <h4>Technologies I've picked up over the years.</h4>
          </div>
          <div className="skills">
            <div className="skill">
              <h4>Frontend</h4>
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>HTML and CSS</li>
              </ul>
            </div>
            <div className="skill">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="skill">
              <h4>Languages</h4>
              <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>C/C++</li>
              </ul>
            </div>
          </div>
        </section>
        </div>
    )
}

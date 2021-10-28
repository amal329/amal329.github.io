import React from 'react'
import Layout from '../../components/Layout';
import WaitForIt from "../../gifs/wait.gif";
import { Helmet } from "react-helmet";

export default function index() {
    return (
        <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog</title>
       </Helmet>
        <Layout>
            <section className="wait">
                <h1>Blog</h1>
                <div className="gif">
                    <img src={WaitForIt} alt="Wait for it" />
                </div>
                <div className="text">
                    <h3>Thanks for visiting. Please wait until I get some motivation to write something.</h3>
                </div>
            </section>
        </Layout>
        </div>
    )
}

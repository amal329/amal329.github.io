import React from "react"
import Layout from "../components/Layout";
import * as styles from "../styles/main.css";
import { Helmet } from "react-helmet";
import About from "./about";

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Website</title>
      </Helmet>
      <Layout>
        <About/>
      </Layout>
    </div>
    );
}

import React from "react"
import Layout from "../components/Layout";
import * as styles from "../styles/main.css";
import About from "./about";

export default function Home() {
  return (
    <div>
      <Layout>
        <About/>
      </Layout>
    </div>
    );
}

//custom app file in docs
import "../styles/globals.css";
import App from "next/app";
import Layout from "../components/Layout/Layout";
import "semantic-ui-css/semantic.min.css";

//using class component

class MyApp extends App {
  render() {
    //component is the active page you are on
    const { Component } = this.props;

    return (
      <Layout>
        <Component />
      </Layout>
    );
  }
}

export default App;

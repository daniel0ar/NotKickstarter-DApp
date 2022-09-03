import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import Head from "next/head";
     
const Layout = (props) => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
            </Head>
            <Header></Header>
            {props.children}
            <h5 style={{textAlign:"center"}}>Not Kickstarter Web3 Example</h5>
        </Container>
    )
};
export default Layout;
import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
     
const Layout = (props) => {
    return (
        <Container>
            <Header></Header>
            {props.children}
            <h5 style={{textAlign:"center"}}>Not Kickstarter Web3 Example</h5>
        </Container>
    )
};
export default Layout;
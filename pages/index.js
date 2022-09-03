import React, {Component} from "react";
import { Button, Card } from "semantic-ui-react";
import factory from '../ethereum/factory';
import Layout from "../components/Layout";


class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true 
            }
        });

        return <Card.Group items={items}></Card.Group>
    }
    
    render() {
        return (
            <Layout>
                <div>
                    <h1>All campaigns:</h1>
                    <br></br>
                    <Button content="New Campaign" icon="add" primary></Button>
                    <br></br>
                    <br></br>
                    <div>{this.renderCampaigns()}</div>
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;

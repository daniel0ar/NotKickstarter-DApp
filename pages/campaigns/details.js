import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from '../../routes';

class CampaignDetails extends Component {
    static async getInitialProps(props) { //to get the address from the address bar (thanks to react routes)
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;   //Deconstruct to avoid using this.props everytime


        const items = [
            {
                header: web3.utils.fromWei(balance, 'ether') + ' ETH',
                description: 'The amount in Ether that this campaign has raised',
                meta: 'Total Raised'
            },
            {
                header: manager,
                description:
                    'The creator of the campaign who can create requests',
                meta: 'Address of manager',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(minimumContribution, 'ether') + ' ETH',
                description: 'The minimum ammount that the owner of the campaign has set for a contribution',
                meta: 'Minimum Contribution'
            },
            {
                header: requestsCount,
                description: 'The total of requests that the campaign owner has created',
                meta: 'Requests'
            },
            {
                header: approversCount,
                description: 'The total number of people who have donated to tgis campaign',
                meta: 'Contributors'
            }
        ];

        return <Card.Group items={items}></Card.Group>;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            {this.renderCards()}
                            <br></br>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <ContributeForm address={this.props.address}></ContributeForm>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Layout>
        );
    }
}

export default CampaignDetails;
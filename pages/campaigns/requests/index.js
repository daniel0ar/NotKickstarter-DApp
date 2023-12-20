import React, { Component } from "react";
import Layout from '../../../components/Layout';
import { Button, Table } from "semantic-ui-react";
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const address = props.query.address; //could be reduced to const {address} = props.query;
        const campaign = Campaign(address);
        const requestsCount = await campaign.methods.getRequestsCount().call();
        const contributors = await campaign.methods.approversCount().call();

        const requests = await Promise.all(  //to call all the functions on the contract in one go (one time only) and then wait
            Array(parseInt(requestsCount)).fill().map((element,index) => {
                return campaign.methods.requests(index).call()
            })
        );

        return { address: address, requests: requests, requestsCount: requestsCount, contributors: contributors }; //could be reduced to return{address, requests, requestsCount};
    }

    renderRequestRows(){
        return this.props.requests.map((request, index) => {
            return (
            <RequestRow
                key={index}
                id={index}
                request={request}
                address={this.props.address}
                contributors={this.props.contributors}
                >
            </RequestRow>
            );
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <Link legacyBehavior route={`/campaigns/${this.props.address}`}>
                    <a>&#60; Go Back</a>
                </Link>
                <h3>Requests of Campaign</h3>
                <Link legacyBehavior route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Add Requets</Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approvals</HeaderCell>
                            <HeaderCell>Actions</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRequestRows()}
                    </Body>
                </Table>
                <div> Total: {this.props.requestsCount} requests</div>
            </Layout>
        );
    }
}

export default RequestIndex;
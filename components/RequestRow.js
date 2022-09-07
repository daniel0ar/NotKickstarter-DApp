import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from '../routes';

class RequestRow extends Component {
    onApprove = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };
    

    onFinalize = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
    }

    render(){
        const { Row, Cell } = Table; //destructure to avoid Table.X call everytime
        const { id, contributors, request} = this.props;
        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{contributors}</Cell>
                <Cell>
                    <Button color='green' inverted onClick={this.onApprove}>Approve</Button>
                    <Button primary onClick={this.onFinalize}>Finalize</Button>
                </Cell>

            </Row>
        );
    }
}

export default RequestRow;
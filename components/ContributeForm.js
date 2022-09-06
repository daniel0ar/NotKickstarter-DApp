import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`) // to refresh the page and show updated contract data
        } catch (error) {
            this.setState({ errorMessage: error.message});
        }
        this.setState({loading: false, value: ''});
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={(event) => this.setState({ value: event.target.value })}
                        label="ETH"
                        labelPosition="right">
                    </Input>
                </Form.Field>
                <Button primary loading={this.state.loading}>Contribute!</Button>
                <Message error header="Something went wrong!" content={this.state.errorMessage}></Message>
            </Form>
        );
    }
}

export default ContributeForm;
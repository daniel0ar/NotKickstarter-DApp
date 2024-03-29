import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class NewRequest extends Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    }

    static async getInitialProps(props) {
        const address = props.query.address;
        return { address: address };
    }

    onSubmit = async event => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;

        this.setState({ loading: true, errorMessage: '' })
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient).send({
                from: accounts[0]
            });
            Router.pushRoute(`/campaigns/${this.props.address}/requests`) //go back to requets list page
        } catch (error) {
            this.setState({ errorMessage: error.message })
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <Link legacyBehavior route={`/campaigns/${this.props.address}/requests`}>
                    <a>&#60; Go Back</a>
                </Link>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value })}
                        >
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Value</label>
                        <Input
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                            label="ETH"
                            labelPosition="right"
                        >
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input
                            value={this.state.recipient}
                            onChange={event => this.setState({ recipient: event.target.value })}
                        >
                        </Input>
                    </Form.Field>
                    <Message error header='Something went wrong!' content={this.state.errorMessage}></Message>
                    <Button primary loading={this.state.loading}>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default NewRequest;
import React, {Component} from "react";
import factory from '../ethereum/factory';


class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    async componentDidMount(){
    }
    
    render() {
        return (
            <div>All campaigns:
                <p>{this.props.campaigns[0]}</p>
            </div>
        )
    }
}

export default CampaignIndex;

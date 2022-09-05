import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xBC9B003ccCDE2b7E623F060006cC1c30167C5bEe"
);

export default instance;
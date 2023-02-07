import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x5833DAE2A9fB718394F7C2D523c22e26207E229D"
);

export default instance;
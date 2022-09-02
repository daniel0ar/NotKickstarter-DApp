import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x6E0ebd154051a7DAA3656dB52cf16c79aAA2547C"
);

export default instance;
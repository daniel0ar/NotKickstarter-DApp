import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
require('dotenv').config();
 
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xA8fDA5B2eff78b5f3B4cA6B6a9b81990a670Bd74"
);
 
export default instance;
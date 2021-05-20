import axios from 'axios';

import cowin from '../../constants/cowin';

console.log('cowin', cowin);
const instance = axios.create({
  baseURL: cowin.baseURL,
  timeout: 2000,
  headers: {
    accept: 'application/json',
    // 'Accept-Language': 'hi_IN',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true
});

async function getStates() {
    const states = await instance.get(`${cowin.version}${cowin.endpoint.states}`);
    console.log("states", states);
  }
const cowinFunctions = {
  async getStates() {
    const states = await instance.get(`${cowin.version}${cowin.endpoint.states}`);
    console.log("states", states);
  },
  async getDistricts(stateId) {
    instance.get();
  }
};

// export getStates;
export default cowinFunctions;
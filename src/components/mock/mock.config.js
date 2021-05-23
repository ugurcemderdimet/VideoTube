import MockAdapter from "axios-mock-adapter";
import axios from "axios";

export const isMockEnabled = () => {
  return process.env.REACT_APP_MOCK_ENABLED === "true";
};

export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);

mock
  .onGet(new RegExp(`/access_token/*`))
  .reply((config) => getAccessToken(config));
};

export const getAccessToken = async (config) => {
    const channelName = config.url.split("/").pop();
    console.log(
      "Token Server: ",
      `Loading video access token for ${channelName}...`
    );
    let instance = axios.create({
      baseURL: "http://localhost:8626",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  
    const response = await instance.get(
      `/access_token?channelName=${channelName}&uid=&role=&expireTime=`
    );
    console.log("Token Server: ", `Access Token = ${data}`);
  
    return [200, response.data];
  };
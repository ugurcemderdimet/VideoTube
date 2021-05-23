import { http } from "../http";

export const getAccessToken = (channelName) => {
  return http.get(`/access_token/${channelName}`);
};
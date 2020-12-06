// import axios from 'axios';
// import { appendQueryString } from '@app/utils/url';
import mockData from './___mock.json';

export async function getUser(user) {
  // const params = {
  //   context: 'blended',
  //   query: user,
  //   rank_token: 0.8045385072330246,
  //   include_reel: true,
  // };
  // const url = appendQueryString(IG.SEARCH, params);
  // const { data } = await axios.get(appendQueryString(url, params));
  // return data;
  return mockData;
}

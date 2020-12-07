import axios from 'axios';
import * as utils from '@app/utils';
import mockData from './___mock.json';

export async function getResult(username) {
  const params = {
    context: 'blended',
    query: username,
    rank_token: 0.8045385072330246,
    include_reel: true,
  };
  const request = utils.divideEnv(
    () => axios.get(utils.appendQueryString(`${IG.URL}/web/search/topsearch`, params)),
    mockData,
  );

  const { data } = await request();
  return data;
}

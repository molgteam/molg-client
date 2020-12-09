import axios from 'axios';
import * as utils from '@app/utils';
import mockData from './mock/___mock.json';
import mockData1 from './mock/___mock1.json';

export async function getUserInfo(pk) {
  const params = {
    query_hash: '42323d64886122307be10013ad2dcc44',
    variables: JSON.stringify({ id: pk, first: 12, after: '' }),
  };
  const request = utils.divideEnv(
    () => axios.get(utils.appendQueryString(`${IG.URL}/graphql/query`, params)),
    mockData,
  );

  const { data } = await request();
  return data;
}

export async function checkUserStory(pk) {
  const params = {
    query_hash: 'd4d88dc1500312af6f937f7b804c68c3',
    variables: {
      user_id: pk,
      include_chaining: false,
      include_reel: false,
      include_suggested_users: false,
      include_logged_out_extras: true,
      include_highlight_reels: false,
      include_live_status: true,
    },
  };
  const request = utils.divideEnv(
    () => axios.get(utils.appendQueryString(`${IG.URL}/graphql/query`, params)),
    mockData1,
  );

  const { data } = await request();
  return data;
}

export async function getMoreFeeds({ pk, endCursor }) {
  const params = {
    query_hash: '42323d64886122307be10013ad2dcc44',
    variables: JSON.stringify({ id: pk, first: 12, after: endCursor }),
  };
  const request = utils.divideEnv(
    () => axios.get(utils.appendQueryString(`${IG.URL}/graphql/query`, params)),
    mockData,
  );

  const { data } = await request();
  return data;
}

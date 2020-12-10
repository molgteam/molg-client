import axios from 'axios';
import * as utils from '@app/utils';
import mockData from './___mock.json';

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
    mockData,
  );

  const { data } = await request();
  return data;
}

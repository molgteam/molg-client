import axios from 'axios';
import * as utils from '@app/utils';
import mockData from './___mock.json';

export async function getFeeds(pk) {
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

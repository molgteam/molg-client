/**
 * http://www.ietf.org/rfc/rfc3986.txt 기준으로 URL 을 파싱해서 리턴
 * @param {string} url 파싱할 URL
 * @returns {Object} 파싱된 URL 요소
 */
export function parseUrl(url = '') {
  const [, protocol, scheme, , host, pathname, search = '', , hash = ''] = url.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
  );
  const [hostname, port = scheme === 'https' ? 443 : 80] = host.split(':');
  const origin = `${protocol}//${host}`;

  return {
    url,
    protocol,
    scheme,
    host,
    hostname,
    port,
    origin,
    pathname,
    search,
    hash,
  };
}

/**
 * URL 의 Query String(예: ?foo=bar)을 파라메터로 받아서 Object 형태로 변환
 * @param  {string} search - 파싱할 search 스트링
 * @returns {Object} 파싱된 쿼리 스트링
 */
export function parseQueryString(search = '') {
  return search
    .replace(/^\?/, '')
    .split('&')
    .reduce((result, query) => {
      const [key, value = ''] = query.split('=', 2);
      if (key) {
        // eslint-disable-next-line no-param-reassign
        result[key] = decodeURIComponent(value);
      }
      return result;
    }, {});
}

/**
 * 오브젝트를 파라메터로 받아서, URL 의 Query String(예: foo=bar) 형태로 추가
 * @param {string} url 대상 URL
 * @param {Object} obj 추가할 파라메터 오브젝트
 * @returns {string} 파라메터가 추가된 URL
 */
export function appendQueryString(url = '', obj = {}) {
  const queryString = Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
  return `${url}${url.includes('?') ? '&' : '?'}${queryString}`;
}

/**
 * 개발환경에서는 mockData를 사용한다.
 * @param {function} request axios
 * @param {JSON} mockData json
 * @returns Promise
 */
export function divideEnv(request, mockData) {
  if (process.env.NODE_ENV === 'development') {
    return () => new Promise((resolve) => {
      resolve({ data: mockData });
    });
  }

  return request;
}

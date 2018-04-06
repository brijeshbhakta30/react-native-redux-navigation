const BASE_URL = 'https://20dd12d8.ngrok.io';

function getQueryString(params) {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
}

const makeAPICall = ({ url, method = 'GET', headers: header = {}, data = {} }) => new Promise((resolve, reject) => {
  const typeJSON = 'application/json';
  const defaultHeaders = {
    'Accept': typeJSON,
    'Content-Type': typeJSON,
  };
  const headers = Object.assign({}, defaultHeaders, header);
  const params = { method, headers };

  // Checking if we need to add body or not.
  if (['POST', 'PUT'].includes(method)) {
    params.body = headers['Content-Type'] === typeJSON ? JSON.stringify(data) : data;
  }
  // Checking if we need to add query string or not.
  if (['GET', 'DELETE'].includes(method)) {
    url += `?${getQueryString(data)}`;
  }

  // Checking if url is absolute or not
  if (url.indexOf('://') === -1) {
    url = BASE_URL + url;
  }

  return fetch(url, params)
    .then((response) => {
      return response.json()
        .then(data => (response.status >= 200 && response.status < 400) ? resolve(data) : reject(data));
    })
    .catch(err => reject(err));
});

/**
 * GET: Make a get request to given url.
 * @param url - URL path to make the request to.
 * @param options - Options that are to be sent with the request.
 */
function get(url, options) {
  return makeAPICall(Object.assign({ method: 'GET', url }, options));
}

/**
 * POST: Make a post request to given url.
 * @param url - URL path to make the request to.
 * @param data - Data to be sent with the request
 * @param options - Options that are to be sent with the request.
 */
function post(url, data, options) {
  return makeAPICall(Object.assign({ method: 'POST', url, data }, options));
}

/**
 * PUT: Make a put request to given url.
 * @param url - URL path to make the request to.
 * @param data - Data to be sent with the request
 * @param options - Options that are to be sent with the request.
 */
function put(url, data, options) {
  return makeAPICall(Object.assign({ method: 'PUT', url, data }, options));
}

/**
 * DELETE: Make a delete request to given url.
 * @param url - URL path to make the request to.
 * @param options - Options that are to be sent with the request.
 */
function deleteRequest(url, options) {
  return makeAPICall(Object.assign({ method: 'DELETE', url }, options));
}

export default {
  get,
  post,
  put,
  delete: deleteRequest,
};

import Axios from 'axios';
import { isPlainObject } from 'lodash/lang';
import { camelizeKeys, snakeizeKeys } from 'utils/transform';

const axios = Axios.create({
  baseURL: `${process.env.BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  responseType: 'json',
  transformRequest(data) {
    if (isPlainObject(data)) return JSON.stringify(snakeizeKeys(data));
    return data;
  },
  transformResponse(data) {
    // data comes as string in IE
    if (typeof data === 'string' && data.length) data = JSON.parse(data);
    return camelizeKeys(data);
  }
});

export default axios;

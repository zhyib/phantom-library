import axios from 'axios';
import settle from 'axios/lib/core/settle';
import buildURL from 'axios/lib/helpers/buildURL';

const service = axios.create({
  baseURL: '/api',
  timeout: 60000,
});

service.interceptors.request.use(
  (config) => config,
  (error) => {
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    const dataAxios = response.data;
    const { code, data, message } = dataAxios;
    switch (code) {
      case 0:
        return Promise.resolve(data);
      default:
        return Promise.reject(response);
    }
  },
  (error) => {
    Promise.reject(error);
  },
);

axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    uni.request({
      method: config.method.toUpperCase(),
      url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config,
        };

        settle(resolve, reject, response);
      },
    });
  });
};

export default service;

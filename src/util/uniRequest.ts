const baseURL = '';

function successCallback(res: UniApp.RequestSuccessCallbackResult) {

}

export default (options) => {
  // options.url = baseURL + options.url;
  uni.request({
    url: options.url,
    method: options?.method,
    success: options?.success,
  });
};

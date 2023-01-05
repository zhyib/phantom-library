const baseURL = '';

export default (options: any) => {
  // options.url = baseURL + options.url;
  uni.request(options);
};

const baseURL = 'http://1.12.243.205:3000';
let uniPlatform = '';
uni.getSystemInfo({
  success(systemInfo) {
    uniPlatform = systemInfo.uniPlatform;
  },
});

export default (options: any) => {
  if (uniPlatform !== 'web') {
    options.url = baseURL + options.url;
  }
  uni.request(options);
};

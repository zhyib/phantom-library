import axios from 'axios';

const service = axios.create({
    baseURL: '/api',
    timeout: 60000,
})

service.interceptors.request.use(
    (config) => config,
    (error) => {
        Promise.reject(error);
    }
)

service.interceptors.response.use(
    (response: AxiosResponse<Record<string, string>>) => {
        const dataAxios = response.data;
        const { code, data, message } = dataAxios;
        switch (code) {
            case 0:
                return Promise.resolve(data);
            default:
                return Promise.reject(data);
        }
    },
    (error) => {
        Promise.reject(error);
    }
)

export default service;
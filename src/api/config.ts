const isDeploy = true;

export const baseUrl = isDeploy ? 'https://eastclinic.ru' : 'http://127.0.0.1:8000';
// export const BASE_URL = isDeploy ? 'https://eastclinic.ru' : 'http://127.0.0.1:8000';
// export const BASE_URL = 'http://dev.eastclinic.local'
export const BASE_URL = 'https://eastclinic.ru';
export const API_URL = '/system/api/v1';
export const IS_MODX_API = true;
export const API_MODX_URL:string = 'https://eastclinic.ru/assets/components/eastclinic/remote/connector.php';
// export const API_MODX_URL:string = 'http://dev.eastclinic.local/assets/components/eastclinic/remote/connector.php';
// export const API_URL = '/api/v1';

export default { baseUrl, API_URL, BASE_URL, API_MODX_URL };

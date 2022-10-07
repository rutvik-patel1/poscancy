import { httpClient } from '../../../shared/services/';

const login = () => {
    const url = 'base url' + 'path'
  
    return httpClient.get(url).then(res => res.data);
  };
  
  export { login };

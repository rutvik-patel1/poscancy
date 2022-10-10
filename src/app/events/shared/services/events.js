import { httpClient } from '../../../shared/services/';

import { apiBaseUrl } from '@/environment/environment';

const events = () => {

    const url = apiBaseUrl + '/items/event'
    return httpClient.get(url).then(res => res.data);
  };
  
  export { events };

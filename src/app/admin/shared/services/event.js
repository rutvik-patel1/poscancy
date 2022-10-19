import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '../../../../environment/environment';

const createEvent = async (data) => {
    const url = apiBaseUrl + '/items/event'
    let  resp = await httpClient.post('/files',data.media).then(res => res.data.data.id);
              console.log(resp);
        data.media = resp
        console.log(data)      
    return httpClient.post(url,data).then( res => res.data );
  };

export { createEvent }


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


  const getEventResponse = async (id) => {
    const url = apiBaseUrl + '/items/response?filter[event_id][_eq]='+id
    return httpClient.get(url).then(res => res.data );
  };

export { createEvent,getEventResponse }


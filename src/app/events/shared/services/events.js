import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '@/environment/environment';

const sendFormData = (data) =>{
  const url = apiBaseUrl + '/items/response'

  return httpClient.post(url, data)
}

const events = () => {
    const url = apiBaseUrl + '/items/event'
    return httpClient.get(url).then(res => res.data);
};

const GetEventById = (id) => {
  const url = apiBaseUrl + '/items/event/'+ id
  return httpClient.get(url).then(res => res.data);
};

const GetCommentsByEvent = (id) => {
  const url = apiBaseUrl + '/items/event_comment?filter[event_id][_eq]='+ id + '&fields=*.*.*'
  return httpClient.get(url).then(res => res.data);
};

const getCalanderEvents = () => {
  const url = apiBaseUrl + '/items/event?fields=id,start_date,end_date,event_name'
  return httpClient.get(url).then(res => res.data.data);
}

export { events, GetEventById, GetCommentsByEvent, getCalanderEvents, sendFormData};

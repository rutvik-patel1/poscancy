import { appCookieStorage, httpClient} from '../../../shared/services/';
import { apiBaseUrl } from '@/environment/environment';

const events = () => {
    const url = apiBaseUrl + '/items/event'
    return httpClient.get(url).then(res => res.data);
};

const countEventComment = (id) => {
  const url = apiBaseUrl + '/items/event_comment?filter[event_id][_eq]=' + id + '&meta=filter_count'
  return httpClient.get(url).then( res => res.data.meta.filter_count )
}

const GetEventById = (id) => {
  const url = apiBaseUrl + '/items/event/'+ id
  return httpClient.get(url).then(res => res.data);
};

const GetCommentsByEvent = (id) => {
  const url = apiBaseUrl + '/items/event_comment?filter[event_id][_eq]='+ id + '&fields=*.*.*'
  return httpClient.get(url).then(res => res.data);
};

const commentOnEvent = (data) => {
  const url = apiBaseUrl + '/items/event_comment'
  let token = appCookieStorage.get('access_token')
   return httpClient.post(url,data,{ headers:{ 
      Authorization: `Bearer ${token}` 
    } }).then(res => res.data);
};

const getCalanderEvents = () => {
  const url = apiBaseUrl + '/items/event?fields=id,start_date,end_date,event_name'
  return httpClient.get(url).then(res => res.data.data);
}

export { events, GetEventById, GetCommentsByEvent, getCalanderEvents,commentOnEvent,countEventComment};

import { httpClient } from '../../../shared/services/';

import { apiBaseUrl } from '@/environment/environment';

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

export { events, GetEventById, GetCommentsByEvent};

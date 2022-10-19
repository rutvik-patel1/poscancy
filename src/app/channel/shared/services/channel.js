import { httpClient } from '../../../shared/services';

import { apiBaseUrl } from '@/environment/environment';

const getAllChannels = () => {
    const url = apiBaseUrl + '/items/channel'
    return httpClient.get(url).then(res => res.data);
};

const editChannel = (id, data) => {
  const url = apiBaseUrl + '/items/channel/'+ id
  return httpClient.patch(url, data).then(res => res.data);
};

const deleteChannel = (id) => {
    const url = apiBaseUrl + '/items/channel/'+ id
    return httpClient.delete(url).then(res => res.data);
  };

const postChannel = (data) => {
  const url = apiBaseUrl + '/items/channel'
  return httpClient.post(url, data).then(res => res.data);
};

export { getAllChannels, editChannel, deleteChannel, postChannel};
import { httpClient } from '../../../shared/services/';
import { apiBaseUrl } from '@/environment/environment';

const GetPhoto = (id) => {
    const url = apiBaseUrl + '/assets/' + id
    return httpClient.get(url).then(res => res.config.url);
}

export { GetPhoto };
import { apiBaseUrl } from "../../../../environment/environment";
import { httpClient } from "../../../shared/services";
const getProfile = (id)=>{
    const url = apiBaseUrl + `/users/${id}`
    return httpClient.get(url).then(res => res.data);
};
const updateProfile = (id,payload) => {
    const url = apiBaseUrl + `/users/${id}`
    httpClient.patch(url,payload).then(res => console.log(res));
}
export { getProfile,updateProfile }
import {eID, instance} from "../../apiConfig/apiConfig";

export const tableAPI = {
  getList(){
    return instance.get(`/v1/outlay-rows/entity/${eID}/row/list`)
  },
}

import {eID, instance} from "../../apiConfig/apiConfig";

export const lineAPI = {
    createRow(){
        return instance.post(`/v1/outlay-rows/entity/${eID}/row/create`)
    },
    updateRow(rID: number){
        return instance.post(`/v1/outlay-rows/entity/${eID}/row/${rID}/update`)
    },
    deleteRow(rID: number){
        return instance.get(`/v1/outlay-rows/entity/${eID}/row/${rID}/delete`)
    }
}

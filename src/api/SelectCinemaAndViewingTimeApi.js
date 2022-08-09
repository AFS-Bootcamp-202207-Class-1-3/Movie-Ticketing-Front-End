import BaseApi from "./BaseApi";

export function getCinemas() {
    return BaseApi.get(`/cinema`);
}

export function getStartTime(id) {
    return BaseApi.get(`/movieSchedule/cinema/${id}`);
}

export function getSameViewingTime(orderRequest) {
    console.log("----", orderRequest)
    return BaseApi.post(`/order/viewingTime`, orderRequest )
}

export function saveOrder(order){
    console.log(order)
    return BaseApi.post(`/order`,order)
}
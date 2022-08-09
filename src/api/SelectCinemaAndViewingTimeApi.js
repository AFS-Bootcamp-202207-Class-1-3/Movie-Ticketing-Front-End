import axios from "axios";
export function getCinemas() {
    return axios.get(`/api/cinema`);
}

export function getStartTime(id) {
    return axios.get(`/api/movieSchedule/cinema/${id}`);
}

export function getSameViewingTime(orderRequest) {
    console.log("----", orderRequest)
    return axios.post(`/api/order/viewingTime`, orderRequest )
}

export function saveOrder(order){
    console.log(order)
    return axios.post(`/api/order`,order)
}
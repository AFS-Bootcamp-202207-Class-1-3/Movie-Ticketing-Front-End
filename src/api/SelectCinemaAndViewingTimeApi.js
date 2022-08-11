import axios from "axios";
export function getCinemas() {
    return axios.get(`/api/cinema`);
}

export function getStartTime(cinemaId,movieId) {
    return axios.get(`/api/movieSchedule?cinemaId=${cinemaId}&movieId=${movieId}`);
}

export function getSameViewingTime(orderRequest) {
    return axios.post(`/api/order/viewingTime`, orderRequest)
}

export function saveOrder(order) {
    return axios.post(`/api/order`, order)
}

export function savePay(pay) {
    return axios.post(`/api/pay`, pay)
}
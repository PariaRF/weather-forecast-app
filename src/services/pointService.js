import http, { API_KEY }  from "./httpService";


export function getPointApi(){
    return http.get(`/point?place_id=Tehran&sections=current%2Call&language=en&units=auto&key=${API_KEY}`).then((data)=> data.data)
}
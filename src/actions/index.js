import axios from 'axios';

const API_KEY = "j3MJY3B6UFgGioEWnPkd";

const BASE_URL = "https://www.quandl.com/api/v3/datasets/";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SELECTED_DATA = "FETCH_SELECTED_DATA";

export function fetchData(symbol) {
  const URL = `${BASE_URL}WIKI/${symbol}.json?api_key=${API_KEY}&order=asc`
  const request = axios.get(URL);
  // console.log("request", request)
  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function fetchSelectedData(symbol, start, end) {
  // const URL = `${BASE_URL}WIKI/AMD.json?column_index=4&start_date=2017-10-01&end_date=2017-10-11&collapse=monthly&transform=rdiff&api_key=${API_KEY}`;
  const URL = `${BASE_URL}WIKI/${symbol}.json?column_index=4&start_date=${start}&end_date=${end}&collapse=daily&transform=rdiff&api_key=j3MJY3B6UFgGioEWnPkd`;
  const request = axios.get(URL);
  console.log("request",request)


  return {
    type: FETCH_SELECTED_DATA,
    payload: request
  }
}
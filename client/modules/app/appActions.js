export const REQUEST_STOCK = 'REQUEST_STOCK';
import axios from 'axios';

export function requestNumbers(term = null) {
  console.log(term);
  let request = axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=')
  return {
    type: REQUEST_STOCK,
    payload: request
  };
}

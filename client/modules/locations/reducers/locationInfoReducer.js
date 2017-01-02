import {REQUEST_BUSINESS_INFO_SENT} from '../locationsActions.js';
import {REQUEST_BUSINESS_INFO_RECIEVED} from '../locationsActions.js';


const getLocationInfo = (state = null, action) => {
  switch (action.type) {
    case REQUEST_BUSINESS_INFO_SENT:
      return {
        isFetching: action.isFetching
      };
    case REQUEST_BUSINESS_INFO_RECIEVED:
      return {
        isFetching: action.isFetching,
        businessInfo: action.locationInfo
      };
    default: return state;
  }
};

export default getLocationInfo;

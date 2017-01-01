export const REQUEST_BUSINESS_INFO_SENT = 'REQUEST_BUSINESS_INFO_SENT'
export const REQUEST_BUSINESS_INFO_RECIEVED = 'REQUEST_BUSINESS_INFO_RECIEVED'

export const requestBusinessInfoSent = () => {
  return {
    type: REQUEST_BUSINESS_INFO_SENT,
    isFetching: true,
    businessInfo: null
  };
};

export const requestBusinessInfoRecieved = (businessInfo) => {
  return {
    type: REQUEST_BUSINESS_INFO_RECIEVED,
    isFetching: false,
    businessInfo: businessInfo.data
  };
};

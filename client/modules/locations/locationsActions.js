export const REQUEST_BUSINESS_INFO_SENT = 'REQUEST_BUSINESS_INFO_SENT';
export const REQUEST_BUSINESS_INFO_RECIEVED = 'REQUEST_BUSINESS_INFO_RECIEVED';
export const REQUEST_PROSPECTIVE_MATCHES_SENT = 'REQUEST_PROSPECTIVE_MATCHES_SENT';
export const REQUEST_PROSPECTIVE_MATCHES_RECIEVED = 'REQUEST_PROSPECTIVE_MATCHES_RECIEVED';


export const requestBusinessInfoSent = () => {
  return {
    type: REQUEST_BUSINESS_INFO_SENT,
    isFetching: true,
    locationInfo: null
  };
};

export const requestBusinessInfoRecieved = (businessInfo) => {
  return {
    type: REQUEST_BUSINESS_INFO_RECIEVED,
    isFetching: false,
    locationInfo: businessInfo.data
  };
};

export const requestProspectiveMatchesSent = () => {
  return {
    type: REQUEST_PROSPECTIVE_MATCHES_SENT,
    isFetching: true
  };
};

export const requestProspectiveMatchesRecieved = (prospectiveMatches) => {
  return {
    type: REQUEST_PROSPECTIVE_MATCHES_RECIEVED,
    isFetching: false,
    prospectiveMatches: prospectiveMatches.data
  };
};

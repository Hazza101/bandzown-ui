export const POST_BAND = 'music505.herokuapp.com/bands/POST';
export const POST_BAND_SUCCESS = 'music505.herokuapp.com/bands/POST_SUCCESS';
export const POST_BAND_FAIL = 'music505.herokuapp.com/bands/POST_FAIL';

// export default function reducer(state = { detail: {} }, action) {
//   return state;
// }

export default function newBandReducer(state = { band: {} }, action) {
  console.log("action type: %s", action.type);
  switch (action.type) {
    case POST_BAND:
      return { ...state, loading: true };
    case POST_BAND_SUCCESS:
      return { ...state, loading: false, band: action.payload.data };
    case POST_BAND_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while posting band details'
      };
    default:
      return state;
  }
}

export function postBand(band) {
  return {
    type: POST_BAND,
    payload: {
      request: {
        url: `/bands`,
        method: 'post',
        data: band
      }
    }
  };
}

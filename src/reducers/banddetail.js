export const GET_BANDDETAIL = 'music505.herokuapp.com/banddetail/LOAD';
export const GET_BANDDETAIL_SUCCESS = 'music505.herokuapp.com/banddetail/LOAD_SUCCESS';
export const GET_BANDDETAIL_FAIL = 'music505.herokuapp.com/banddetail/LOAD_FAIL';

// export default function reducer(state = { detail: {} }, action) {
//   return state;
// }
export default function bandDetailReducer(state = { detail: {} }, action) {
  console.log("action type: %s", action.type);
  switch (action.type) {
    case GET_BANDDETAIL:
      return { ...state, loading: true };
    case GET_BANDDETAIL_SUCCESS:
      return { ...state, loading: false, detail: action.payload.data };
    case GET_BANDDETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching band details'
      };
    default:
      return state;
  }
}

export function getBandDetail(id) {
  url = '/bands/' + id;
  return {
    type: GET_BANDDETAIL,
    payload: {
      request: {
        url: url,
        method: 'get'
      }
    }
  };
}

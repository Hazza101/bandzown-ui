export const GET_BANDDETAIL = 'bandzown.herokuapp.com/banddetail/LOAD';
export const GET_BANDDETAIL_SUCCESS = 'bandzown.herokuapp.com/banddetail/LOAD_SUCCESS';
export const GET_BANDDETAIL_FAIL = 'bandzown.herokuapp.com/banddetail/LOAD_FAIL';

// export default function reducer(state = { repos: {movies: []} }, action) {
export default function bandDetailReducer(state = { bandDetail: {} }, action) {
  console.log("action type: %s", action.type);
  switch (action.type) {
    case GET_BANDDETAIL:
      return { ...state, loading: true };
    case GET_BANDDETAIL_SUCCESS:
      return { ...state, loading: false, bands: action.payload.data };
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
  return {
    type: GET_BANDDETAIL,
    payload: {
      request: {
        url: `/bands/{id}`
      }
    }
  };
}

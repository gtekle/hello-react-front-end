import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';
const FETCH_SUCCESS = 'greetings/messageFetched';
const FETCH_FAIL = 'greetings/messageFetchFailed';

export const fetchGreetings = (param) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/greetings`);
    dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FAIL,
      payload: error,
    });
  }
};

const initialState = {
  message: null,
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case FETCH_FAIL:
      return initialState;
    default:
      return state;
  }
};

export default greetingsReducer;

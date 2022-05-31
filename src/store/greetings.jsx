import axios from 'axios';

const BASE_URL = 'https://localhost:3000/api/v1/';
const FETCH_SUCCESS = 'greetings/messageFetched';
const FETCH_FAIL = 'greetings/messageFetchFailed';

export const fetchGreetings = (param) => async (dispatch) => {
  try {
    const { greeting } = await axios.get(`${BASE_URL}/greetings`);
    dispatch({
      type: FETCH_SUCCESS,
      payload: greeting,
    });
  } catch (error) {
    res = error;
    dispatch({
      type: FETCH_FAIL,
      payload: error,
    });
  }
};

const initialState = {
  greeting: {},
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        greeting: action.payload
      };
    case FETCH_FAIL:
      return initialState;
    default:
      return state;
  }
};

export default greetingsReducer;

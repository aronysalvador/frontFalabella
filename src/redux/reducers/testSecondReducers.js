import {
    GET_ARRAY2_INIT,
    GET_ARRAY2_SUCCESS,
    GET_ARRAY2_FAILURE,
    GET_ARRAY3_INIT,
    GET_ARRAY3_SUCCESS,
    GET_ARRAY3_FAILURE,
    UPDATE2_FORM
  } from "../types/testSecondType";
  
  const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
  };
  
  export default function testSecondForm(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_ARRAY2_INIT:
      case GET_ARRAY3_INIT:
        return { ...state, loading: true };
  
      case GET_ARRAY2_SUCCESS:
      case GET_ARRAY3_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
  
      case GET_ARRAY2_FAILURE:
      case GET_ARRAY3_FAILURE:
        return { ...state, error: action.payload, loading: false };
      case UPDATE2_FORM:
        return {
          ...state,
          [action.payload.stateType]: action.payload.value,
        };
  
      default:
        return { ...state };
    }
  }
  
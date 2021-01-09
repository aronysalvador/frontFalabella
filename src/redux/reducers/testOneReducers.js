import {
    GET_ARRAY_INIT,
    GET_ARRAY_SUCCESS,
    GET_ARRAY_FAILURE,
    UPDATE_FORM
  } from "../types/testOneType";
  
  const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
  };
  
  export default function testOneForm(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_ARRAY_INIT:
        return { ...state, loading: true };
  
      case GET_ARRAY_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
  
      case GET_ARRAY_FAILURE:
        return { ...state, error: action.payload, loading: false };
      case UPDATE_FORM:
        return {
          ...state,
          [action.payload.stateType]: action.payload.value,
        };
  
      default:
        return { ...state };
    }
  }
  
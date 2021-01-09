import {
    GET_ARRAY2_INIT,
    GET_ARRAY2_SUCCESS,
    GET_ARRAY2_FAILURE,
    GET_ARRAY3_INIT,
    GET_ARRAY3_SUCCESS,
    GET_ARRAY3_FAILURE,
    UPDATE2_FORM
} from "../types/testSecondType";
import Axios from "axios";

export const getData = async (objeto) => {
    return Axios.post('https://sleepy-temple-63483.herokuapp.com/api/secondExercise', objeto);
  };
  
export const getArrayTest2 = (numberInitial) => async (dispatch, getState) => {
dispatch({
    type: GET_ARRAY2_INIT,
    payload: true,
});

const objeto = {
    number: numberInitial
};

getData(objeto)
    .then((response) => {
        if(response.data.status === 200 || response.data.status === 304){
            dispatch(successCall(response.data.content[0]));
            dispatch(updateForm("arrayFinalSecond" , response.data.content[0] ))
        }else{
            console.log('Ha ocurrido un error')
        }
    })
    .catch((error) => {
        dispatch(errorCall());
    });

const successCall = (array) => ({
    type: GET_ARRAY2_SUCCESS,
    payload: array,
});

const errorCall = () => ({
    type: GET_ARRAY2_FAILURE,
});
};

export const getData2 = async (objeto) => {
    return Axios.post('https://sleepy-temple-63483.herokuapp.com/api/secondExercise/maxLength', objeto);
  };
  
export const getArrayTest3 = (numberInitial) => async (dispatch, getState) => {
dispatch({
    type: GET_ARRAY3_INIT,
    payload: true,
});

const objeto = {
    number: numberInitial
};

getData2(objeto)
    .then((response) => {
        if(response.data.status === 200 || response.data.status === 304){
            dispatch(successCall(response.data.content[0]));
            dispatch(updateForm("objectoFinal" , response.data.content[0] ))
        }else{
            console.log('Ha ocurrido un error')
        }
    })
    .catch((error) => {
        dispatch(errorCall());
    });

const successCall = (array) => ({
    type: GET_ARRAY3_SUCCESS,
    payload: array,
});

const errorCall = () => ({
    type: GET_ARRAY3_FAILURE,
});
};

export const updateForm = (stateType, value) => {
    return {
        type: UPDATE2_FORM,
        payload: {
            stateType,
            value,
        },
    };
};
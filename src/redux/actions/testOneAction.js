import {
    GET_ARRAY_INIT,
    GET_ARRAY_SUCCESS,
    GET_ARRAY_FAILURE,
    UPDATE_FORM
} from "../types/testOneType";
import Axios from "axios";

export const getData = async (objeto) => {
    return Axios.post('https://sleepy-temple-63483.herokuapp.com/api/firstExercise', objeto);
  };
  
export const getArrayTest = (arrayInitial) => async (dispatch, getState) => {
dispatch({
    type: GET_ARRAY_INIT,
    payload: true,
});

const objeto = {
    array: arrayInitial
};

getData(objeto)
    .then((response) => {
        if(response.data.status === 200 || response.data.status === 304){
            dispatch(successCall(response.data.content[0]));
            dispatch(updateForm2("arrayFinal" , response.data.content[0] ))
        }else{
            console.log('Ha ocurrido un error')
        }
    })
    .catch((error) => {
        dispatch(errorCall());
    });

const successCall = (array) => ({
    type: GET_ARRAY_SUCCESS,
    payload: array,
});

const errorCall = () => ({
    type: GET_ARRAY_FAILURE,
});
};

export const updateForm2 = (stateType, value) => {
    return {
        type: UPDATE_FORM,
        payload: {
            stateType,
            value,
        },
    };
};
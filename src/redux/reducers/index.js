import { combineReducers } from "redux";
import testOneForm from "../reducers/testOneReducers";
import testSecondForm from "../reducers/testSecondReducers";

export default combineReducers({
    testOneForm,
    testSecondForm
});
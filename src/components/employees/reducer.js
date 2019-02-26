import { FORM_TEXT, GET_EMPLOYEES,GET_EMPLOYEES_FULLFILLED } from './types';

const defaultState = {
    text: '',
    employees:[],
    fetchEmployees:true
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FORM_TEXT:
            return { ...state, ...action };
         case GET_EMPLOYEES:
         return Object.assign({}, state, {
            fetchEmployees: false, employees:action.payload
          });//[...state,{fetchEmployees:false, employees:action.payload}]   
        case GET_EMPLOYEES_FULLFILLED:
        return Object.assign({}, state, {
            fetchEmployees: true
          });
        default:
            return state;
    }
};
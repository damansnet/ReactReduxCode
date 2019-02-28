import { FORM_TEXT, FORM_SUBMIT,GET_EMPLOYEES, GET_EMPLOYEES_FULLFILLED } from './types';

const jsonResponse = require('../../sample-data.json');

export const textAction = text => ({
    type: FORM_TEXT,
    text,
});

export const submitAction = () => ({
    type: FORM_SUBMIT,
});


export const getEmployeesCompleted=()=>({
    type:GET_EMPLOYEES_FULLFILLED
});

export const getEmployees=()=>({
              type: GET_EMPLOYEES,
            payload: jsonResponse
           });
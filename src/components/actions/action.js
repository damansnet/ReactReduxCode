import { FORM_TEXT, FORM_SUBMIT,GET_EMPLOYEES, GET_EMPLOYEES_FULLFILLED } from './types';
import { jsonResponse} from "../../data/mock-employees";
const employees=[
{
    id: '12121',
    avatar: '',
    firstName: 'daman',
    lastName: 'singh',
    jobTitle: 'Software Engineer',
    age: 40,
    dateJoined: '19-March-2018' // 1-10 years ago
}
]

export const textAction = text => ({
    type: FORM_TEXT,
    text,
});

export const submitAction = () => ({
    type: FORM_SUBMIT,
});

export const getEmployees = () =>({
          type: GET_EMPLOYEES,
        payload: jsonResponse
       });
   
export const getEmployeesCompleted=()=>({
    type:GET_EMPLOYEES_FULLFILLED
});
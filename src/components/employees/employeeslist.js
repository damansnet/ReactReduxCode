import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as employeeActions from './action';


export class EmployeeListing extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         
        };
    }
    componentWillMount() {
        this.props.getEmployees();
      }
      componentWillUpdate(nextProps) {
         
          const{employees,fetchEmployees}=nextProps; 
          if(employees!==undefined && fetchEmployees===false)
          {
             // this.setState({employees});
              this.props.getEmployeesCompleted();
              return;
          }
       console.log(nextProps);  
    }
    render(){
        const {employees}=this.props.employees;
        console.log(employees);
        return(<div>
         employees
        </div>);
    }
}
export const mapStateToProps = state => {
    const { employees,fetchEmployees } = state.form;
    return {
     employees,fetchEmployees
    };
  };
export default connect(mapStateToProps,employeeActions)(EmployeeListing);
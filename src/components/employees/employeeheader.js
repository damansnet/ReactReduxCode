import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as employeeActions from './action';


export class EmployeeHeader extends Component {

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
        return(<div className="container-fluid">
         <div className="row">
          <div className="col">
          <p className="text-left"><h3> Our Employees</h3></p>
          </div>
          <div className="col">
          <span>Sorty by</span>
          <span className="text-right">dropdowncomes here</span>
          </div>
          <div className="col">
          <p className="text-right"> <input type='text' placeholder="search"></input>  </p>
          </div>
         </div>
      </div>);
    }
}
export const mapStateToProps = state => {
    const { employees,fetchEmployees } = state.form;
    return {
     employees,fetchEmployees
    };
  };
export default connect(mapStateToProps,employeeActions)(EmployeeHeader);
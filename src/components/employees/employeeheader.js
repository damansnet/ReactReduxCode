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
        return(<div className="container">
        <div className="col-xs-5 col-lg-1">
        <select className="form-control  pull-right" >
     
    </select>
    </div>
    <div className="col-xs-5 col-lg-1">
        <input type="text" className="form-control  pull-right" placeholder="Search.." />
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
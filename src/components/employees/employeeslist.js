import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as employeeActions from './action';
import EmployeeHeader from './employeeheader';
import styled from 'styled-components';
import EmployeeCardView from './employeecardview';
import EmployeeDetails from './employeedetails';
import _ from 'lodash';
const ImagePlaceholder= styled.div`
  
  float:left;
`;


export class EmployeeListing extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         show:false
        };
    }
    componentWillMount() {
        this.props.getEmployees();
      }
      componentWillUpdate(nextProps) {
         
          const{employees,fetchEmployees}=nextProps; 
          if(employees!==undefined && fetchEmployees===false)
          {
             let employeeReceived=_.cloneDeep(employees); 
             this.setState({employees,employeeReceived});
              this.props.getEmployeesCompleted();
              this.props.companyInfo(employees.companyInfo);
              return;
          }
       console.log(nextProps);  
    }

    selectedEmployee=(selectedEmployee)=>{
        
        this.setState({show:true,selectedEmployee});
    }
     hideModal=()=>{
         this.setState({show:!this.state.show});
     };
     onSearch=(searchQuery)=>{
         let tempEmployees=this.state.employeeReceived.employees;
         tempEmployees= tempEmployees.filter(x=>{
             if(x.firstName.toUpperCase().indexOf(searchQuery.toUpperCase())===0)
             {
                 return x;
             }
         } );
         this.setState({employees:tempEmployees});
     };
    render(){
        const {employees,show,selectedEmployee,companyInfo}=this.state;
        console.log(employees);
         return( <div className="container-fluid">
                 <div className="row">
            <EmployeeHeader onSearch={this.onSearch}></EmployeeHeader>
            <hr/>
            </div>
            <EmployeeCardView data={employees} selectEmployee={this.selectedEmployee} ></EmployeeCardView>
            
            <EmployeeDetails show={show} data={selectedEmployee} onBackdropClick={this.hideModal}></EmployeeDetails>
        </div>
        
       );
    }
}
export const mapStateToProps = state => {
    const { employees,fetchEmployees } = state.form;
    return {
     employees,fetchEmployees
    };
  };
export default connect(mapStateToProps,employeeActions)(EmployeeListing);
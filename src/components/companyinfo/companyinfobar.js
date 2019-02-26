import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from "styled-components";
const ContainerFluid = styled.div`

`;

const NavBarHeader = styled.header`


`;
export class CompanyInfoBar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         
        };
    }
    componentWillMount() {
       // this.props.getEmployees();
      }
      componentWillUpdate(nextProps) {
         
    //       const{employees,fetchEmployees}=nextProps; 
    //       if(employees!==undefined && fetchEmployees===false)
    //       {
    //          // this.setState({employees});
    //           this.props.getEmployeesCompleted();
    //           return;
    //       }
    //    console.log(nextProps);  
    }
    render(){
        // const {employees}=this.props.employees;
        // console.log(employees);
        return(
           <ContainerFluid>
<nav className="navbar navbar-inverse border-bottom">
  <div className="container-fluid">
    <div className="navbar-header">
     <div className="row">
     <div className="col-xl">
              <h4 class="text-black">CompanyName</h4>
              <p class="text-muted">company moto.</p>
            </div>
     </div>
    </div>
    
    </div>
    <hr/>
    </nav>
    </ContainerFluid>
        );
    }
}
// export const mapStateToProps = state => {
//     const { employees,fetchEmployees } = state.form;
//     return {
//      employees,fetchEmployees
//     };
//   };
export default CompanyInfoBar;
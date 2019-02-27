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

  <div className="container-fluid">
     <div className="row">
     <div className="col">
              <h4 class="text-black  text-left">CompanyName</h4>
     
            </div>
     </div>
     <div className="row">
     <div className="col">
              <h6 class="text-black text-left">CompanyMoto</h6>
     
            </div>
            <div className="col pull-right">
              <h6 class="text-black text-right">working since..</h6>
     
            </div>
     </div>


    </div>
     
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
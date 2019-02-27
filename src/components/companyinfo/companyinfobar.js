import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from "styled-components";
import Container from '../../layouts/Container';
import Header from '../../layouts/Container';
import EmployeeListing from '../employees/employeeslist';
const ContainerFluid = styled.div`

`;

const NavBarHeader = styled.header`


`;
export class CompanyInfoBar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         
        };
        this.showCompanyInfo=this.showCompanyInfo.bind(this);
    }
    componentWillMount() {
      
      }
      componentWillUpdate(nextProps) {
      
    }
    showCompanyInfo(companyInfo){
        this.setState({companyInfo});
    }
    render(){
        const{companyInfo}=this.state;
        return(<div>
            <Header>
           <ContainerFluid>

  <div className="container-fluid">
     <div className="row">
     <div className="col">
              <h1 className="text-black  text-left">{(companyInfo)?companyInfo.companyName:''}</h1>
     
            </div>
     </div>
     <div className="row">
     <div className="col">
              <h6 class="text-black text-left">{(companyInfo)?companyInfo.companyMotto:''}</h6>
     
            </div>
            <div className="col pull-right">
              <h6 class="text-black text-right">Since {(companyInfo)?  companyInfo.companyEst:''}</h6>
     
            </div>
     </div>


    </div>
     
    </ContainerFluid>
    </Header>
     <Container>
         
     <EmployeeListing companyInfo={this.showCompanyInfo} ></EmployeeListing>
     
     </Container></div>
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
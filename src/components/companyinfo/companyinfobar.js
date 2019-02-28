import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from "styled-components";
import * as employeeActions from '../actions/action';
import Container from '../../layouts/Container';
import Header from '../../layouts/Container';
import EmployeeListing from '../employees/employeeslist';
import moment from 'moment';
import _ from 'lodash';
const ContainerFluid = styled.div`

`;


const NavBarHeader = styled.header`


`;
const Hr= styled.hr`
    -moz-border-bottom-colors: none;
    -moz-border-image: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #EEEEEE -moz-use-text-color #FFFFFF;
    border-style: solid none;
    border-width: 1px 0;
    margin: 18px 0;
 
`;
export class CompanyInfoBar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         
        };
        this.showCompanyInfo=this.showCompanyInfo.bind(this);
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
            this.showCompanyInfo(employees.companyInfo);
            return;
        }
     console.log(nextProps); 
    }
    showCompanyInfo(companyInfo){
        this.setState({companyInfo});
    }

    onSortChange=(sortSelection)=>{
        debugger;
        let tempEmployees=_.cloneDeep(this.state.employeeReceived);
       
        let filterEmployees=_.orderBy(tempEmployees.employees,sortSelection.value,'asc');
       
        tempEmployees.employees=filterEmployees;
        this.setState({employees:tempEmployees});

    };

    onSearch=(searchQuery)=>{
      
        let tempEmployees=_.cloneDeep(this.state.employeeReceived);
        if(searchQuery==="")
        {
            this.setState({employees:tempEmployees});
            return;
        }
       

        let filterEmployees= tempEmployees.employees.filter(x=>{
            if((x.firstName.toUpperCase().indexOf(searchQuery.toUpperCase())===0)||(x.lastName.toUpperCase().indexOf(searchQuery.toUpperCase())===0))
            {
                return x;
            }
        } );
        tempEmployees.employees=filterEmployees;
        this.setState({employees:tempEmployees});
    };

    render(){
        
        const {employees,show,selectedEmployee,companyInfo}=this.state;
        const {fetchEmployees}=this.props;
        return(<div>
            <Header>
           <ContainerFluid>

  <ContainerFluid className="container-fluid">
     <ContainerFluid className="row">
     <ContainerFluid className="col">
              <h1 className="text-black  text-left">{(companyInfo)?companyInfo.companyName:''}</h1>
     
            </ContainerFluid>
     </ContainerFluid>
     <ContainerFluid className="row">
     <ContainerFluid className="col">
              <h6 class="text-black text-left">{(companyInfo)?companyInfo.companyMotto:''}</h6>
     
            </ContainerFluid>
            <ContainerFluid className="col pull-right">
              <h6 class="text-black text-right">Since {(companyInfo)? moment(companyInfo.companyEst).format('ddd D MMM YYYY') :''}</h6>
     
            </ContainerFluid>
     </ContainerFluid>

      <Hr></Hr>
    </ContainerFluid>
     
    </ContainerFluid>
    </Header>
     <Container>
         
     <EmployeeListing data={employees} fetchEmployees={fetchEmployees} onSearch={this.onSearch} sortHandle={this.onSortChange} ></EmployeeListing>
     
     </Container></div>
        );
    }
}
export const mapStateToProps = state => {
    const { employees,fetchEmployees } = state.form;
    return {
     employees,fetchEmployees
    };
  };
export default connect(mapStateToProps,employeeActions)(CompanyInfoBar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeHeader from './employeeheader';
import styled from 'styled-components';
import EmployeeCardView from './employeecardview';
import EmployeeDetails from './employeedetails';
import _ from 'lodash';
const Container=styled.div`
`;
const ImagePlaceholder= styled.div`
  
  float:left;
`;


export class EmployeeListing extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         show:false,
        };
    }
    componentWillMount() {
      
      }
      componentWillUpdate(nextProps) {
     
    }
    handleModalClose=()=>{

        this.setState({
            show:false,
            selectEmployee:{}
        });
    };

    selectedEmployee=(selectedEmployee)=>{
        
        this.setState({show:true,selectedEmployee});
    }
     hideModal=()=>{
         this.setState({show:!this.state.show});
     };
     onSearch=(searchQuery)=>{
         this.props.onSearch(searchQuery);
        
     };
    render(){
        const {show,selectedEmployee}=this.state;
        const{data}=this.props
         return( <Container className="container">
                 <Container className="row">
             <EmployeeHeader onSearch={this.onSearch}  sortHandler={this.props.sortHandle}></EmployeeHeader>
            <hr/>
            </Container>
            {data ? <EmployeeCardView data={data.employees} selectEmployee={this.selectedEmployee} ></EmployeeCardView>:null}
             
            
             <EmployeeDetails show={show} data={selectedEmployee} closeModal={this.handleModalClose} onBackdropClick={this.hideModal}></EmployeeDetails> 
        </Container>
        
       );
    }
}

export default EmployeeListing;
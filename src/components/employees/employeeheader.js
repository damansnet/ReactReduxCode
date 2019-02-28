import React, { Component } from 'react';

import Select from 'react-select';
import styled from 'styled-components';


const sortOptions = [
  { value:'', label:'None'},
  { value: 'firstName', label: 'First Name' },
  { value: 'lastName', label: 'last Name' },
  { value: 'dateJoined', label: 'Date Joined' }
];

export class EmployeeHeader extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedOption:null,
        };
    }
    componentWillMount() {
       
      }
      componentWillUpdate(nextProps) {
         
          
    }
    onChange=(event)=>{
       
        if(event.target.value.length>2)
        {
            this.props.onSearch(event.target.value);
        }
        else
        {
            this.props.onSearch("");
        }
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.props.sortHandler(selectedOption);
      }

    render(){
       // const {selectedOption}=this.props.employees;
        const {selectedOption}=this.state;    
        return(<div className="container-fluid">
         <div className="row">
          <div className="col">
          <p className="text-left"><h3> Our Employees</h3></p>
          </div>
          <div className="col text-left">
         
          <span ><Select className="form-group" style={{height:'30px!important;'}} placeholder="sort by"
        value={selectedOption}
        onChange={this.handleChange}
        options={sortOptions}
      /></span>
          </div>
          <div className="col">
          <p className="text-right"> <input type='text' className="form-group" placeholder="search" onChange={this.onChange} ></input>  </p>
          </div>
         </div>
      </div>);
    }
}

export default EmployeeHeader;
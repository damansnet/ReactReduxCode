import React, { Component } from 'react';


import styled from 'styled-components';

const ImagePlaceholder= styled.div`
  
  float:left;
`;

export class EmployeeCardView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         
        };
   }
    
    componentWillMount()
    {

    }
    showModal(selectEmployee) {
    this.props.selectEmployee(selectEmployee);
      }
   render()
   {
       const displayEmployees=(selectEmployee)=>{
         
              return (
                <div className="card"  onClick={()=>this.showModal(selectEmployee)} >
                <div className="card-body text-center">
                   <ImagePlaceholder>
                   <p><img className=" img-fluid" src={selectEmployee.avatar} alt="card image"/></p>
                   </ImagePlaceholder>
                    
                    <h4 className="card-title"><b>{selectEmployee.firstName} {selectEmployee.lastName}</b></h4>
                    <p className="card-text">{selectEmployee.bio}</p>
                    
                </div>
            </div>
               )
         
       }

    return ([
        <div className="row">
        <div className="card-columns">
        {this.props.data ? this.props.data.employees.map((item,idx)=>{
                return displayEmployees(item);
        }):null}
         
        
       </div>
   </div>
 ]
    );
   }
}

export default EmployeeCardView;
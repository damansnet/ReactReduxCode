import React, { Component } from 'react';


import styled from 'styled-components';

const Card=styled.div`
`;
const NameText=styled.h5`
  padding-left:7px;
  font-weight:bold;
`;
const ImagePlaceholder= styled.div`
padding-left:5px;
  float:left;
`;
const BioText=styled.p`
overflow: hidden;
text-overflow:ellipsis;
text-align:left;
height:95px;
padding-left:5px;
`;
const CardBody =styled.div`
 padding: 5px, 5px, 5px, 5px;
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
                <Card className="card"  onClick={()=>this.showModal(selectEmployee)} >
                <CardBody className="card-body text-center">
                   <ImagePlaceholder>
                   <p><img className=" img-fluid" src={selectEmployee.avatar} alt="card image"/></p>
                   </ImagePlaceholder>
                    
                    <NameText className="card-title text-left">{selectEmployee.firstName} {selectEmployee.lastName}</NameText>
                    <BioText>{selectEmployee.bio}</BioText>
                    
                </CardBody>
            </Card>
               )
         
       }

    return ([
        <div className="row">
        <div className="card-columns">
        {this.props.data ? this.props.data.map((item,idx)=>{
                return displayEmployees(item);
        }):null}
         
        
       </div>
   </div>
 ]
    );
   }
}

export default EmployeeCardView;
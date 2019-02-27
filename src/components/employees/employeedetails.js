import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';
import styled from 'styled-components';
const ImagePlaceholder= styled.div`
  
  float:left;
`;

export class EmployeeDetails extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
         
        };
   }
    
    componentWillMount()
    {

    }
   render()
   {
      const {data}=this.props;

    return (
        <Modal visible={this.props.show} dialogClassName="modal-lg" onClickBackdrop={this.props.onBackdropClick}>
        <div className="modal-header">
        
        </div>
        <div className="modal-body">
        <div className="container">
           <div className="row">
            <div className="col">
            <ImagePlaceholder>
            <p><img className=" img-fluid" src={(data)?data.avatar:''} alt="card image"/></p>
            <p>{(data)?data.jobTitle:''}</p>
            <p>{(data)?data.age:''}</p>
            <p>{(data)?data.dateJoined:''}</p>
            </ImagePlaceholder>
            <p><b>{(data)?data.firstName+' '+data.lastName:''}</b></p>
            <p><hr/></p>
            <p><b>{(data)?data.bio:''}</b></p>
            </div>
           </div>
        </div>
        </div>
        <div className="modal-footer">
          
        </div>
      </Modal>
    );
   }
}

export default EmployeeDetails;
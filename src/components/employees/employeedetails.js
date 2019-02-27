import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';



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
          <h5 className="modal-title">Test modal</h5>
        </div>
        <div className="modal-body">
          {data ? data.emailAddress : null}
        </div>
        <div className="modal-footer">
          
        </div>
      </Modal>
    );
   }
}

export default EmployeeDetails;
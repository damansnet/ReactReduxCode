import React, { Component } from 'react';
import Container from './layouts/Container';
import Header from './layouts/Container';
import logo from './logo.svg';
import './App.css';
import EmployeeListing from './components/employees/employeeslist';
import CompanyInfoBar from './components/companyinfo/companyinfobar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <CompanyInfoBar></CompanyInfoBar>
        </Header>
         <Container>
         
          <EmployeeListing></EmployeeListing>
          
          </Container>
        
      </div>
    );
  }
}

export default App;

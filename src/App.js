import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import CompanyInfoBar from './components/companyinfo/companyinfobar';
class App extends Component {
  render() {
    return (
      <div className="App">
       
          <CompanyInfoBar></CompanyInfoBar>
        
      </div>
    );
  }
}

export default App;

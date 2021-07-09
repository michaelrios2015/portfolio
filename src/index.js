import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Test from './components/Test';

class App extends Component{
  constructor(){
    super();
    this.state = {
    };
  }


  render(){

    return (
      <div>
        <Test/>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
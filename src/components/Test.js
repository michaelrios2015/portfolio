import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class Test extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      loading: true
    };
  }
  componentDidMount(){
    this.setState({
      // users: (await axios.get('/api/users')).data,
      users: [{id:1, name: 'mike'}],
      loading: false
    });

  }
  render(){
    const { users, loading } = this.state;
    if(loading){
      return '....loading';
    }
    return (
      // <ul>
      //   {
      //     users.map( user => { 
      //       return (
      //         <li key={ user.id }>
      //           { user.name }
      //         </li>
      //       );
      //     })
      //   }
      // </ul>
      <h4>My future website</h4>
    );
  }
}

export default Test;
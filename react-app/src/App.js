import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

import { Col } from 'react-bootstrap/lib/';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      listItems: []
    };

    this.getItems = this.getItems.bind(this);
  }

  getItems(url){
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(returnedData => {
        this.setState({
          listItems: returnedData
        });
        console.log(this.state.listItems);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount(){
    this.getItems(`${this.props.baseUrl}/todo-get/`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> 

        <Col sm={12} md={10} mdOffset={1}>

        </Col>

      </div>
    );
  }
}

export default App;

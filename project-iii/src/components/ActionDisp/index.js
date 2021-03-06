import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal";
import "./style.css";

class Dashboard extends Component {
    state = { show: false }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      return (
        <main>
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button type='button' onClick={this.showModal}>Open</button>
        </main>
      )
    }
  }
  

  
  
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<Dashboard />, container);

  export default Dashboard;
import React, { Component } from 'react';
// import Home from './Home';

export default class Cricket extends Component {
  render() {
    return (
      <div className="container text-center">
      <div className="row">
         <div className="col-12">
             <h2>{this.props.q} </h2>
             {/* <Home/> */}
         </div>
      </div>
   </div>
    );
  }
}

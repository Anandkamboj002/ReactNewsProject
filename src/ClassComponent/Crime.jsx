import React, { Component } from 'react';

export default class Crime extends Component {
  render() {
    return (
      <>
        <div className="container text-center">
           <div className="row">
              <div className="col-12">
                  <h2>{this.props.q} Page</h2>
              </div>
           </div>
        </div>
      </>
    );
  }
}

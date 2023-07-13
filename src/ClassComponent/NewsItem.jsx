import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card">
            <img src={this.props.pic} height="170px" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{this.props.title.slice(0,80)}</h5>
             <div className="carda">
               <h6 className="card-source">{this.props.source}</h6>
                <h6 className="card-source">{this.props.date}</h6>
             </div>
              <hr/>

              <p class="card-text">
                {this.props.description}
              </p>
              <a href={this.props.url} target="_blank" rel="noreferrer" class="btn btn-primary">
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

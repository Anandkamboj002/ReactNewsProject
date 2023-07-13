import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class Home extends Component {
  constructor()
  {
     super()
     this.state = {
        articles : [],
        totalResults  : 0,
        page : 1
     }
  }

  getApiData = async()=>{
       try{
        console.log(this.props.q)
          var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&sortBy=publishedAt&language=${this.props.language}&apiKey=d06100e99dd84737abb613e98b48cbd5`);
          response = await response.json()
          console.log(response);
          this.setState({
             articles:response.articles,
             totalResults: response.totalResults
          })
       }
       catch(error){
          
       }
  }
  componentDidMount()
  {
    // console.log("Hello")
    // console.log(this.props.q)
      this.getApiData()
  }

  componentDidUpdate(old)
  {
      if(this.props!==old)
      {
          this.getApiData()
      }
  }
   
  render() {
    return (
      <>
      {/* <h2>{this.props.q}</h2> */}
        <div className="container text-center">
           <div className="row">
              <div className="col-12">
                  <h2>{this.props.q} Page</h2>
              </div>
           </div>
        </div>
       <div className="container-fluid">
          <div className="row">
          {
              this.state.articles.map((item,index)=>{
              return <NewsItem key={index} source={item.source.name}
                      title={item.title} description = {item.description}
                      url={item.url}
                      pic = {item.urlToImage}
                      date = {item.publishedAt}
              />
             })
          }
          </div>
       </div>
      </>
    );
  }
}

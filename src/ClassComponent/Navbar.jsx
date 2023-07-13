import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  constructor()
  {
      super()
      this.state = {
          language : "Hindi"
      }
  }

  setLanguage()
  {
       if(this.state.language === "Hindi")
       {
        console.log("Hindi")
           document.getElementById("hin").innerHTML = this.state.language
           this.setState({language:"English"})
           this.props.changeLanguage("en")
           
       }else{
        console.log("English")
        document.getElementById("hin").innerText = this.state.language
        this.setState({language:"Hindi"})
        this.props.changeLanguage("hi")
       }
  }

  
  render() {
    return (
      <>
          <nav className="navbar navbar-expand-lg background sticky-top bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/cricket">Cricket</Link>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" href="#">Cricket</a> */}
        {/* </li> */}

        <li className="nav-item">
          <Link className="nav-link text-white" to="/politics">Politics</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/crime">Crime</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/ipl">IPL</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="entertainment">Entertainment</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/education">Education</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/covid">Covid 19</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/jokes">Jokes</Link></li>
          </ul>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"  onChange={()=>this.setLanguage()} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="hin">Hindi</label>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    );
  }
}

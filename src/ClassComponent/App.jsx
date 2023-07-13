import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
// import Cricket from './Cricket'
// import Covid from './Covid'
// import Crime from './Crime'
// import Education from './Education'
// import Entertainment from './Entertainment'
// import Ipl from './Ipl'
// import Jokes from './Jokes'
// import Politics from './Politics';
// import Science from './Science'
// import Sports from './Sports'
// import Technology from './Technology'


export default class App extends Component {
  constructor()
  {
     super()
     this.state = {
        language : "hi"
     }
  }

  changeLanguage = (data)=>{
      this.setState({language:data})
  }

  render() {
    return (
       <>
         <BrowserRouter>
            <Navbar changeLanguage={this.changeLanguage}/>
            <Routes>
                <Route path="/" element={<Home  q="All"/>}/>
                <Route path="/cricket" element={<Home language={this.state.language} q="Cricket"/>}/>
                <Route path="/politics" element={<Home language={this.state.language} q="Politics"/>}/>
                <Route path="/covid" element={<Home language={this.state.language} q="Covid"/>}/>
                <Route path="/crime" element={<Home language={this.state.language} q="Crime"/>}/>
                <Route path="/education" element={<Home language={this.state.language} q="Education"/>}/>
                <Route path="/entertainment" element={<Home language={this.state.language} q="Entertainment"/>}/>
                <Route path="/ipl" element={<Home language={this.state.language} q="IPL"/>}/>
                <Route path="/jokes" element={<Home language={this.state.language} q="Jokes"/>}/>
                <Route path="/politics" element={<Home language={this.state.language} q="Politics"/>}/>
                <Route path="/science" element={<Home language={this.state.language} q="Science"/>}/>
                <Route path="/sports" element={<Home v q="Sports"/>}/>
                <Route path="/technology" element={<Home language={this.state.language} q="Technology"/>}/>
            </Routes>
            <Footer/>
         </BrowserRouter>
       </>
    );
  }
}

import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/avatar';
import Introduction from './components/introduction';
import About from './components/about';

class App extends Component {
  render() {
    return <main className="app">
             <Avatar />
             <Introduction />
             <About />
           </main>;
  }
}

export default App;

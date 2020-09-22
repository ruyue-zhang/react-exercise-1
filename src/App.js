import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/avatar';
import Introduction from './components/introduction';

class App extends Component {
  render() {
    return <main className="app">
             <Avatar />
             <Introduction />
           </main>;
  }
}

export default App;

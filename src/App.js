import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <Navbar/>
      <News category ="general" country="in"/>
      </>
    )
  }
}

export default App



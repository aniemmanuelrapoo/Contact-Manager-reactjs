import React, { Component } from 'react';
import './App.css'
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header branding="Contact Manager" />
        <Contact name='Emmanuel Rapoo' email="Emmanuelrapoo@gmail.com" phone="555-555-5555" />

        <Contact name='Light Bro' email="Lightbro@gmail.com" phone="333-333-3333" />
      </div>
    );
  }
}

export default App;

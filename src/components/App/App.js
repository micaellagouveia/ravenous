import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <BusinessList />
        <SearchBar />
      </div>
    );
  }
}
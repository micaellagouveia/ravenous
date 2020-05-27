import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'

// Esse objeto é o objeto central, que possui as informações do business
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

// array de business
const businesses = [business, business, business, business, business, business]

// No método render vai ser retornado um componente BusinessList que recebe um atributo q possui a lista de business
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <BusinessList businesses={businesses} /> 
        <SearchBar />
      </div>
    );
  }
}
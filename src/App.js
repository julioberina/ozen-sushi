import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let menu = require('./menu.json');
    let k = 0;

    return (
      <div className="App">
        <h1>Ozen Sushi Menu</h1>
        {
          Object.keys(menu).map(category => {
            return (
              <div>
                <h3>{category}</h3>
                <ul>
                  {
                    menu[category].map(item => {
                      return (
                        <span>
                          <li key={k++}>{item.name}</li>
                          <li key={k++}>{item.description}</li>
                          <li key={k++}>{item.price}</li>
                          <br />
                        </span>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;

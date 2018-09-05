import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./main.js";
import Header from "./Header.js";
class App extends Component {
  render() {
    return (
      <div >
          <Header/>
          <Main/>
      </div>
    );
  }
}

export default App;
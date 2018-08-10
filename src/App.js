import React, { Component } from 'react';
import './App.css';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button value="按钮" onClick={this.z.bind(this)} />
        <Button value="按钮" />
        <Button value="按钮" />
      </div>
    );
  }
  z(klsjadlksajdlksajdlksjlsjl) {
    console.log('外面的函数')
    console.log(klsjadlksajdlksajdlksjlsjl);
  }
}

export default App;

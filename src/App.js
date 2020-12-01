import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import ViewCtrl from './components/ViewCtrl'


class App extends Component{
  render() {
    return (
      <div className="App" style={{
        
        width: "100%",
        height: "800px"
      }}>
        <ViewCtrl/>
      </div>
    );
  }
}




export default App;

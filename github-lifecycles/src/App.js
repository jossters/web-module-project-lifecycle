import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    github: [],
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/jossters')
    .then(res=>{
     
      this.setState({
        github: res.data
      });
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render(){
    return (
    <div className="App">
     <p>Hello</p>
    </div>
  );
} 
}

export default App;

import axios from "axios";
import React from "react";
import "./App.css";
import User from "./components/User";
import Followers from "./components/Followers";

class App extends React.Component {
  state = {
    github: [],
    followers: [],
  };

  async componentDidMount() {
    const [firstResp, secondResp] = await Promise.all([
      axios.get("https://api.github.com/users/jossters"),
      axios.get("https://api.github.com/users/jossters/followers"),
    ]);
    console.log(firstResp.data);
    this.setState({
      github: firstResp.data,
      followers: secondResp.data,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.github.name}!</h1>
        <div className="container">
          <User  data={this.state.github} />
          <div className="followers">
            <h3>Followers:</h3>
            {this.state.followers.map((followers) => {
              return <Followers key={followers.id} followers={followers} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

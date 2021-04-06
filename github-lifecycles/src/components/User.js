import React from 'react';

class User extends React.Component {
  
  render(){
    return (
    <div className="User">
    <h2>{this.props.data.login}</h2>
    <img src={this.props.data.avatar_url} alt={this.props.data.login}/><br></br>
    <a href={this.props.data.html_url}>{this.props.data.html_url}</a>
    <p>{this.props.data.followers_url}</p>
    <p>{this.props.data.following_url}</p>
    <p>{this.props.data.repos_url}</p>

    </div>
  );
} 
}

export default User;
import React from 'react';
import User from './User';

class GithubCard extends React.Component {


  render(){
    return (
    <div className="GithubCard">
     <User data={this.props.data}/>
    </div>
  );
} 
}

export default GithubCard;
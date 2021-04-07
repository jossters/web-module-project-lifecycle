import React from 'react';

const Followers = props => {
    return (
    <div className="Followers">
    <h2>{props.followers.login}</h2>
    <img src={props.followers.avatar_url} alt={props.followers.login}/><br></br>
    <a href={props.followers.html_url}>{props.followers.html_url}</a>
    <p>Followers: {props.followers.followers_url.length}</p>
    <p>Following: {props.followers.following_url.length}</p>
    <p>Repos: {props.followers.repos_url.length}</p>
    </div>
  );
} 
export default Followers;
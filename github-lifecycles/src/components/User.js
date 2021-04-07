import React from "react";

const User = (props) => {
  return (
    <div className="User">
      <h2>{props.data.login}</h2>
      <img src={props.data.avatar_url} alt={props.data.login} />
      <br></br>
      <a href={props.data.html_url}>{props.data.html_url}</a>
      <p>Followers: {props.data.followers}</p>
      <p>Following: {props.data.following}</p>
      <p>Repos: {props.data.repos_url}</p>
    </div>
  );
};
export default User;

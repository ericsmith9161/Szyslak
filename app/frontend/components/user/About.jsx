import React from 'react';

const About = ({displayName}) => {
  const date = new Date();

  return (
    <div className = "user-about">
      <ul>
        <li>
          <p className = "user-about-field">Display name</p>
          <p className="user-about-value">{displayName}</p>
        </li>
        <li>
          <p className = "user-about-field">Local time</p> 
          <p className="user-about-value">{`${date.getHours()}:${date.getMinutes()}`}</p>       
        </li>
      </ul>
    </div>
  )
}

export default About;
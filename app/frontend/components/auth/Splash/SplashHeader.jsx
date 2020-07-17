import React from 'react';
import {Link} from 'react-router-dom';
import moeGo from 'images/moego.png'

const SplashHeader = () => {
  return (
    <div className = "splash-header">
      <div className = "splash-header-resources">
        <div className = "logo-and-home-link">
          <img className="logo" src={window.moegoURL} width="30" />
          <img src={window.szyslakblackURL} height="30" />

        </div>
        <label> Eric Smith

        </label>
        <a href="https://github.com/ericsmith9161" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/eric-smith-8832b41aa/" target="_blank">LinkedIn</a>
        <a href="https://ericsmith9161.github.io/" target="_blank"> Portfolio</a>
        <a href="https://angel.co/u/eric-smith-105" target="_blank">Angel</a>
        <a href="https://www.facebook.com/profile.php?id=100047966766811" target="_blank">Facebook</a>
      </div>
      <div className = "splash-header-right">
        <Link to="/login">Sign in</Link>
        <button><Link to="/signup">GET STARTED</Link></button>
      </div>
      
      
    </div>
  )
}

export default SplashHeader;


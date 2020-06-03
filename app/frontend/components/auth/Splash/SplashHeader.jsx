import React from 'react';
import {Link} from 'react-router-dom';
import moeGo from 'images/moego.png'

const SplashHeader = () => {
  return (
    <div className = "splash-header">
      <div className = "splash-header-resources">
        <div className = "logo-and-home-link">
          <img className="logo" src={window.moegoURL} width="30" />
          <span>szyslak</span>
        </div>
        <label> Eric Smith

        </label>
        <a href="https://github.com/ericsmith9161" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/eric-smith-8832b41aa/" target="_blank">LinkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=100047966766811" target="_blank">Facebook</a>
        <label> Portfolio

        </label>
      </div>
      {/* button links to user page, will drop modal with workspaces if workspaces eventually added */}
      <button><Link to="/login">LAUNCH SZYLACK    <span>   ⧪</span></Link></button>
    </div>
  )
}

export default SplashHeader;

//replace workspace links with guest user links??
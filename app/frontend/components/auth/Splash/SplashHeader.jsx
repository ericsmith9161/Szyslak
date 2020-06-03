import React from 'react';
import {Link} from 'react-router-dom';

const SplashHeader = () => {
  return (
    <div className = "splash-header">
      {/* logo goes here */}
      <div className = "splash-header-resources">
        <label> Eric Smith

        </label>
        <a href="https://github.com/ericsmith9161">Github</a>
        <a href="https://www.linkedin.com/in/eric-smith-8832b41aa/">LinkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=100047966766811">Facebook</a>
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
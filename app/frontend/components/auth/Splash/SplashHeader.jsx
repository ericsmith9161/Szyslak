import React from 'react';

const SplashHeader = () => {
  return (
    <div className = "splash-header">
      {/* logo goes here */}
      <div className = "splash-header-resources">
        <label> Eric Smith

        </label>
        <label> Github

        </label>
        <label> LinkedIn

        </label>
        <label> Facebook

        </label>
        <label> Portfolio

        </label>
      </div>
      {/* button links to user page, will drop modal with workspaces if workspaces eventually added */}
      <button>LAUNCH SZYLACK</button>
    </div>
  )
}

export default SplashHeader;

//replace workspace links with guest user links??
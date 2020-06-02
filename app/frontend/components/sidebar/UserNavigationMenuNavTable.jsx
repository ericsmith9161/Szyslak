import React from 'react';
import {Link} from 'react-router-dom';

class UserNavigationMenuNavTable extends React.Component{
  render(){
    return (
      <div className = "user-navigation-menu-nav-table">
        <ul>
          <li> {/* icon */} Threads</li>
          <li> {/* icon */} Mentions & reactions</li>
          <li> {/* icon */} Drafts</li>
          <li> {/* icon */} Saved items</li>
          <li> {/* icon */} Channel browser</li>
          <li> {/* icon */} People</li>
          <li> {/* icon */} Apps</li>
          <li> {/* icon */} Files</li>
          
        </ul>
      </div>
    )
  }
}

export default UserNavigationMenuNavTable;

// how to get icons?
//change inner elements of li to links as functionality is built out
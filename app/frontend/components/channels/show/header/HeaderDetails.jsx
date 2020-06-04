import React from 'react';

import About from './header_details/DetailsAbout';
import Header from './header_details/DetailsHeader';
import MemberList from './header_details/DetailsMemberList'

class HeaderDetails extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <About />
        <MemberList />
      </div>
    )
  }
}

export default HeaderDetails;
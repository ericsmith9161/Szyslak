import React from 'react';

import Details from './header/HeaderDetails';
import Information from './header/HeaderInformation';

class ChannelShowHeader extends React.Component {

  render() {
    return (
      <div>
        <Details />
        <Information />
      </div>
    )
  }
}

export default ChannelShowHeader;
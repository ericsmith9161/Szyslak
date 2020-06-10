import React from 'react';
import DMShowHeader from './DMShowHeader';
import DMMessageListContainer from '../../messages/DMMessageListContainer';
import DMMessageFormContainer from '../../messages/DMMessageFormContainer';

class DMShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDirectMessage(this.props.match.params.directMessageId)
  }

  render() {
    if (this.props.directMessage === undefined) {
      return null;
    } else {
      return (
        <div className="dm-show full">
          <h1>more to come..</h1>
          <DMShowHeader directMessage={this.props.directMessage}/>
          <DMMessageListContainer />
          <DMMessageFormContainer />
        </div>
      )
    }
  }
}

export default DMShow;
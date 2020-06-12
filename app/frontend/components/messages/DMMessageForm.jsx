import React from 'react';
import { withRouter } from 'react-router-dom';

class DMMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: this.props.message.body };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchDirectMessage(this.props.match.params.directMessageId)
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body !== "") {
      let theRightDM = App.cable.subscriptions.subscriptions.filter((subscription) => subscription.identifier.direct_message_id === this.props.directMessageId)[0]
      theRightDM.speak({ body: this.state.body, user_id: this.props.message.user_id, messageable_type: 'DirectMessage', messageable_id: this.props.message.messageable_id, username: this.props.currentUser.username });
      this.setState({ body: "" });
    }
  }

  render() {
    if (this.props.directMessage === undefined) {
      return null;
    } else {
      return (
        <div className="message-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder={`Message #${this.props.directMessage.other_user_usernames.join(', ')}`}
            />
          </form>
          <button onClick={this.handleSubmit}>➲</button>
        </div>
      )
    }
  }
}

export default DMMessageForm;
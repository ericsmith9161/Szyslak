import React from 'react';
import { withRouter } from 'react-router-dom';

class DMMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: this.props.editMessageBody || this.props.message.body,
      hidden: ""
    };
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

  handleSubmit() {
    if (this.props.edit && this.state.body !== ""){
      this.props.editMessage({ body: this.state.body, user_id: this.props.message.user_id, messageable_type: 'DirectMessage', messageable_id: this.props.message.messageable_id, username: this.props.currentUser.username, id: this.props.editMessageId });
      let msgEditForm = document.getElementById(`${this.props.editMessageId}edit`)
      msgEditForm.classList.toggle("hidden")
    }
    else if (!this.props.edit && this.state.body !== "") {
      let theRightDM = App.cable.subscriptions.subscriptions[0];

      // let theRightDM = App.cable.subscriptions.subscriptions.filter((subscription) => subscription.identifier.direct_message_id === this.props.directMessageId)[0]
      theRightDM.speak({ body: this.state.body, user_id: this.props.message.user_id, messageable_type: 'DirectMessage', messageable_id: this.props.message.messageable_id, username: this.props.currentUser.username });
      this.setState({ body: "" });
    }
  }

  cancel() {
    let msgEditForm = document.getElementById(`${this.props.editMessageId}edit`)
    msgEditForm.classList.toggle("hidden")
  }

  render() {
    let formClass, formSubmit;
    if (this.props.edit) {
      formClass = `edit-message-form ${this.state.hidden}`;
      formSubmit =
        <div>
          <button onClick={() => this.cancel()}>Cancel</button>
          <button onClick={() => this.handleSubmit()}>Save Changes</button>
        </div>
    } else {
      formClass = "message-form";
      formSubmit = <button onClick={() => this.handleSubmit()}>➲</button>
    }

    if (this.props.directMessage === undefined) {
      return null;
    } else {
      return (
        <div className={formClass}>
          <form onSubmit={() => this.handleSubmit()}>
            <input
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder={`Message #${this.props.directMessage.other_user_usernames.join(', ')}`}
            />
          </form>
          {formSubmit}
        </div>
      )
    }
  }
}

export default DMMessageForm;
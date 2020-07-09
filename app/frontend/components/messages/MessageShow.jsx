import React from 'react';
import ChannelMessageFormContainer from './ChannelMessageFormContainer';
import DMMessageFormContainer from './DMMessageFormContainer'

class MessageShow extends React.Component{
  constructor(props){
    super(props);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseIn = this.mouseIn.bind(this);
  }

  mouseIn(){
    if (this.props.currentUserID === this.props.message.user_id){
      let msgOpts = document.getElementById(`${this.props.message.id}`)
      msgOpts.classList.remove("hidden")
    }
  }

  mouseOut(){
    if (this.props.currentUserID === this.props.message.user_id) {
      let msgOpts = document.getElementById(`${this.props.message.id}`)
      msgOpts.classList.add("hidden")
    }
  }

  editToggle(){
    let msgEditForm = document.getElementById(`${this.props.message.id}edit`)
    msgEditForm.classList.toggle("hidden")
  }
  
  render(){
    let avatar, editType;

    let suffix, timeStr;
    let time = this.props.message.created_at.slice(11, 16);
    let h = parseInt(time.slice(0,2));
    if(h > 12){
      h -= 12;
      suffix = " PM";
      timeStr = `${h}`.concat(":",time.slice(3,5),suffix)
    }else{
      suffix = " AM";
      timeStr = time.concat(suffix)
    }

    if (this.props.message.user_avatar === undefined){
      avatar = window.defaultavURL;
    }else{
      avatar = this.props.message.user_avatar;
    }

    if (this.props.message.messageable_type === "Channel"){
      editType = <ChannelMessageFormContainer editMessageBody={this.props.message.body} editMessageId={this.props.message.id} edit={true} />
    }else{
      editType = <DMMessageFormContainer editMessageBody={this.props.message.body} editMessageId={this.props.message.id} edit={true} />
    }

    if (this.props.lastMessageUser === this.props.message.user_id){
      return(
          <div className="trunc-message-content" onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut}>
            <div className="hidden" id={`${this.props.message.id}edit`}>
              {editType}
            </div>
            <div className="message-options hidden" id={`${this.props.message.id}`} >
              <button onClick={() => this.editToggle()}>
                <img src={window.pencilURL} height="16" />
              </button>
              <button onClick={() => this.props.deleteMessage(this.props.message.id)}>
                <img src={window.deleteURL} height="16" />
              </button>
            </div>
            {this.props.message.body}
          </div>
      )
    }else{
      return (
        <div className="message" onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut}>
          <div className="hidden" id={`${this.props.message.id}edit`}>
            {editType}
          </div>
          <div className="message-options hidden" id={`${this.props.message.id}`}>
            <button onClick={() => this.editToggle()}>
              <img src={window.pencilURL} height="16" />
            </button>
            <button onClick={() => this.props.deleteMessage(this.props.message.id)}>
              <img src={window.deleteURL} height="16" />
            </button>
          </div>
          <div>
            <img src={avatar} width="40" height="40" />
          </div>
          <div className="message-content">
            <div>
              <b>{this.props.message.username}</b>&nbsp;
            <span className="timestamps">{timeStr}</span>
            </div>
            <div>
              {this.props.message.body}
            </div>
          </div>
        </div>
      )
    }
  }

}

export default MessageShow;
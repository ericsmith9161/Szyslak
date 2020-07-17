import React from 'react';
import ChannelMessageFormContainer from './ChannelMessageFormContainer';
import DMMessageFormContainer from './DMMessageFormContainer'

class MessageShow extends React.Component{
  constructor(props){
    super(props);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseIn = this.mouseIn.bind(this);
    this.state = {edit: false}
  }

  mouseIn(){
    if (this.props.currentUserID === this.props.message.user_id){
      let msgEdit = document.getElementById(`${this.props.message.id}edit`);
      let msgOpts = document.getElementById(`${this.props.message.id}`);
      let msgEditForm = document.querySelector(`.edit-message-form`);
      if (msgEdit.classList.contains("hidden") || msgEditForm.classList.contains("hidden")){
        msgOpts.classList.remove("hidden")
      }
    }
  }

  mouseOut(){
    if (this.props.currentUserID === this.props.message.user_id) {
      let msgOpts = document.getElementById(`${this.props.message.id}`)
      msgOpts.classList.add("hidden")
    }
  }

  editToggle(){
    let msgEditForm = document.getElementById(`${this.props.message.id}edit`);
    let msgContent = document.getElementById(`${this.props.message.id}content`);

    msgEditForm.classList.toggle("hidden");
    msgContent.classList.toggle("hidden");
    // this.setState({edit: !this.state.edit});
  }
  
  render(){
    let avatar, editType, msgOpts, msgOptsClass, hideMsg, hideEdit;

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

    if (this.props.lastMessageUser === this.props.message.user_id) {
      msgOptsClass = "trunc-message-options hidden";
    }else{
      msgOptsClass = "message-options hidden";
    }

    if (this.state.edit){
      hideEdit = "";
      hideMsg = "hidden";
    }else{
      hideEdit = "hidden";
      hideMsg = "";
    }

    msgOpts = 
    <div className={msgOptsClass} id={`${this.props.message.id}`} >
      <button className="opts-btn" onClick={() => {this.editToggle(); this.mouseOut();}}>
        <img src={window.pencilURL}  />
      </button>
      <button className="opts-btn" onClick={() => this.props.deleteMessage(this.props.message.id)}>
        <img src={window.deleteURL}  />
      </button>
    </div>

    if (this.props.lastMessageUser === this.props.message.user_id) {
      return (
        <div className="trunc-message" onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut}>
          {msgOpts}
          <div className={`msg-edit-boy ${hideEdit}`} id={`${this.props.message.id}edit`}>
            {editType}
          </div>
          <div className={`trunc-message-content ${hideMsg}`} id={`${this.props.message.id}content`} >
            {this.props.message.body}
          </div>
        </div>
      )
    } else {
      return (
        <div className="mess">
          {msgOpts}
          <div className={`msg-edit-boy ${hideEdit}`} id={`${this.props.message.id}edit`}>
            {editType}
          </div>
          <div className="message" onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut}>
            <div>
              <img src={avatar} width="40" height="40" />
            </div>
            <div className="message-content">
              <div>
                <b>{this.props.message.username}</b>&nbsp;
            <span className="timestamps">{timeStr}</span>
              </div>
              <div className={`${hideMsg}`} id={`${this.props.message.id}content`}>
                {this.props.message.body}
              </div>
            </div>
          </div>
        </div>

      )
    }
  }

}

export default MessageShow;
import React from 'react';
import { closeModal } from '../../../../actions/modal_actions';

class ChannelTopic extends React.Component{
  constructor(props){
    super(props)
    this.state = {topic: this.props.topic};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeMind = this.changeMind.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
    this.props.fetchChannel(this.props.location.pathname.split("/")[2])
  }

  handleChange(e){
    e.preventDefault;
    this.setState({topic: e.currentTarget.value})
  }

  changeMind(e){
    e.preventDefault;
    this.props.closeModal();
  }

  handleSubmit(e){
    e.preventDefault;
    const newChannel = Object.assign({}, this.props.channel, {topic: this.state.topic});
    this.props.editChannel(newChannel);
    this.props.closeModal();
  }

  render(){
    return(
      <div className="channel-topic-form">
        <div className="c-t-f-head">
          <h1>Edit Channel Topic</h1>
          <button onClick={this.changeMind}><img src={window.xURL} width="12"/></button>
        </div>

        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.topic}
            onChange={this.handleChange}
          />
          <div className="c-t-f-buttons">
            <button onClick={this.changeMind}>Cancel</button>
            <button onClick={this.handleSubmit}>Set topic</button>
          </div>
        </form>
      </div>
    )
  }

}

export default ChannelTopic;
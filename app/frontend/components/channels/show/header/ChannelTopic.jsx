import React from 'react';

class ChannelTopic extends React.Component{
  constructor(props){
    super(props)
    this.state = {topic: this.props.topic};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
    this.props.fetchChannel(this.props.location.pathname.split("/")[2])
  }

  handleChange(e){
    e.preventDefault;
    this.setState({topic: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault;
    this.props.channel.topic = this.state.topic;
  }

  render(){
    return(
      <div className="channel-topic-form">
        <h1>Edit Channel Description</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.topic}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Change topic</button>
        </form>
      </div>
    )
  }

}

export default ChannelTopic;
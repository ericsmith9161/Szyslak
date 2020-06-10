import React from 'react';

class DMForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchUserDirectMessages(this.props.currentUserId);
    this.handleDM = this.handleDM.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDM(e){
    let changedPath = false;
    e.preventDefault();

    // if DM already exists find it

    for(let i = 0; i < this.props.directMessages.length; i++){
      if(this.props.directMessages[i].subscribed_users.includes(e.currentTarget.value))
      {
        this.props.history.push(`/direct_messages/${this.props.directMessages[i].id}`);
        changedPath = true;
        this.props.closeModal();
      }
    }

     // if DM doesn't already exist make it

    if (changedPath === false){
      console.log(e.currentTarget.value)
      this.props.createDirectMessage({messagee_ids:[e.currentTarget.value]}).then(action =>
        this.props.history.push(`/direct_messages/${action.direct_message.id}`));
      this.props.closeModal();
    }
  }

  handleSearch(e){
    e.preventDefault();
    let filteredUsers;
    filteredUsers = this.props.users.filter((user) => user.username.includes(e.currentTarget.value))
    this.setState({searchQuery: e.currentTarget.value});
    this.setState({filteredUsers: filteredUsers})
  }

  render(){
    let searchList, searchListWithAvs, avatar;

    if (this.state.filteredUsers !== undefined){
      searchList = this.state.filteredUsers;
    }else{
      searchList = this.props.users;
    }

    searchListWithAvs = searchList.map(user => {
      if (user.avatarURL === undefined){
        avatar = window.defaultavURL;
      }else{
        avatar = user.avatarURL;
      }

      return(
        <li key={user.id} value={user.id} onClick={this.handleDM}>
          <img src={avatar} width="40"/>
          <h1>{user.username}</h1>
        </li>
      )});

    return(
      <div className="dm-form">
        <div className="dm-form-head">
          <h1>Direct Messages</h1>
          <button><img src={window.xURL} width="11"/></button>
        </div>
        <input 
          type="text"
          className="user-search-dm-form"
          value={this.state.searchQuery}
          placeholder="Find or start a conversation"
          onChange={this.handleSearch}
        />

        <ul className="dm-form-user-list">
          {searchListWithAvs}
        </ul>

      </div>
    ) 
  }


}

export default DMForm;
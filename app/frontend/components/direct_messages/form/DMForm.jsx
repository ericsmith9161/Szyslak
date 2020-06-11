import React from 'react';

class DMForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { DMRecipientIDs: [], DMRecipientNames: []};
    this.handleDM = this.handleDM.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchUserDirectMessages(this.props.currentUserId);
    this.handleDM = this.handleDM.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.removeUserFromRecipients = this.removeUserFromRecipients.bind(this);
  }

  componentDidUpdate(){
    let submitBtn = document.querySelector(".submit-btn");
    let dmForm = document.querySelector(".user-search-dm-form")
    if (this.state.DMRecipientIDs.length !== 0){
      if (!submitBtn.hasAttribute(".submitable")){
        submitBtn.classList.add("submitable")
        dmForm.classList.add("no-placeholder")
      }
    }else{
      if (submitBtn){
        submitBtn.classList.remove("submitable")
      }
    }
  }

  handleDM(e){
    let changedPath = false;
    e.preventDefault();

    // if DM already exists find it

    if (this.state.filteredUsers == this.state.users || this.state.filteredUsers === undefined){
      for (let i = 0; i < this.props.directMessages.length; i++) {
        if (this.props.directMessages[i].subscribed_users.includes(e.currentTarget.value)) {
          this.props.history.push(`/direct_messages/${this.props.directMessages[i].id}`);
          changedPath = true;
          this.props.closeModal();
        }
      }
    }

     // if DM doesn't already exist add user to recipients

    if (changedPath === false){
      this.setState({searchQuery: "", filteredUsers: this.props.users})
      if (!this.state.DMRecipientIDs.includes(e.currentTarget.value)){
        this.setState({DMRecipientNames: this.state.DMRecipientNames.concat([this.props.usersPOJO[e.currentTarget.value].username]),
          DMRecipientIDs: this.state.DMRecipientIDs.concat(e.currentTarget.value)})
      }
      // this.props.createDirectMessage({messagee_ids:[e.currentTarget.value]}).then(action =>
      //   this.props.history.push(`/direct_messages/${action.directMessage.id}`));
      // this.props.closeModal();
    }
  }

  handleSearch(e){
    e.preventDefault();
    let filteredUsers;
    filteredUsers = this.props.users.filter((user) => user.username.includes(e.currentTarget.value))
    this.setState({searchQuery: e.currentTarget.value});
    this.setState({filteredUsers: filteredUsers})
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)
    console.log(this.state.DMRecipientIDs.length)
    if (this.state.DMRecipientIDs.length !== 0){
      console.log("made it here")
      this.props.createDirectMessage({ messagee_ids: this.state.DMRecipientIDs }).then(action =>
        this.props.history.push(`/direct_messages/${action.directMessage.id}`));
      this.props.closeModal();
    }
  }

  removeUserFromRecipients(idx){
    this.setState({
      DMRecipientNames: this.state.DMRecipientNames.slice(0, idx).concat(this.state.DMRecipientNames.slice(idx+1)),
      DMRecipientIDs: this.state.DMRecipientIDs.slice(0, idx).concat(this.state.DMRecipientIDs.slice(idx + 1)),
    })
  }

  render(){
    let searchList, searchListWithAvs, avatar;
    console.log(this.state.filteredUsers)

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
      if(user.id === this.props.currentUserId){
        return null;
      }else{
        return (
          <li key={user.id} value={user.id} onClick={this.handleDM}>
            <img src={avatar} width="40" />
            <h1>{user.username}</h1>
          </li>
        )
      }
    });

    return(
      <div className="dm-form">
        <div className="dm-form-head">
          <h1>Direct Messages</h1>
          <button onClick={() => this.props.closeModal()}><img src={window.xURL} width="11" /></button>
        </div>
        <div className="flexible-top">
          <div className = "weirdo-input">
            <ul className="recipient-list">
              {this.state.DMRecipientNames.map((name, idx) => {
                return (
                  <li key={idx} tabIndex="0" className="recipient-list-item">
                    <span className="recipient-name">{name}</span><button className= "remove-recipient-btn" onClick={() => this.removeUserFromRecipients(idx)}><img src={window.xURL} width="10" /></button>
                  </li>
                )
              })}
            </ul>
            <input
              type="text"
              className="user-search-dm-form"
              value={this.state.searchQuery}
              placeholder={this.state.DMRecipientIDs.length === 0 ? "Find or start a conversation" : ""}
              onChange={this.handleSearch}
            />
          </div>
          <button className="submit-btn" onClick={this.handleSubmit}>Go</button>
        </div>
        <ul className="dm-form-user-list">
          {searchListWithAvs}
        </ul>

      </div>
    ) 
  }


}

export default DMForm;

//add avatars when users are clicked on
//toggle placeholder not working
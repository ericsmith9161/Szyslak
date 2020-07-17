import React from 'react';

import {withRouter} from 'react-router-dom';

class AddPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ChannelAddIDs: [], ChannelAddNames: [], ChannelAddAvs: [], channelUsers: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchChannel(this.props.currentChannelId);
    this.props.fetchChannelUsers(this.props.currentChannelId).then((action) => 
    this.setState({channelUsers: Object.values(action.users).map((user) => user.id)}));
    this.props.fetchUsers();

  }

  componentDidUpdate() {
    let submitBtn = document.querySelector(".submit-btn-add-ppl");
    let userList = document.querySelector(".channel-form-user-list");
    if (this.state.searchQuery !== "" && this.state.searchQuery !== undefined){
      userList.classList.remove("hidden")
    }else{
      userList.classList.add("hidden")
    }
    if (this.state.ChannelAddIDs.length !== 0) {
      if (!submitBtn.hasAttribute(".submitable")) {
        submitBtn.classList.add("submitable")
      }
    } else {
      if (submitBtn) {
        submitBtn.classList.remove("submitable")
      }
    }
  }

  handleAdd(e) {
    let changedPath = false;
    e.preventDefault();

    if (changedPath === false) {
      this.setState({ searchQuery: "", filteredUsers: this.props.users })
      let avatar;
      if (this.props.usersPOJO[e.currentTarget.value].avatarURL === undefined) {
        avatar = window.defaultavURL;
      } else {
        avatar = this.props.usersPOJO[e.currentTarget.value].avatarURL;
      }
      if (!this.state.ChannelAddIDs.includes(e.currentTarget.value)) {
        this.setState({
          ChannelAddNames: this.state.ChannelAddNames.concat([this.props.usersPOJO[e.currentTarget.value].username]),
          ChannelAddIDs: this.state.ChannelAddIDs.concat(e.currentTarget.value),
          ChannelAddAvs: this.state.ChannelAddAvs.concat([avatar])
        })
      }
    }
  }

  handleSearch(e) {
    e.preventDefault();
    let filteredUsers;
    filteredUsers = this.props.users.filter((user) => user.username.includes(e.currentTarget.value))
    this.setState({ searchQuery: e.currentTarget.value });
    this.setState({ filteredUsers: filteredUsers })
  }

  handleSubmit(e) {

    e.preventDefault();
    if (this.state.ChannelAddIDs.length !== 0) {
      this.props.editChannel(Object.assign({}, this.props.currentChannel, { new_subs: this.state.ChannelAddIDs }));
      this.props.closeModal();
    }
  }

  removeUserFromRecipients(idx) {
    this.setState({
      ChannelAddNames: this.state.ChannelAddNames.slice(0, idx).concat(this.state.ChannelAddNames.slice(idx + 1)),
      ChannelAddIDs: this.state.ChannelAddIDs.slice(0, idx).concat(this.state.ChannelAddIDs.slice(idx + 1)),
      ChannelAddAvs: this.state.ChannelAddAvs.slice(0, idx).concat(this.state.ChannelAddAvs.slice(idx + 1)),


    })
  }

  render() {
    let searchList, searchListWithAvs, avatar;

    if (this.state.filteredUsers !== undefined) {
      searchList = this.state.filteredUsers;
    } else {
      searchList = this.props.users;
    }
    if (this.state.searchQuery === "" || this.state.searchQuery === undefined){
      searchListWithAvs = null
    }else{
      searchListWithAvs =
        searchList.map(user => {
          if (user.avatarURL === undefined) {
            avatar = window.defaultavURL;
          } else {
            avatar = user.avatarURL;
          }
          if ((this.state.channelUsers.length !== 0) && (this.state.channelUsers.includes(user.id))) {
            return null;
          } else {
            return (
              <li key={user.id} value={user.id} onClick={this.handleAdd}>
                <img src={avatar} width="40" />
                <h1>{user.username}</h1>
              </li>
            )
          }
        });
    }


    return (
      <div>
        <div className="add-people-form">
          <div className="add-people-form-head">
            <div>
              <h1>Add People</h1>
              <p>{this.props.currentChannel.name}</p>
            </div>
            <button onClick={() => this.props.closeModal()}><img src={window.xURL} width="11" /></button>
          </div>
          <div className="channel-flexible-top">
            <div className="channel-weirdo-input">
              <ul className="recipient-list">
                {this.state.ChannelAddNames.map((name, idx) => {
                  return (
                    <li key={idx} tabIndex="0" className="channel-recipient-list-item">
                      <span><img className="recipient-av" src={this.state.ChannelAddAvs[idx]} width="40" /></span><span className="recipient-name">{name}</span><button className="remove-recipient-btn" onClick={() => this.removeUserFromRecipients(idx)}><img src={window.xURL} width="10" /></button>
                    </li>
                  )
                })}
              </ul>
              <input
                type="text"
                className="user-search-channel-form"
                value={this.state.searchQuery}
                placeholder={this.state.ChannelAddIDs.length === 0 ? "Dylan, Dylan, Dylan, Dylan" : ""}
                onChange={this.handleSearch}
              />
            </div>
          </div>
          <button className="submit-btn-add-ppl" onClick={this.handleSubmit}>Go</button>
        </div>
        <ul className="channel-form-user-list hidden">
          {searchListWithAvs}
        </ul>
      </div>
    )
  }


}

export default AddPeople;

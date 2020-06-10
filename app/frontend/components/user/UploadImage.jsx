import React from 'react';
import { closeModal } from '../../actions/modal_actions';


class UploadImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      avatarFile: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = new FormData();

    for (let attr in this.props.user) {
      user.append(`user[${attr}]`, this.props.user[attr]);
    }

    if (this.state.avatarFile) {
      user.append('user[avatar]', this.state.avatarFile);
    }
    this.props.editUser(user)
    this.props.closeModal();
  }

  handleFile(e){
    e.preventDefault();
    this.setState({avatarFile: e.currentTarget.files[0]});
  }

  render() {
    return(
      <div className="avatar-change">
        <div className="avatar-change-head">
          <h1>Upload new avatar</h1>
          <button onClick={()=> this.props.closeModal()}><img src={window.xURL} width="13"/></button>
        </div>
        <form className="avatar-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="file"
            onChange={this.handleFile.bind(this)}
          />
          <button>Change your avatar</button>
        </form>
      </div>
    )
  }

}

export default UploadImage


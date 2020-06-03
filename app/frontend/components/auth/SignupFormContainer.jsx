import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './SessionForm'
import { fetchUsers } from '../../actions/user_actions'


const mSTP = (state, ownProps) => {
  const errors = state.errors.session;
  return {
    errors: errors,
    formType: 'signup',
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user)),
  }
}

export default connect(mSTP, mDTP)(SessionForm);
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions'
import SessionForm from './SessionForm'

const mSTP = (state, ownProps) => {
  const errors = state.errors.session;
  return {
    errors: errors,
    formType: 'login',
  }
}

const mDTP = (dispatch, ownProps) => (
  {
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
)

export default connect(mSTP, mDTP)(SessionForm);
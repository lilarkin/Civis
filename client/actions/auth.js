import { browserHistory } from 'react-router';
import { setFlash } from './flash';
import { resetReps } from './reps'

const logout = () => {
  return { type: 'LOGOUT' }
}

const login = (user) => {
  return { type: 'LOGIN', user }
}

export const handleLogin = (email, password) => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, password, } }
    }).done( user => {
      dispatch(login(user));
      browserHistory.push('/')
    }).fail( data => {
      dispatch(setFlash('Error Logging In.', 'error'));
    });
  }
}

export const handleLogout = () => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      dispatch(logout());
      dispatch(resetReps());
      browserHistory.push('/');
    }).fail( data => {
      dispatch(setFlash('Error Logging Out.', 'error'));
    });
  }
}

export const refreshLogin = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/logged_in_user',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      if(user.id)
        dispatch(login(user))
      else
        dispatch(logout());
    }).fail( data => {
      dispatch(setFlash('Error Refreshing User Data.', 'error'));
    });
  }
}

export const handleSignUp = (email, password, confirmPassword, first_name, last_name) => {
  return(dispatch) => {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, password, confirmPassword, first_name, last_name } }
    }).done( user => {
      dispatch(login(user));
      browserHistory.push('/');
    }).fail(data => {
      dispatch(setFlash('Error Creating Account.', 'error'));
    });
  }
}

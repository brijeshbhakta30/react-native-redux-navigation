import { SET_USER } from '../action-types/auth.action-types';
import authService from '../../services/auth.service';

export const loginUser = (credentials) => {
  return (dispatch) => {
    return authService.loginUser(credentials)
      .then((user) => {
        dispatch({
          type: SET_USER,
          payload: {
            user,
          },
        });
        return user;
      });
  }
};

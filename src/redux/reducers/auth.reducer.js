import { SET_USER } from '../action-types/auth.action-types';
import storage from '../../services/storage';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const user = action.payload && action.payload.user;
      return Object.assign({}, state, user);
    default:
      return state
  }
}

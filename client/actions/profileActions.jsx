import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { FETCH_PROFILE, FETCH_AVATAR } from '../actions/types';

export function fetchProfile() {
  return (dispatch) => {
    axios.get(`${apiPrefix}/profile`)
    .then((response) => {
      dispatch({
        type: FETCH_PROFILE,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function fetchAvatar() {
  return (dispatch) => {
    axios.get(`${apiPrefix}/profile/avatar`)
    .then((response) => {
      dispatch({
        type: FETCH_AVATAR,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

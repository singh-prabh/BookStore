import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { ADD_TO_CART,SET_CART } from './types';

export function onAddToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  }
}

export function fetchCart() {
  return function(dispatch) {
    axios.get(`${apiPrefix}/cart`)
    .then(response => {
      dispatch({
        type: SET_CART,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
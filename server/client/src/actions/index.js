// My actions creator

// All my action creators: Functions that return an action
import axios from 'axios';
import { FETCH_USER } from './types';

// Action to fetch user
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')

    dispatch({ type: FETCH_USER, payload: res.data })
  };

  // Action to handle tokens (stripe)
  export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data});
  };

  export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
  
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  };

  


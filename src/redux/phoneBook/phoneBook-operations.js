import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import * as phoneBookActions from './phoneBook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = ({ name, number }) => dispatch => {
  const item = { name, number };

  dispatch(phoneBookActions.addContactRequest);

  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(phoneBookActions.addContactSuccess(data)))
    .catch(error => dispatch(phoneBookActions.addContactError(error)));
};

export default { addContact };

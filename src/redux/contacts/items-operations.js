import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './items-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  const item = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};

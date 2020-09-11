import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Joe Joe',
        email: 'jj@gmail.com',
        phone: '718-867-5903',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Mary Sue',
        email: 'marysue@gmail.com',
        phone: '710-420-0369',
        type: 'professional',
      },
    ],
  };
  // pull out state and dispatch from the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  // return provider
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

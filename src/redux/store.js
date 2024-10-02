import { configureStore } from '@reduxjs/toolkit';
import contactData from '../components/data/contactData.json';

const initialState = {
  contacts: {
    items:
      JSON.parse(window.localStorage.getItem('contactUser')) ?? contactData,
  },
  filters: {
    name: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addContact': {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }

    case 'deleteContact':
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };

    case 'filterContact':
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      };
    case 'localData':
      return {
        contacts: {
          items: [action.payload],
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

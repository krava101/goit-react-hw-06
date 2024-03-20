import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const lsContactsKey = 'contacts';

const initialState = JSON.parse(localStorage.getItem(lsContactsKey)) || [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', favorite: true },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', favorite: false },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79', favorite: false },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26', favorite: true },
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      addContact: {
        reducer(state, action) {
          state.push(action.payload);
          localStorage.setItem(lsContactsKey, JSON.stringify(state));
        },
        prepare({ name, number }) {
          return {
            payload: {
              id: nanoid(3),
              name,
              number,
              favorite: false
            },
          }
        }
      },
      deleteContact(state, action) {
        const newState = state.filter(c => c.id !== action.payload);
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;
      },
      toogleFavContact(state, action) {
        for (const contact of state) {
          if (contact.id === action.payload) {
            contact.favorite = !contact.favorite;
            break;
          }
        localStorage.setItem(lsContactsKey, JSON.stringify(state));
      }
      }
    }
});

export const { addContact, deleteContact, toogleFavContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
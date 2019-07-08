import { FETCH_NOTES, ADD_NOTE, UPDATE_NOTE } from "./types";

export const fetchNotes = () => dispatch => {
  return dispatch({
    type: FETCH_NOTES,
    payload: [
      {
        id: 1,
        title: "Wake up Early",
        completed: false
      },
      {
        id: 2,
        title: "Do exercises",
        completed: false
      },
      {
        id: 3,
        title: "Have Breakfast",
        completed: false
      },
      {
        id: 4,
        title: "Have a fun and productive day",
        completed: false
      }
    ]
  });
};

export const addNotes = note => dispatch => {
  return dispatch({ type: ADD_NOTE, payload: note });
};

export const updateNotes = (notes, note) => dispatch => {
  console.log("prop", notes, note);

  notes.push(note);
  note = {};
  return dispatch({ type: UPDATE_NOTE, payload: notes, note });
};

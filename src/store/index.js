import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0}, 
  reducers: {
    increment: (state, action) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      console.log(state, action);
    },
    add : (state, action) => {
      console.log(state, action);
    },
    subtract: (state, action) => {
      console.log(state, action);
    }
  }
});

const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer
}});

export const counterActions = counterSlice.actions;
export default counterStore;

/*const counterReducer = (store = INITIAl_VALUE, action) => { 
  if (action.type === 'INCREMENT') {
  return {...store, counter: store.counter + 1};
  } else if (action.type === 'DECREMENT') {
    return {...store, counter: store.counter -1};
  } else if (action.type === 'ADD') {
    return {...store, counter: store.counter + Number(action.payload.num)};
  } else if (action.type === 'SUBTRACT') {
    return {...store, counter: store.counter - Number(action.payload.num)};
  } else if (action.type === 'PRIVACY_TOGGLE') {
    return {...store, privacy: !store.privacy};
  }
  return store;
}*/



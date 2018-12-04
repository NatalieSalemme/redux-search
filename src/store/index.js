import { createStore } from 'redux';

const initialState = {
  storiesList: [],
  inputText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return Object.assign({}, state, { inputText: action.text });
    case 'ON_INPUT_SUBMIT':
    case 'ON_INITIAL_LOAD':
      return Object.assign({}, state, {
        storiesList: action.storiesList,
        inputText: '',
      });

    default:
    console.log(state);
      return state;
  }
};
const store = createStore(reducer);
export default store;

import { types } from './actions';

export const initialState = {
  snackbarMessage: '',
  snackbarVisible: false
};

export function reduxSnackbarReducer(state = initialState, action) {
  switch (action.type) {
    case types.DISPLAY_SNACKBAR_MESSAGE:
    {
      const stateTransform = { ...state };
      stateTransform.snackbarMessage = action.message;
      stateTransform.snackbarVisible = true;
      return stateTransform;
    }
    case types.HANDLE_SNACKBAR_CLOSE:
    {
      const stateTransform = { ...state };
      stateTransform.snackbarMessage = '';
      stateTransform.snackbarVisible = false;
      return stateTransform;
    }
    default:
      return state;
  }
};

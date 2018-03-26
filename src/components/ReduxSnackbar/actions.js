export const types = {
    DISPLAY_SNACKBAR_MESSAGE: 'DISPLAY_SNACKBAR_MESSAGE',
    HANDLE_SNACKBAR_CLOSE: 'HANDLE_SNACKBAR_CLOSE'
  };
  
  export const handleSnackbarClose = () => ({
    type: types.HANDLE_SNACKBAR_CLOSE
  });
  
  export const displaySnackbarMessage = (message) => ({
    type: types.DISPLAY_SNACKBAR_MESSAGE,
    message
  });
  
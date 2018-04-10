# material-ui-redux-snackbar
A snackbar for reactjs using [Redux](https://github.com/reactjs/redux) that is dependent on the Snackbar from [material-ui](https://github.com/mui-org/material-ui).

## Dependencies

redux

material-ui

## Install

Using npm:

`npm install --save material-ui-redux-snackbar`

### Implementation

1) Add the reducer

```javascript
// Somewhere where you create your redux-store:
import { createStore, combineReducers } from 'redux';
import { reduxSnackbarReducer } from 'material-ui-redux-snackbar'; // Import it
const reducers = {
  // ... reducers ...
  reduxSnackbar: reduxSnackbarReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);
```

2) Add the React-component somewhere in your app (e.g. App.js)

```javascript
import { Provider }  from 'react-redux';
import { ReduxSnackbar } from 'material-ui-redux-snackbar';

<Provider store={store}>
	<ReduxSnackbar />
</Provider>
```

3) Then use it by dispatching the redux-actions, anywhere in your app

```javascript
import { displaySnackbarMessage } from 'material-ui-redux-snackbar';

dispatch(displaySnackbarMessage('myUniqueId'));

```

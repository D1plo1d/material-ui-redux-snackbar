import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';

import * as actions from './actions';

class ReduxSnackbar extends React.Component {
  render() {
    return (
      <Snackbar
        open={this.props.snackbarVisible}
        message={this.props.snackbarMessage}
        onRequestClose={this.props.handleSnackbarClose}
        {...this.props.snackbar}
      />
    );
  }
}

ReduxSnackbar.propTypes = {
  snackbar: PropTypes.object,
  snackbarMessage: PropTypes.string.isRequired,
  snackbarVisible: PropTypes.bool.isRequired,
  handleSnackbarClose: PropTypes.func.isRequired
};

ReduxSnackbar.defaultProps = {
  snackbar: {}
};

function mapStateToProps(state) {
  return {
    snackbarMessage: state.Snackbar.snackbarMessage,
    snackbarVisible: state.Snackbar.snackbarVisible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSnackbar);

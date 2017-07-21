import { connect } from 'react-redux';
import App from './App.js';

function mapStateToProps(state) {
  // TODO
  console.log("mapStateToProps", state);
  return {};
}

function mapDispatchToProps(dispatch) {
  // TODO
  console.log("mapDispatchToProps", dispatch);
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

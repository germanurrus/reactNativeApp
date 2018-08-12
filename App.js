import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';
import AppNavigator from './src/routes/navigation';
import store from './src/redux/store';


const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);


export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../../routes/navigation';

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;

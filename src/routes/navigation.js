import { createStackNavigator } from 'react-navigation';
import Feed from '../components/Feed';
import ItemDetail from '../components/ItemDetail';


const AppNavigator = createStackNavigator({
  Feed: { screen: Feed },
  ItemDetail: { screen: ItemDetail },
}, {
  initialRouteName: 'Feed',
});

export default AppNavigator;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import CartScreen from './src/screens/CartScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderDetails from './src/screens/OrderDetails';
import OrdersScreen from './src/screens/OrdersScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen />  */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}  
      {/* <CartScreen /> */}
      {/* <OrdersScreen />  */} 
      <OrderDetails />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});

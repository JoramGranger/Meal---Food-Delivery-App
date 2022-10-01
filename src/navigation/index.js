import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import CartScreen from '../screens/CartScreen/';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderDetails from '../screens/OrderDetails';
import OrdersScreen from '../screens/OrdersScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="HomeTabs" 
            component={HomeTabs}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="Restaurant" 
            component={RestaurantDetailsScreen} 
            /* options={{ headerShown: false}} */
            />

        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
        <Tab.Screen name="Home" component={HomeStackNavigator}
        options={{
            tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
            ),
         }}
        />
        <Tab.Screen name="Orders" component={OrdersScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="list-alt" size={24} color={color} />
            )
        }}
        />
        <Tab.Screen name="Profile" component={HomeScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-alt" size={24} color={color} />
            )
        }}
        />
    </Tab.Navigator>
    );    
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Restaurants" component={HomeScreen}/>
        <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen}/>
        </HomeStack.Navigator>
    );
};

export default RootNavigator;
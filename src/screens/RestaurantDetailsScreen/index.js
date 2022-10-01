import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

const restaurant = restaurants[1];

const RestaurantDetailsScreen = () => {
    return ( 
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={restaurant.dishes}
            renderItem={({item}) => <DishListItem dish={item}/>} 
            />
            <View style={styles.iconContainer}>
                <Ionicons name="arrow-back-circle" size={45} color="white" style={styles.iconContainer}/>
            </View>
        </View>
     );
}

export default RestaurantDetailsScreen;
 

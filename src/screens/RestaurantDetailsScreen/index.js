import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from "../../components/DishListItem";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
    return ( 
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image, }}
            style={styles.image}
            />
            <View style={styles.iconContainer}>
                <Ionicons name="arrow-back-circle" size={45} color="white" style={styles.iconContainer}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    {restaurant.deliveryFee}, {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}
                </Text>
            </View>
            <FlatList 
            data={restaurant.dishes}
            renderItem={({item}) => <DishListItem dish={item}/>} 
            />
        </View>
     );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 /3,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    }, 
    subtitle: {
        color: 'grey',
        fontSize: 15,
    },
    container: {
        padding: 10,
    },
    iconContainer: {
        /* backgroundColor: 'white',
        padding: 10, */
        position: 'absolute',
        top: 40,
        left: 10,
        /* borderRadius: 50, */
    },


});

export default RestaurantDetailsScreen;
 

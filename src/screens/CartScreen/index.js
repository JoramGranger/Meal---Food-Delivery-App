import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import restaurants from '../../../assets/data/restaurants.json';
const restaurant = restaurants[0];

const CartScreen = () => {

    const [quantity, setQuantity] = useState(0);
    

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text>Your items</Text>
            <View style={styles.row}>
                <View style={styles.quantityContainer}>
                    <Text>1</Text>
                </View>
                <Text style={{fontWeight: '600'}}>Name</Text>
                <Text style={{ marginLeft: 'auto'}}>UGX 12</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.button}>
                <Text style={styles.buttonText}>Make Order</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        with: '100%',
        paddingVertical: 30,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 10,
    },
    description: {
        color: 'grey',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    }
});

export default CartScreen
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const OrderListItem = ({order}) => {
  return (
    <View style={styles.row}>
      <Image source={{ uri: order.Restaurant.image }}
      style={styles.image}
      />
      <View>
      <Text style={styles.name}>{order.Restaurant.name}</Text>
      <Text style={styles.items}>3 items, UGX: 23,000</Text>
      <Text>2 days ago, {order.status}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      margin: 10,
      alignItems:  'center',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    name: {fontSize: 16, fontWeight: '600'},
    items: {marginVertical: 5, }
  });

export default OrderListItem
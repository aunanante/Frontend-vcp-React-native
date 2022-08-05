import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { elevation } from '../common/styles';

const DetailItem = ( {detail} ) => {
  return (
    <View>
      <Text style={styles.name}>{detail.detailName}</Text>
      <Image style={styles.image} source={{ uri: detail.imageDetailUrl }} />
    </View>
  )
}

export default DetailItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 150,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
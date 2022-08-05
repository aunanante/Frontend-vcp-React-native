import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { elevation } from '../common/styles';
import { useNavigation } from '@react-navigation/native';

const ProductItem = ({product}) => {
  const navigation = useNavigation();

  useEffect(() => {
    let mounted = true;
    //console.log(product.imageUrl);
    return () => mounted = false;
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl
        });
      }}
    >
      <View style={[styles.elevation, styles.container]} >
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{product.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{product.description}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.rating}>{product.unitPrice}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.rating}>{product.dateCreated}</Text>
          </View>
          {/* <View style={styles.info}>
            <Text style={styles.rating}>{product.imageUrl}</Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 120,
    alignSelf: "stretch",
    // borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,

  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color:'purple'
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold"
  },
});
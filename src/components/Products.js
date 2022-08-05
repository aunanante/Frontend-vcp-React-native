import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ProductItem from '../components/ProductItem';

const Products = ({ filterData, categoryName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vos Produits à {categoryName} ... </Text>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
}

export default Products;

const styles = StyleSheet.create({
  container: {
      marginHorizontal: 25,
      marginVertical: 15,
      flex: 1,
  },
  header: {
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 10,
      color:'blue'
      //height: 100,
  },
});
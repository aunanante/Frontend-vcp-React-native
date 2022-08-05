import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';

const Categories = ({ filterData, commerceName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vos Catégories à {commerceName} ... </Text>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  )
}

export default Categories;

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
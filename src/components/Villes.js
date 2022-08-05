import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react';
import VilleItem from '../components/VilleItem';

const Villes = ({ filterData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Liste des Villes</Text>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <VilleItem ville={item} />}
      />
    </View>
  );
}

export default Villes

const styles = StyleSheet.create({
  container: {
      marginHorizontal: 25,
      marginVertical: 15,
      flex: 1,
  },
  header: {
      fontWeight: "bold",
      fontSize: 18,
      paddingBottom: 10,
      color: 'blue'
      //height: 100,
  },
});
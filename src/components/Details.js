import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import DetailItem from '../components/DetailItem';


const Details = ( {filterData, name} ) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Vos Détails à {name} ... </Text> */}
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <DetailItem detail={item} />}
      />
    </View>
  )
}

export default Details;

const styles = StyleSheet.create({
  container: {
      marginHorizontal: 25,
      marginVertical: 15,
      // flex: 1,
  },
  header: {
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 10,
      color:'blue'
      //height: 100,
  },
});
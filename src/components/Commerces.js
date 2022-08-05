import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import CommerceItem from './CommerceItem';

const Commerces = ({ filterData, laVille }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vos Prestations à {laVille} ... </Text>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <CommerceItem commerce={item} />}
      />
    </View>
  )
}

export default Commerces;

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
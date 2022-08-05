import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
//https://www.kindacode.com/article/using-font-awesome-icons-in-react-native/
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import { elevation } from '../common/styles';

const SearchProduit = ({ setFilterData, masterData }) => {
  const [search, setSearch] = useState('');

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  }

  return (
    <View style={[styles.elevation, styles.container]}>
      <FontAwesomeIcon icon={faSearch} size={25} style={styles.iconStyles} />
      <TextInput
        style={styles.input}
        value={search}
        placeholder="Search Here"
        onChangeText={(text) => searchFilter(text)}
      />
    </View>
  );
}

export default SearchProduit;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40,
    flexDirection: "row",
  },
  elevation,
  input: {
    fontSize: 15,
    marginLeft: 10,
  },
});
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import SearchVille from '../components/SearchVille';
import Villes from '../components/Villes';

async function getList() {
  try {
    //const serverUrl = Platform.OS == 'ios' ? "localhost" : "10.0.2.2:80";
    let urlForAxios = "http://localhost:8080/api/test/all/villes";
    const { data: response } = await axios.get(urlForAxios);
    return response;

  } catch (error) {
    console.log(error);
    console.log('tout ne va pas bien');
  }
}

const HomeScreen = () => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
 

  useEffect(() => {
    let mounted = true;
    getList().then(items => {
      //console.log(items);
      setMasterData(items);
      setFilterData(items);
    });
    return () => mounted = false;
  }, []);

  return (
    <View style={styles.container}>
      <Header upperText='Choisir' lowerText='Ville' />
      <SearchVille setFilterData={setFilterData} masterData={masterData}/>
      <Villes filterData={filterData} />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(241, 255, 237)",
    flex: 1,
  },
});